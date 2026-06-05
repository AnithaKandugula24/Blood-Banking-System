const Donor = require('../Models/Donor');
const Contact = require('../Models/Contact');

const BLOOD_GROUPS = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

const getRelativeTime = (dateValue) => {
  if (!dateValue) {
    return 'just now';
  }

  const value = new Date(dateValue).getTime();
  if (Number.isNaN(value)) {
    return 'just now';
  }

  const diffMs = Math.max(0, Date.now() - value);
  const minutes = Math.floor(diffMs / (1000 * 60));

  if (minutes < 1) {
    return 'just now';
  }

  if (minutes < 60) {
    return `${minutes} min ago`;
  }

  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours} hr ago`;
  }

  const days = Math.floor(hours / 24);
  return `${days} day ago`;
};

const getUnitsFromText = (textValue, fallbackValue) => {
  const text = String(textValue || '');
  const match = text.match(/(\d+)\s*units?/i);
  if (!match) {
    return fallbackValue;
  }

  const unitNumber = Number(match[1]);
  if (!Number.isFinite(unitNumber) || unitNumber < 1) {
    return fallbackValue;
  }

  return `${unitNumber} ${unitNumber === 1 ? 'unit' : 'units'}`;
};

const getEmergencyLevel = (textValue) => {
  const text = String(textValue || '').toLowerCase();
  if (text.includes('critical') || text.includes('accident') || text.includes('emergency')) {
    return 'Critical';
  }

  return 'Urgent';
};

const DashboardController = {
  getDashboardData: async (req, res) => {
    try {
      const [donors, contacts] = await Promise.all([
        Donor.findAll({ order: [['id', 'DESC']] }),
        Contact.findAll({ order: [['id', 'DESC']] })
      ]);

      const bloodCountMap = BLOOD_GROUPS.reduce((acc, group) => {
        acc[group] = 0;
        return acc;
      }, {});

      donors.forEach((donor) => {
        const group = donor?.bloodGroup;
        if (bloodCountMap[group] !== undefined) {
          bloodCountMap[group] += 1;
        }
      });

      const donorRequests = donors.slice(0, 5).map((donor) => {
        const remarks = String(donor?.remarks || '');
        const isFulfilled = /fulfilled|completed|done/i.test(remarks);

        return {
          bloodGroup: donor?.bloodGroup || 'NA',
          name: donor?.name || 'Unknown donor',
          hospital: 'Registered request',
          units: getUnitsFromText(remarks, '1 unit'),
          status: isFulfilled ? 'Fulfilled' : 'Pending'
        };
      });

      const emergencyCases = contacts.slice(0, 3).map((contact, index) => {
        const message = String(contact?.message || 'Emergency case');
        const bloodGroupMatch = message.match(/\b(AB|A|B|O)[+-]\b/i);
        const bloodGroup = bloodGroupMatch ? bloodGroupMatch[0].toUpperCase() : 'O+';

        return {
          title: `${contact?.name || 'Emergency'} - Case ${index + 1}`,
          bloodGroup,
          units: `${getUnitsFromText(message, '1 unit')} needed`,
          hospital: 'Hospital request',
          time: getRelativeTime(contact?.createdAt),
          level: getEmergencyLevel(message)
        };
      });

      const pendingRequests = donorRequests.filter((request) => request.status === 'Pending').length;
      const bloodGroupsInStock = BLOOD_GROUPS.filter((group) => bloodCountMap[group] > 0).length;

      const stats = {
        totalDonors: donors.length,
        bloodGroups: bloodGroupsInStock,
        pendingRequests,
        emergencies: emergencyCases.length
      };

      const bloodGroups = BLOOD_GROUPS.map((group) => ({
        group,
        donors: bloodCountMap[group]
      }));

      return res.json({
        status: true,
        message: 'Dashboard data fetched',
        data: {
          stats,
          bloodGroups,
          donorRequests,
          emergencyCases
        }
      });
    } catch (error) {
      console.error('Dashboard API error:', error);
      return res.status(500).json({
        status: false,
        message: 'Unable to fetch dashboard data'
      });
    }
  }
};

module.exports = DashboardController;

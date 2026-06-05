const Service = require('../Models/service');

const ServiceController = {
    getData: async (req, res) => {
        const services = await Service.findAll();
        if(services.length > 0) {
            const ServiceArr = services.map(item => {
                return {
                    id: item.id,
                    name: item.name,
                    image: 'http://localhost:4000/image/' + item.img
                };
            });
            res.json({ status: true, message: 'Success', data: ServiceArr });
        } else {
            res.json({ status: false, message: 'No services found' });
        }
    }
};

module.exports = ServiceController;
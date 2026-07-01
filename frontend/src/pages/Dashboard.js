import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import { buildApiUrl } from "../config/api";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    stats: {
      totalDonors: 0,
      bloodGroups: 0,
      pendingRequests: 0,
      emergencies: 0
    },
    bloodGroups: [],
    donorRequests: [],
    emergencyCases: []
  });
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
  console.log("Calling:", buildApiUrl("api/dashboard"));

  axios
    .get(buildApiUrl("api/dashboard"))
    .then((resp) => {
      console.log("SUCCESS:", resp.data);

      const payload = resp?.data?.data;

      if (payload) {
        console.log("Setting offline = false");
        setDashboardData(payload);
        setIsOffline(false);
      } else {
        console.log("No payload received");
      }
    })
    .catch((error) => {
      console.error("ERROR:", error);
      console.log("Setting offline = true");
      setIsOffline(true);
    });
}, []);

  const stats = useMemo(() => {
    return [
      { label: "Total donors", value: String(dashboardData.stats.totalDonors || 0), status: "Active", statusClass: "success" },
      { label: "Blood groups", value: String(dashboardData.stats.bloodGroups || 0), status: "In stock", statusClass: "info" },
      { label: "Pending requests", value: String(dashboardData.stats.pendingRequests || 0), status: "Awaiting", statusClass: "warning" },
      { label: "Emergencies", value: String(dashboardData.stats.emergencies || 0), status: "Critical", statusClass: "danger" }
    ];
  }, [dashboardData.stats]);

  return (
    <div className="dashboard-page">
      <Header />

      <main className="container dashboard-main">
        {isOffline && (
          <div className="backend-offline-banner" role="alert">
            Backend offline: dashboard is currently unavailable. Check backend server and database connection.
          </div>
        )}

        <h2 className="dashboard-title">Dashboard</h2>

        <section className="dashboard-stats-grid">
          {stats.map((item) => (
            <article key={item.label} className="dashboard-panel stat-panel">
              <p className="stat-label">{item.label}</p>
              <h3 className="stat-value">{item.value}</h3>
              <p className={`stat-status ${item.statusClass}`}>{item.status}</p>
            </article>
          ))}
        </section>

        <section className="dashboard-section">
          <h5 className="section-kicker">Blood groups available in area</h5>
          <div className="dashboard-blood-grid">
            {dashboardData.bloodGroups.map((item) => (
              <article key={item.group} className="dashboard-panel blood-panel">
                <h4 className="blood-group">{item.group}</h4>
                <p className="blood-donors">{item.donors} donors</p>
              </article>
            ))}
          </div>
        </section>

        <section className="dashboard-section dashboard-columns">
          <div>
            <h5 className="section-kicker">Donor requests</h5>
            <div className="dashboard-panel request-list">
              {dashboardData.donorRequests.map((item) => (
                <article key={`${item.name}-${item.hospital}`} className="request-row">
                  <div className={`request-dot ${item.status === "Fulfilled" ? "success" : "warning"}`} />
                  <div className="blood-pill">{item.bloodGroup}</div>
                  <div className="request-person">
                    <h6>{item.name}</h6>
                    <p>{item.hospital} - {item.units}</p>
                  </div>
                  <span className={`status-pill ${item.status === "Fulfilled" ? "success" : "warning"}`}>
                    {item.status}
                  </span>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h5 className="section-kicker">Emergency cases</h5>
            <div className="emergency-list">
              {dashboardData.emergencyCases.map((item) => (
                <article key={item.title} className="dashboard-panel emergency-panel">
                  <div className="emergency-top">
                    <h6>{item.title}</h6>
                    <span>{item.time}</span>
                  </div>
                  <div className="emergency-bottom">
                    <div className="emergency-group">{item.bloodGroup}</div>
                    <p>{item.units} - {item.hospital}</p>
                    <span className={item.level === "Critical" ? "danger" : "warning"}>{item.level}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="dashboard-footer">
        <p>© 2026 Blood Bank Management System. All rights reserved.</p>
        <p>123 Main Street, Medak, Telangana | (123) 456-7890 | email@company.com</p>
      </footer>
    </div>
  );
};

export default Dashboard;

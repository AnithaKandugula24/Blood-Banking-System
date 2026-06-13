import React, { useState, useEffect } from "react";
import axios from "axios";
import { buildApiUrl } from "../config/api";

const OurTeamList = () => {
  const [team,setTeams] = useState([]);
  useEffect(() => {
    axios
      .get(buildApiUrl('api/team/get-team'))
      .then((ele) => {
        setTeams(ele?.data?.data || []);
      })
      .catch(() => {
        setTeams([]);
      });

  },[]);

  return (
    <div className="row" style={{ background: "#f4f4f4" }}>
      <div className="text-center">
        <h2 style={{ marginTop: "20px", marginBottom: "20px" }}>Our Team</h2>
      </div>

      {team && team.map((item) => {
          return (
            <div className="col-sm-3">
              <div className="card" style={{ margin: "20px" }}>
                <div className="text-center">
                <img className="card-img-top" src={item.image} style={{height:'100px',width:'100px'}} alt={item.name} />
                </div>

                <div className="card-body">
                  <h5 className="card-title text-center">{item.name}</h5>
                </div>
              </div>
            </div>
          );
        })}

      {team.length === 0 && (
        <h5 className="text-center mt-4 mb-4">Teams not found</h5>
      )}
    </div>
  );
};

export default OurTeamList;
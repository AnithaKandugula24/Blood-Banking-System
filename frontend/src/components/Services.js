import React, { useEffect, useState } from "react";
import axios from "axios";
import { buildApiUrl } from "../config/api";

const Services = () => {
  const [serviceList, setServiceList] = useState([]);

  useEffect(() => {
    axios
      .get(buildApiUrl('api/services'))
      .then((resp) => {
        setServiceList(resp?.data?.data || []);
      })
      .catch(() => {
        setServiceList([]);
      });
  }, []);

  return (
    <div className="service-container">
      <div className="text-center">
        <h2 className="service-title">Our Services</h2>
      </div>

      <div className="row">
        {serviceList && serviceList.map((ele) => {
          return (
            <div className="col-sm-3 text-center service-card">
              <div className="card w-80" style={{ marginLeft: "10px" }}>
                <div className="text-center">
                  <img
                    className="card-img-top"
                    src={ele.image}
                    style={{ height: "100px", width: "100px" }}
                    alt={ele.name}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{ele.name}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

      

export default Services;
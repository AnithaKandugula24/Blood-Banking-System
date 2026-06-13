import React from "react";
import bannerImage from "../assets/image/banner.jpg"
import { Link } from "react-router-dom";

const Donor = () => {
  return (
    <div className="row" style={{marginTop:'20px',marginBottom:'20px'}}>
        <div className="col-sm-6">
            <div className="text-center">
                <h2 style={{color:'red',marginBottom:'20px',marginTop:'20px'}}>Become a Donor</h2>
            </div>
        <div style={{display:'flex',justifyContent:'center'}}>
            <div style={{width:'80%'}}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
        <div className="text-center">
            <Link to={'/donor-request'} className='btn btn-danger' style={{marginTop:'20px'}}>Join Us</Link>
        </div>
    </div>

     
      <div className="col-sm-6">
        <img src={bannerImage} style={{width:'100%'}} alt="Blood donation banner" />
      </div>
    </div>
  );
}

export default Donor;
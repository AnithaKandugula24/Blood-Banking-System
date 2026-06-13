import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import bannerImage from "../assets/image/banner.jpg"
import axios from "axios";
import { buildApiUrl } from "../config/api";

const DonorRequest = ()=>{
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[mobile,setMobile] = useState("");
    const[bGroup,setBGroup] = useState("");
    const[remarks,setRemarks] = useState("");
    const[isError,setIsError] = useState("");
    const[isSuccess,setIsSuccess] = useState("");
    const submitForm = () => {
        setIsError("");
        setIsSuccess("");
        if(name === "" || email === "" || mobile === "" || bGroup === "" || remarks === ""){
            setIsError("Please fill all the fields");
        }else{
            const payload = {
                name:name,
                email:email,
                mobile:mobile,
                bloodGroup:bGroup,
                remarks:remarks
            }
            axios.post(buildApiUrl('api/donor'),payload)
                .then(()=>{
                    setName("");
                    setEmail("");
                    setRemarks("");
                    setMobile("");
                    setBGroup("");
                    setIsSuccess("Request sent Successfully")
                })
                .catch(() => {
                    setIsError("Unable to submit right now. Please try again later.");
                });
        }


    }
    return (<>
    <Header />
    <div style={{background:'rgb(244,244,244)',paddingTop:'20px',paddingBottom:'20px'}}></div>
        <div className="container">
            <div className="text-center">
                <h2>Become a Donor</h2>
            </div>
            <div class="card" style={{padding:"20px",margin:'10px'}}>
                <div className="row">
                    <div className="col-sm-6">
                        <img src={bannerImage} style={{width:'100%'}} alt="Donor request banner" />
                    </div>
                    <div className="col-sm-6">
                        {isError && <div class="alert alert-danger" role="alert">
                                {isError }
                        </div>}
                        {isSuccess && <div class="alert alert-success" role="alert">
                                {isSuccess }
                        </div>}
                        <div className="form-group mt-4">
                            <label for="name">Name:</label>
                            <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Enter Your Name" className="form-control" />
                        </div>
                        <div className="form-group mt-4">
                            <label for="name">Email:</label>
                            <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email:" className="form-control" />
                        </div>
                        <div className="form-group mt-4">
                            <label for="name">Mobile Number:</label>
                            <input type="text" onChange={(e)=>setMobile(e.target.value)} placeholder="Enter Mobile Number" className="form-control" />
                        </div>
                        <div className="form-group mt-4">
                            <label for="name">Blood Group:</label>
                            <input type="text" onChange={(e)=>setBGroup(e.target.value)} placeholder="Enter Your Blood Group" className="form-control" />
                        </div>
                        <div className="form-group mt-4">
                            <label for="name">Remarks:</label>
                            <textarea onChange={(e)=>setRemarks(e.target.value)} className="form-control"></textarea>
                        </div>
                        <div className="form-group mt-4">
                            <button onClick={submitForm} className="btn btn-danger">Submit Request</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <Footer />
    </>);
} 
export default DonorRequest;
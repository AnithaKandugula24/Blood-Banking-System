import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { buildApiUrl } from "../config/api";

const Contact=()=>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [mobile,setMobile] = useState("");
    const [message,setMessage] = useState("");
    const [isError,setIsError] = useState("");
    const [isSuccess,setIsSuccess] = useState("");

    const submit = () => {
        setIsError("");
        setIsSuccess("");
        const payload = {
            "name":name,
            "email":email,
            "mobile":mobile,
            "message":message
        }
        if(name === "" || email === "" || mobile === "" || message === ""){
            setIsError("Please fill all the fields");
        }else{
            axios.post(buildApiUrl('api/contact'),payload)
                .then(()=>{
                    setName("");
                    setEmail("");
                    setMobile("");
                    setMessage("");
                    setIsSuccess("contact Query sent Successfully")
                })
                .catch(() => {
                    setIsError("Unable to submit right now. Please try again later.");
                });
        }
       
    }
    
    return(
        <>
        <Header />
            <div className="container contact-container">
                <div className="text-center mt-4 mb-4"><h3>Connect With Us</h3></div>
                <div className="row contact-container">
                    <div className="col-sm-6">
                    <iframe title="Blood bank location map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30347.63445949629!2d78.22709816699412!3d18.050511345841947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcc1543603bbad5%3A0xd54ecd729feff53c!2sMedak%2C%20Telangana%20502110!5e0!3m2!1sen!2sin!4v1774930687960!5m2!1sen!2sin" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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
                            <input value={name} type="text" onChange={(e) => setName(e.target.value)} className="form-control" id="name" placeholder="Enter your name" />
                        </div>
                        <div className="form-group mt-4">
                            <label for="email">Email:</label>
                            <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" placeholder="Enter your email" />
                        </div>
                        <div className="form-group mt-4">
                            <label for="mobile">Mobile Number:</label>
                            <input value={mobile} type="text" onChange={(e) => setMobile(e.target.value)} className="form-control" id="mobile" placeholder="Enter your mobile number" />
                        </div>
                        <div className="form-group mt-4 mb-4">
                            <label for="message">Message:</label>
                            <textarea value={message} className="form-control" onChange={(e) => setMessage(e.target.value)} id="message" rows="5" placeholder="Enter your message">{message}</textarea>
                        </div>
                        <div className="form-group mt-4">
                            <button className="btn btn-danger" onClick={submit}>Submit</button>
                        </div>
                    </div> 
                </div>
                <div style={{background:'red',marginTop:'20px',marginBottom:'20px'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 text-center mt-4 mb-4">
                                <p className="mt-4 white-color"><b>Address:</b> 123 Main Street, Medak, Telangana</p>
                                <p className="white-color"><b>Phone:</b> (123) 456-7890</p>
                                <p className="white-color"><b>Email:</b> email@company.com</p>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Contact;
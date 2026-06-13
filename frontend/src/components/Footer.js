import React from "react";

import { Link} from "react-router-dom";

const Footer=()=>{

return(<div className="row">

        <div className="col-sm-4">
            <div className="text-center">
                <h2>Useful Links</h2>
            </div>
            <div className="text-center">
                <ul className="useful-link">
                    <li><Link to={'/'}>Link 1</Link></li>
                    <li><Link to={'/'}>Link 2</Link></li>
                    <li><Link to={'/'}>Link 3</Link></li>
                    <li><Link to={'/'}>Link 4</Link></li>
                    <li><Link to={'/'}>Link 5</Link></li>

                </ul>
            </div>
        </div>
        <div className="col-sm-4">
            <div>
                <p style={{ color: 'red', fontWeight: 'bold',marginTop:'10px'}}>Contact Information</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p>Email: email@company.com</p>
                <p>Mobile Number: +1 234 567 890</p>
            </div>
        </div>
        <div className="col-sm-4">
            <p style={{marginTop:'20px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className="form-group">
                <input type="email" className="form-control" placeholder="Enter your Email"/>
            </div>
            <div className="form-group" style={{marginTop:'20px'}}>
                <button className="btn btn-danger">Subscribe</button>
            </div>
        </div>
    </div>)
}

export default Footer;
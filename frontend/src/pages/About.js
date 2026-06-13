import React from "react";
import Header from "../components/Header";
import img1 from "../assets/image/img1.jpg";
import Footer from "../components/Footer";
const About=()=>{
    return(
        <>
        <Header />
        <div className="text-center mt-4 mb-4">
            <h3>About - Our Blood Bank</h3>
        </div>
        <div className="container mt-4 mb-4">
            <div className="row">
                <div className="col-sm-6">
                    <h4>Section Title 1</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="col-sm-6 text-center pt-4">
                    <img src={img1} className="about-image" alt="Blood donation awareness" />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 text-center pt-4">
                    <img src={img1} className="about-image" alt="Blood donation awareness" />
                </div>
                <div className="col-sm-6">
                    <h4>Section Title 2</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <h4>Section Title 3</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="col-sm-6 text-center pt-4">
                    <img src={img1} className="about-image" alt="Blood donation awareness" />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 text-center pt-4">
                    <img src={img1} className="about-image" alt="Blood donation awareness" />
                </div>
                <div className="col-sm-6">
                    <h4>Section Title 1</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-sm-12">
                    <h4>T&C</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default About;
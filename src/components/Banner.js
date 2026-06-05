import React from "react";

const Banner = () => {
    return(<>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img style={{height:'70vh'}}src="https://static.vecteezy.com/system/resources/thumbnails/008/191/708/small/human-blood-donate-and-heart-rate-on-white-background-free-vector.jpg" class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
            <img style={{height:'70vh'}}src="https://media.istockphoto.com/id/1266746884/photo/doctor-working-with-donor-blood.jpg?s=612x612&w=0&k=20&c=HBEdCB4M7pKQ4RgcA668fB96gK9ntVeZLXAXFE2mTMI=" class="d-block w-100" alt="..."/>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
</>)

}

export default Banner;
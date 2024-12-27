import React from "react";
import img from "../assets/about1.png";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img src={img} alt="img" />

      <div className=" space-y-4 lg:pt-14">
        <h1 className=" font-semibold text-4xl text-center md:text-start">
          Why Choose Us?
        </h1>
        <p>
        At The Majlis Restaurant, we pride ourselves on delivering an exceptional 
        dining experience where authenticity meets excellence. Our menu is a carefully 
        curated blend of traditional Middle Eastern flavors and contemporary culinary
         artistry, crafted using the freshest ingredients to ensure every bite is
          a delight. With a warm and inviting ambiance, we provide the perfect
           setting for family gatherings, casual meals, or special celebrations. 
          
        </p>
        <p>
        Our dedicated staff is committed to offering unparalleled hospitality, 
           making every guest feel at home. Whether you're indulging in our 
           signature dishes or exploring new flavors, dining at The Majlis 
           is more than a meal—it's a journey of taste, culture, and togetherness.
        </p>
        <div className=" flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
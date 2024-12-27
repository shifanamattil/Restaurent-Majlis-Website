import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img1.jpg')] bg-cover bg-no-repeat ">
      <div className=" w-full lg:w-2/3 space-y-5">
        <h1 className=" text-backgroundColor font-semibold text-6xl ">
         Savor the Flavors, Relish <br />the Moments – Welcome <br /> to Culinary Bliss at Majlis!
        </h1>
        <p className=" text-backgroundColor">
        Experience the essence of timeless tradition and modern elegance at The Majlis Restaurant,<br /> 
        where every meal is a celebration of culture and flavor
        </p>
        <div>
          <Button title="Order Now" />
        </div>
      </div>
    </div>
  );
};

export default Home;
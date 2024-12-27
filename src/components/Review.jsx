import React from "react";
import ReviewCard from "../layouts/ReviewCard";
import img1 from "../assets/pic1.png";
import img2 from "../assets/pic2.png";
import img3 from "../assets/pic3.png";

const Review = () => {
    return (
        <div className=" min-h-screen flex flex-col items-center justify-center md:px-32 px-5">
            <h1 className=" text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">
                Customer's Review
            </h1>
            <div className=" flex flex-col md:flex-row gap-5 mt-5">
                <ReviewCard
                    img={img1}
                    name="Mia"
                    review="I visited The Majlis with friends, 
        and it was an unforgettable experience. 
        The lamb kebabs were perfectly cooked, 
        and the hummus was the best I've ever had! 
        The restaurant has a cozy yet elegant vibe, 
        and the service was top-notch. Highly recommend 
        this place for anyone who loves great food and 
        hospitality."
                />


                <ReviewCard
                    img={img2}
                    name="Ahmed"
                    review= "This place is a hidden gem! From the fresh ingredients
        to the beautifully designed space, everything about The Majlis
        was perfect. I loved their baklava—it was the ideal way to end 
        the meal. The staff went above and beyond to make sure we had a 
        great time. Definitely my new go-to spot for dining out!"/>
                

                <ReviewCard
                    img={img3}
                    name="Mary"
                    review="The Majlis Restaurant exceeded all my expectations! 
         The food was bursting with authentic Middle Eastern flavors, 
         and the presentation was stunning. The ambiance was warm and 
         inviting, perfect for our family dinner. The staff was incredibly 
         attentive and made us feel so welcome. I can't wait to come back!"/>
            </div>
        </div>
    );
};

export default Review;
import React, { useState, useEffect } from "react";
import deadlift_img from "../../assets/images/600_deadlift.jpg";

// lets import the social media icons
import { InstagramIcon, GitHubIcon, LinkedInIcon, FiverIcon } from "../ui/SocialIcons";
import SlidingText from "../SlidingText";

const Hero = () => {
    return (
        <div className='w-full'>
            {/* Hero */}

            <div className='flex items-center justify-center h-full gap-40'>
                <div className='flex flex-col w-[500px] h-[500px] items-center justify-center'>
                    <h1 className='text-3xl font-bold text-center break-words align-middle items-center'>Welcome to my fitness application</h1>
                    <p className='text-l font-normal text-center break-words pt-4 align-middle'>
                        Unlock your <span className='text-blue-600 font-bold'>FULL</span> potential and start tracking your workouts now!
                    </p>
                    <div className='flex gap-5'>
                        <InstagramIcon />
                        <GitHubIcon />
                        <LinkedInIcon />
                        <FiverIcon />
                    </div>
                </div>
                <img src={deadlift_img} alt='greenGuy' className=' w-[300px] h-[400px] aspect-square object-cover rotate-3 rounded-2xl shadow-lg' />
            </div>

            {/* Transition  */}
            <SlidingText />

        
        </div>
    );
};

export default Hero;

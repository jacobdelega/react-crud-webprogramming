import React from "react";
import deadlift_img from "../../assets/images/600_deadlift.jpg";

// lets import the social media icons
import { InstagramIcon, GitHubIcon, LinkedInIcon, FiverIcon } from "../../components/ui/SocialIcons";
import SlidingText from "../SlidingText";

const index = () => {
    return (
        <div className='w-full min-h-screen'>
            {/* Hero */}

            <div className='flex items-center justify-center h-full gap-40'>
                <div className='flex flex-col w-[500px] h-[500px] items-center justify-center'>
                    <h1 className='text-3xl font-bold text-center break-words align-middle items-center'>Welcome to my fitness application</h1>
                    <p className="text-l font-normal text-center break-words pt-4 align-middle">Unlock your <span className="text-blue-600 font-bold">FULL</span> potential and start tracking your workouts now!</p>
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
            <SlidingText/>

            {/* Features */}
            <div className='flex items-center justify-center h-full gap-40'>
                <select className='border border-gray-300 rounded-md px-4 py-2'>
                    <option value=''>Select a day</option>
                    <option value='Monday'>Monday</option>
                    <option value='Tuesday'>Tuesday</option>
                    <option value='Wednesday'>Wednesday</option>
                    <option value='Thursday'>Thursday</option>
                    <option value='Friday'>Friday</option>
                    <option value='Saturday'>Saturday</option>
                    <option value='Sunday'>Sunday</option>
                </select>
            </div>
        </div>
    );
};

export default index;

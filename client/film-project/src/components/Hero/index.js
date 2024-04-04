import React from "react";
import greenGuy from "../../assets/images/logo512.png";

const index = () => {
    return (
        <div className='w-full min-h-screen'>
            {/* Hero */}
            <div className='flex items-center justify-center h-full gap-40'>
                <div className='w-[500px]'>
                    <h1 className='text-3xl font-bold text-center break-words'>Welcome to my fitness application</h1>
                    <p className='text-center break-words'>In this application we will perform CRUD operations with MongoDB, on top of that we will use Tailwind CSS and React to handle our beautiful UI!</p>
                    <p className='text-red-500 text-center'>Here are going to be my icons github / my personal website</p>
                </div>
                <img src={greenGuy} alt='greenGuy' className='w-1/3' />
            </div>

            {/* Transition  */}
            <div className='w-full h-52 bg-slate-50'>
                <div className='flex items-center justify-between h-full'>
                    <h1 className='ml-8 text-xl font-bold text-slate-500'>MarketSimp</h1>
                    <h1 className='text-xl font-bold text-slate-500'>Gymshark</h1>
                    <h1 className='text-xl font-bold text-slate-500'>YoungLA</h1>
                    <h1 className='mr-8 text-xl font-bold text-slate-500'>RandomGym</h1>
                </div>
            </div>

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

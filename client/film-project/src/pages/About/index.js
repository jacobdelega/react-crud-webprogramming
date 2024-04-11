import React from "react";

import Navbar from "../../components/Navbar";
import Card from '../../components/Card';
const index = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>

            <div className='flex justify-center w-full pt-8 min-h-screen'>
                <div name='about__container' className='w-5/6 bg-slate-50 shadow-lg'>
                    <div name='about__header' className='flex justify-center'>
                        <h1 className='text-4xl font-bold text-slate-600'>Breaking down the tech stack</h1>
                    </div>

                    <div name='about__content' className='flex justify-center'>
                        <div className='w-4/5'>
                            <p className='text-lg text-slate-500'>
                                This project was built using the MERN stack, which stands for MongoDB, Express, React, and Node.js. The backend server is built using Express and Node.js, and the database is MongoDB. The frontend is built using React
                                and UI Libraries. The server and client are connected using the Docker.
                            </p>
                        </div>
                    </div>

                    <div name='about__tech-stack' className='flex justify-center'>
                        <div className='grid grid-cols-3 w-4/5'>
                            <Card/> 
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default index;

import React from "react";

import Navbar from "../../components/Navbar";
import Card from '../../components/Card';

// Images
import reactImg from '../../assets/images/React_image.png';
import expressImg from '../../assets/images/express.png';
import mongoImg from '../../assets/images/mongodbimg.png';
import materialImg from '../../assets/images/materialui.png';

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
                        <div className='pt-8 grid grid-cols-3 w-4/5 gap-4'>
                            {/* PROPS breakdown */}

                            <Card tech={'React'} desc={'is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies.'} img={reactImg} learnMoreLink="https://react.dev/"/> 
                            <Card tech={'Express'} desc={'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. APIs.'} img={expressImg} learnMoreLink="https://expressjs.com/"/> 
                            <Card tech={'MongoDB'} desc={'MongoDB is a source-available, cross-platform, document-oriented database program. Classified as a NoSQL database product, MongoDB utilizes JSON-like documents with optional schemas.'} img={mongoImg} learnMoreLink="https://www.mongodb.com/"/> 
                            <Card tech={'MaterialUI'} desc={"Material UI is an open-source React component library that implements Google's Material Design. It's comprehensive and can be used in production out of the box."} img={materialImg} learnMoreLink="https://mui.com/material-ui/"/> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default index;

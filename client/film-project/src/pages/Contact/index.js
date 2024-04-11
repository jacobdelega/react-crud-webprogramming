import React from "react";
import Navbar from "../../components/Navbar";

const index = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>

            <div className='flex justify-center w-full pt-8 min-h-screen'>
                <div name='contact__container' className='w-5/6 bg-slate-50 shadow-lg'>
                    <div name='contact__header' className='pt-8 flex justify-center'>
                        <h1 className='text-4xl font-bold text-slate-600'>Contact Form</h1>
                    </div>

                    <div name='contact__content' className='flex justify-center'>
                        <div className='w-4/5'>
                            <p className='text-center text-lg text-slate-500'>If you are interested in staying up to date with the latest news and updates, please fill out the form below.</p>
                        </div>
                    </div>

                    <div name='contact__form' className='flex justify-center'>
                        <div className='w-4/5'>
                            <form className='flex flex-col'>
                                <label className='text-slate-500'>Name</label>
                                <input className='border border-slate-300 p-2' type='text' name='name' placeholder='Your Name' />

                                <label className='text-slate-500'>Email</label>
                                <input className='border border-slate-300 p-2' type='email' name='email' placeholder='Your Email' />

                                <label className='text-slate-500'>Message</label>
                                <textarea className='border border-slate-300 p-2' name='message' placeholder='Your Message' />

                                <button className='bg-slate-300 text-white p-2 mt-2'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default index;

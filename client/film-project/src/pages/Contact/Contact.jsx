import React, { useState } from "react";
import Navbar from "../../components/Navbar";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send the data to the server 
        fetch("http://localhost:3000/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, message }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <>
            <div>
                <Navbar />
            </div>

            <div className='flex justify-center w-full min-h-screen pt-8'>
                <div name='contact__container' className='w-5/6 shadow-lg bg-slate-50'>
                    <div name='contact__header' className='flex justify-center pt-8'>
                        <h1 className='text-4xl font-bold text-slate-600'>Contact Form</h1>
                    </div>

                    <div name='contact__content' className='flex justify-center'>
                        <div className='w-4/5'>
                            <p className='text-lg text-center text-slate-500'>If you are interested in staying up to date with the latest news and updates, please fill out the form below.</p>
                        </div>
                    </div>

                    <div name='contact__form' className='flex justify-center'>
                        <div className='w-4/5'>
                            <form onSubmit={handleSubmit} className='flex flex-col'>
                                <label className='text-slate-500'>Name</label>
                                <input className='p-2 border border-slate-300' type='text' name='name' placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} />

                                <label className='text-slate-500'>Email</label>
                                <input className='p-2 border border-slate-300' type='email' name='email' placeholder='Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />

                                <label className='text-slate-500'>Message</label>
                                <textarea className='p-2 border border-slate-300' name='message' placeholder='Your Message' value={message} onChange={(e) => setMessage(e.target.value)} />

                                <button className='p-2 mt-2 text-white bg-slate-300'>
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;

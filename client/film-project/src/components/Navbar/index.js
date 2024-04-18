import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation

const Navbar = () => {
    const navigate = useNavigate(); // For navigation

    const handleLogout = async () => {
        try {
            localStorage.removeItem("token");

            // Redirect to login page
            navigate("/login");
        } catch (err) {
            console.error("Error logging out:", err.message);
            // Handle logout error (optional)
        }
    };
    return (
        <nav className='h-[100px] flex justify-between items-center bg-slate-700 border-white border-b-4'>
            <div className='block pl-12'>
                {" "}
                {/* Left side with padding */}
                <p className='text-4xl italic font-bold text-white'>Rowan Web</p>
                <p className='block text-xl font-thin text-white gap'>P R O G R A M M I N G</p>
            </div>

            <div className='flex items-center justify-center h-full gap-2 mr-4'>
                {" "}
                {/* Right side with margin */}
                <a href='/home' className='flex items-center h-full px-4 text-xl font-normal border-red-500 hover:border-red-500 hover:border-t-2 hover:bg-slate-800 text-slate-300 hover:text-white hover:cursor-pointer'>
                    HOME
                </a>
                <a href='/about' className='flex items-center h-full px-4 text-xl font-normal border-red-500 hover:border-red-500 hover:border-t-2 hover:bg-slate-800 text-slate-300 hover:text-white hover:cursor-pointer'>
                    ABOUT
                </a>
                <a href='/contact' className='flex items-center h-full px-4 text-xl font-normal border-red-500 hover:border-red-500 hover:border-t-2 hover:bg-slate-800 text-slate-300 hover:text-white hover:cursor-pointer'>
                    CONTACT
                </a>
                <button onClick={handleLogout} className='flex items-center h-full px-4 text-xl font-normal border-red-500 hover:border-red-500 hover:border-t-2 hover:bg-slate-800 text-slate-300 hover:text-white hover:cursor-pointer'>
                    LOGOUT
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

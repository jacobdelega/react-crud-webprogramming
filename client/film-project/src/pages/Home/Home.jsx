import React from "react";
import Navbar from "../../components/Navbar/index";
import Hero from "../../components/Hero/Hero";
import Workout from "../../components/Workouts/Workouts";
import { useNavigate } from "react-router-dom"; // Use useNavigate for redirection
import { useState, useEffect } from "react";

export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            // Remove token from localStorage
            localStorage.removeItem("token");
            // Set isLoggedIn to false for conditional rendering
            setIsLoggedIn(false);
            // Optionally redirect to login page
            navigate("/login");
        } catch (err) {
            console.error("Error logging out:", err.message);
            // Handle logout error (optional)
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);
        } else {
            navigate("/login");
        }
    }, []);

    return (
        <div>
            <Navbar />
            {isLoggedIn ? (
                <>
                    <Hero />
                    <Workout />
                </>
            ) : null}
        </div>
    );
}

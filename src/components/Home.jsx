import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen ">
            {/* Title */}
            <h1 className="text-5xl font-black text-gray-900 mb-2">
                Sentiment Analysis App
            </h1>
            <p className="text-lg text-black mb-8">
                AI-powered Consultation Feedback Analysis
            </p>

            {/* Dashboard buttons */}
            <div className="flex flex-col gap-4 w-64">
                <Link
                    to="/dashboard-user"
                    className="w-full py-3 text-center bg-[#3855CA] text-white font-bold rounded-lg shadow-[#6488FF] hover:bg-blue-700 transition"
                >
                    User Dashboard
                </Link>
                <Link
                    to="/dashboard-admin"
                    className="w-full py-3 text-center bg-[#3855CA] text-white font-bold rounded-lg shadow-[#6488FF] hover:bg-blue-700 transition"
                >
                    Admin Dashboard
                </Link>
            </div>


        </div>
    );
};

export default Home;

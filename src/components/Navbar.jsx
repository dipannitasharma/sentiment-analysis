import React from "react";
import { UserRound, PenLine } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import stakeholderData from "@/data/stakeholder.json";
import adminData from "@/data/admin.json";

const Navbar = () => {
    const location = useLocation();

    // Determine which data to use based on the route
    let stakeholder = stakeholderData;
    if (location.pathname.startsWith("/dashboard-admin")) {
        stakeholder = adminData;
    }

    // Show create button only on admin dashboard routes
    const showCreateButton = location.pathname.startsWith("/dashboard-admin");

    return (
        <nav className="w-screen bg-white border-b border-black shadow-xl shadow-gray-500/15 flex items-center justify-between px-6 py-3">
            {location.pathname === "/" ? (
                <div className="w-full flex justify-end">
                    <Link to="/login">
                        <button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-3xl">
                            LOGIN
                        </button>
                    </Link>
                </div>
            ) : (
                <>
                    <div className="flex items-center gap-2 space-x-4 p-0">
                        {/* Brand */}
                        <Link to="/">
                            <div className="font-bold text-black text-3xl">
                                MCA&apos;{" "}
                                <sup className="text-[#002aff] font-black text-lg">
                                    25
                                </sup>
                            </div>
                        </Link>

                        {/* Create Draft Button (only for admin dashboard) */}
                        {showCreateButton && (
                            <div className="flex items-center space-x-4 p-0">
                                <Link to="/new">
                                    <button className="bg-[#42a146] rounded-md p-2 text-white flex gap-2 font-bold">
                                        Create New Draft <PenLine size={20} />
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Right Section: User Info */}
                    <div className="flex items-center space-x-4 p-0">
                        <div className="text-right">
                            <p className="text-sm font-semibold">
                                {stakeholder.name}
                            </p>
                            <p className="text-xs text-gray-600">
                                {stakeholder.role}
                            </p>
                        </div>
                        <button className="bg-red-600 border-1 border-[#647EFF] text-white text-sm font-semibold px-4 py-2 rounded-3xl">
                            LOG OUT
                        </button>
                        <UserRound
                            size={40}
                            className="bg-[#B8CEFE] rounded-full p-1 border"
                        />
                    </div>
                </>
            )}
        </nav>
    );

};

export default Navbar;

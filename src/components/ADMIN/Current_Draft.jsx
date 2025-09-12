import React from "react";
import { CircleCheckBig, ChevronRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Current_Draft = ({
    title = "Digital Data Protection and Privacy Bill, 2025",
    description = "This draft bill proposes guidelines for secure collection, storage, and usage of personal data by companies and government bodies. It emphasizes user consent, data minimization, and stricter penalties for misuse. The bill seeks to balance innovation in digital services with the protection of citizens' privacy rights.",
    image = "https://datavizproject.com/wp-content/uploads/types/Line-Graph.png",
    done = true,
}) => {
    return (
        <div className="w-full">
            <h1 className="ml-5 mb-3 font-black text-2xl uppercase text-[#2b6bf6]">
                Current Draft
            </h1>

            <div className="flex flex-col gap-4 rounded-2xl border border-black/50 bg-[#e5ecff] p-4">
                {/* Header with title + status */}
                <div className="flex items-center gap-3">
                    <div className="flex-1 rounded-md border bg-white px-5 py-4 font-bold uppercase text-lg">
                        {title}
                    </div>
                    <div className="rounded-md border bg-white p-3">
                        {done ? (
                            <CircleCheckBig
                                size={36}
                                className="text-green-600"
                            />
                        ) : (
                            <Clock size={36} className="text-red-600" />
                        )}
                    </div>
                </div>

                {/* Description */}
                <div className="rounded-md border bg-white px-5 py-4 text-sm leading-relaxed">
                    {description}
                </div>

                {/* Image */}
                <div className="overflow-hidden rounded-md border bg-white">
                    <img
                        src={image}
                        alt="Draft visualization"
                        className="w-full h-auto object-contain"
                    />
                </div>

                {/* Action button */}
                <div className="flex justify-center">
                    <Link to="/dashboard-admin/:slug"
                        className="w-full flex justify-center">
                        <button className="flex items-center w-[80%] justify-center gap-2 rounded-md bg-[#42a146] px-4 py-2 font-bold text-white hover:bg-[#368838] transition">
                            Check Out <ChevronRight size={18} />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Current_Draft;

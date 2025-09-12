import React from "react";
import { CircleCheckBig, ChevronRight, Clock, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const LatestDraft = ({
    title = "Digital Data Protection and Privacy Bill, 2025",
    author = "John Doe",
    description = "This draft bill proposes guidelines for secure collection, storage, and usage of personal data by companies and government bodies. It emphasizes user consent, data minimization, and stricter penalties for misuse. The bill seeks to balance innovation in digital services with the protection of citizens' privacy rights. This draft bill proposes guidelines for secure collection, storage, and usage of personal data by companies and government bodies. It emphasizes user consent, data minimization, and stricter penalties for misuse. The bill seeks to balance innovation in digital services with the protection of citizens' privacy rights. This draft bill proposes guidelines for secure collection, storage, and usage of personal data by companies and government bodies. It emphasizes user consent, data minimization, and stricter penalties for misuse. The bill seeks to balance innovation in digital services with the protection of citizens' privacy rights. This draft bill proposes guidelines for secure collection, storage, and usage of personal data by companies and government bodies. It emphasizes user consent, data minimization, and stricter penalties for misuse. The bill seeks to balance innovation in digital services with the protection of citizens' privacy rights. This draft bill proposes guidelines for secure collection, storage, and usage of personal data by companies and government bodies. It emphasizes user consent, data minimization, and stricter penalties for misuse. The bill seeks to balance innovation in digital services with the protection of citizens' privacy rights",
}) => {
    return (
        <div className="w-full">
            {/* Heading */}
            <div className="flex justify-between items-center mb-3 mx-5">
                <h1 className="font-black text-2xl uppercase text-[#2b6bf6]">
                    Latest Draft
                </h1>
            </div>

            {/* Card wrapper (relative for floating arrows) */}
            <div className="relative flex flex-col gap-4 rounded-2xl border border-black/50 bg-[#e5ecff] p-4">
                {/* Floating arrows above top-right */}
                <div className="absolute -top-6 right-2 flex bg-white border rounded-full shadow overflow-hidden">
                    <button className="p-2 hover:bg-gray-100 transition">
                        <ChevronLeft size={20} />
                    </button>
                    <button className="p-2 hover:bg-gray-100 transition border-l">
                        <ChevronRight size={20} />
                    </button>
                </div>

                {/* Title + author */}
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-3">
                        <div className="flex-1 rounded-md border bg-white px-5 py-4 font-bold uppercase text-lg">
                            {title}
                        </div>
                    </div>

                    <div className="rounded-md w-[50%] border bg-white px-5 py-2 text-sm leading-relaxed">
                        {author}
                    </div>
                </div>

                {/* Description */}
                <div className="rounded-md border bg-white px-5 py-4 text-sm leading-relaxed">
                    {description}
                </div>

                {/* Action button */}
                <div className="flex justify-center">
                    <Link to="/dashboard-user/:slug">
                        <button className="flex items-center w-full justify-center gap-2 rounded-md bg-[#42a146] px-4 py-2 font-bold text-white hover:bg-[#368838] transition">
                            Check Out <ChevronRight size={18} />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LatestDraft;
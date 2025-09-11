import React from "react";
import { User, ChevronRight , SlidersHorizontal} from "lucide-react";

const Comments = () => {
    const comments = [
        {
            user: "Rahul Sharma",
            comment:
                "I believe stricter penalties are important for companies mishandling personal data.",
        },
        {
            user: "Ananya Gupta",
            comment:
                "Transparency in corporate disclosures will definitely boost investor trust.",
        },
        {
            user: "Vikram Singh",
            comment:
                "Startups should have simplified compliance to encourage innovation.",
        },
        {
            user: "Priya Nair",
            comment:
                "Cybersecurity measures must be made mandatory for financial institutions.",
        },
        {
            user: "Arjun Mehta",
            comment:
                "Renewable energy adoption is critical, we must speed up the transition.",
        },
        {
            user: "Rahul Sharma",
            comment:
                "I believe stricter penalties are important for companies mishandling personal data.",
        },
        {
            user: "Ananya Gupta",
            comment:
                "Transparency in corporate disclosures will definitely boost investor trust.",
        },
        {
            user: "Vikram Singh",
            comment:
                "Startups should have simplified compliance to encourage innovation.",
        },
        {
            user: "Priya Nair",
            comment:
                "Cybersecurity measures must be made mandatory for financial institutions.",
        },
        {
            user: "Arjun Mehta",
            comment:
                "Renewable energy adoption is critical, we must speed up the transition.",
        },
    ];

    return (
        <div className="flex h-screen flex-col">
            {/* Header */}
            <div className="flex justify-between items-center px-3">
                <h1 className="ml-2 mb-3 font-black text-2xl uppercase text-[#2b6bf6]">
                    Comments
                </h1>
                <button className="p-2">
                    {/* filter icon placeholder */}
                    <SlidersHorizontal />
                </button>
            </div>

            {/* Scrollable comments area */}
            <div className="flex-1 overflow-y-auto px-3">
                <div className="flex flex-col gap-3">
                    {comments.map((c, index) => (
                        <div
                            key={index}
                            className="bg-[#e5ecff] border border-gray-400 rounded-xl p-3 flex flex-col gap-2 shadow-sm"
                        >
                            {/* Top row */}
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <User size={28} className="text-gray-600" />
                                    <div className="bg-white rounded-md px-2 py-1 font-semibold text-sm">
                                        {c.user}
                                    </div>
                                </div>
                                <ChevronRight
                                    size={24}
                                    className="text-gray-600"
                                />
                            </div>

                            {/* Comment box */}
                            <div className="bg-white border rounded-md px-3 py-2 text-sm text-gray-700">
                                {c.comment}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Comments;

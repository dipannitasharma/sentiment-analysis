import React from "react";
import { ChevronRight } from "lucide-react";

const Draft = ({
    title = "National AI Ethics Framework Bill, 2025",
    author = "Policy Committee - Govt. of India",
    description = "This draft bill proposes the creation of a national AI ethics framework to regulate the development and deployment of artificial intelligence systems. It focuses on fairness, accountability, transparency, and the prevention of bias in automated decision-making. The bill also calls for the establishment of an AI Oversight Authority to monitor compliance, encourage responsible innovation, and ensure that AI technologies serve the public interest while protecting citizens' rights and data privacy. This draft bill proposes the creation of a national AI ethics framework to regulate the development and deployment of artificial intelligence systems. It focuses on fairness, accountability, transparency, and the prevention of bias in automated decision-making. The bill also calls for the establishment of an AI Oversight Authority to monitor compliance, encourage responsible innovation, and ensure that AI technologies serve the public interest while protecting citizens' rights and data privacy. This draft bill proposes the creation of a national AI ethics framework to regulate the development and deployment of artificial intelligence systems. It focuses on fairness, accountability, transparency, and the prevention of bias in automated decision-making. The bill also calls for the establishment of an AI Oversight Authority to monitor compliance, encourage responsible innovation, and ensure that AI technologies serve the public interest while protecting citizens' rights and data privacy. This draft bill proposes the creation of a national AI ethics framework to regulate the development and deployment of artificial intelligence systems. It focuses on fairness, accountability, transparency, and the prevention of bias in automated decision-making. The bill also calls for the establishment of an AI Oversight Authority to monitor compliance, encourage responsible innovation, and ensure that AI technologies serve the public interest while protecting citizens' rights and data privacy. This draft bill proposes the creation of a national AI ethics framework to regulate the development and deployment of artificial intelligence systems. It focuses on fairness, accountability, transparency, and the prevention of bias in automated decision-making. The bill also calls for the establishment of an AI Oversight Authority to monitor compliance, encourage responsible innovation, and ensure that AI technologies serve the public interest while protecting citizens' rights and data privacy. This draft bill proposes the creation of a national AI ethics framework to regulate the development and deployment of artificial intelligence systems. It focuses on fairness, accountability, transparency, and the prevention of bias in automated decision-making. The bill also calls for the establishment of an AI Oversight Authority to monitor compliance, encourage responsible innovation, and ensure that AI technologies serve the public interest while protecting citizens' rights and data privacy.",
    done = true,
}) => {
    return (
        <div className="w-full">
            <div className="flex flex-col gap-4 rounded-2xl border border-black/50 bg-[#e5ecff] p-4">
                {/* Header with title + status */}
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-3">
                        <div className="flex-1 rounded-md border bg-white px-5 py-4 font-bold uppercase text-lg">
                            {title}
                        </div>
                        {/* <button className="flex items-center gap-2 bg-white rounded-full border px-2 py-2 font-bold text-black transition">
                            <ChevronRight />
                        </button> */}
                    </div>

                    {/* Author */}
                    <div className="rounded-md w-[50%] border bg-white px-5 py-2 text-sm leading-relaxed">
                        {author}
                    </div>
                </div>

                {/* Description */}
                <div className="rounded-md border bg-white px-5 py-4 text-sm leading-relaxed">
                    {description}
                </div>

                {/* Action button */}
                {/* <div className="flex justify-center">
                    <button className="flex items-center w-[80%] justify-center gap-2 rounded-md bg-[#42a146] px-4 py-2 font-bold text-white hover:bg-[#368838] transition">
                        Check Out <ChevronRight size={18} />
                    </button>
                </div> */}
            </div>
        </div>
    );
};

export default Draft;

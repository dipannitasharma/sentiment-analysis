import React from "react";
import User_Draft from "./User_Draft";
import { Funnel } from "lucide-react";

const AvailableDrafts = () => {
    const drafts = [
        {
            title: "Digital Data Protection and Privacy Bill, 2025",
            description:
                "Guidelines for secure collection and storage of personal data with user consent and strict penalties for misuse.",
            done: true,
        },
        {
            title: "Corporate Transparency Act, 2025",
            description:
                "Aims to improve disclosure requirements for companies and increase accountability of directors and auditors.",
            done: false,
        },
        {
            title: "Green Business Incentive Policy, 2025",
            description:
                "Encourages sustainable practices by offering tax benefits to eco-friendly companies adopting renewable energy.",
            done: true,
        },
        {
            title: "Cybersecurity and Digital Safety Bill, 2025",
            description:
                "Focuses on cybercrime prevention, stronger security compliance, and protection of digital infrastructures.",
            done: false,
        },
        {
            title: "Startup Innovation Promotion Act, 2025",
            description:
                "Provides funding support, tax relief, and ease of regulations to encourage startups and entrepreneurs.",
            done: true,
        },
        {
            title: "National AI Ethics Framework Bill, 2025",
            description:
                "Seeks to establish ethical standards for AI development and deployment, ensuring fairness, transparency, and accountability.",
            done: false,
        },
        {
            title: "Climate Resilience and Adaptation Act, 2025",
            description:
                "Introduces measures to strengthen disaster preparedness, promote green infrastructure, and support vulnerable communities.",
            done: true,
        },
        {
            title: "Digital Education Enhancement Policy, 2025",
            description:
                "Aims to modernize the education system with online platforms, digital libraries, and equitable access to technology.",
            done: false,
        },
        {
            title: "Renewable Energy Transition Act, 2025",
            description:
                "Mandates increased investment in solar, wind, and hydropower, targeting 50% renewable energy by 2035.",
            done: true,
        },
        {
            title: "Financial Fraud Prevention and Accountability Bill, 2025",
            description:
                "Focuses on stricter monitoring of financial institutions, mandatory audits, and enhanced penalties for fraud.",
            done: false,
        },
    ];

    return (
        <div className="flex h-screen flex-col">
            {/* Header fixed at top */}
            <div >
                <h1 className="ml-5 mb-3 font-black text-2xl uppercase text-[#2b6bf6]">
                    Available Drafts
                </h1>
                <Funnel />


            </div>
            {/* Scrollable drafts area */}
            <div className="flex-1 overflow-y-auto pr-2">
                <div className="flex flex-col gap-3">
                    {drafts.map((draft, index) => (
                        <User_Draft
                            key={index}
                            title={draft.title}
                            description={draft.description}
                            done={draft.done}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AvailableDrafts;

import React from "react";
import { useNavigate } from "react-router-dom";
import { CircleCheckBig, Clock } from "lucide-react";

const Admin_Draft = ({
    title = "",
    description = "",
    status = "draft",
    id = "",
}) => {
    const isDone = status === "approved";
    const navigate = useNavigate();

    const handleClick = () => {
        if (id) {
            navigate(`/dashboard-admin/${id}`);
        }
    };

    return (
        <div className="w-full">
            <div
                className="flex flex-col gap-3 rounded-2xl border border-black/50 bg-[#e5ecff] p-3 cursor-pointer"
                onClick={handleClick}
            >
                {/* Title + Status */}
                <div className="flex items-center gap-2">
                    <div className="flex-1 rounded-md border bg-white px-3 py-2 font-bold uppercase text-sm">
                        {title}
                    </div>
                    <div className="rounded-md border bg-white p-2 flex items-center justify-center">
                        {isDone ? (
                            <CircleCheckBig
                                size={20}
                                className="text-green-600"
                            />
                        ) : (
                            <Clock size={20} className="text-red-600" />
                        )}
                    </div>
                </div>

                {/* Description (clamped to 2 lines) */}
                <div className="rounded-md border bg-white p-1 text-sm leading-snug line-clamp-2">
                    {description}
                </div>
            </div>
        </div>
    );
};

export default Admin_Draft;

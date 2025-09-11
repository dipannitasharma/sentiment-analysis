import React from "react";
import { CircleCheckBig, Clock } from "lucide-react";

const User_Draft = ({ title = "", description = "", done = true }) => {
    return (
        <div className="w-full">
            <div className="flex flex-col gap-3 rounded-2xl border border-black/50 bg-[#e5ecff] p-3">
                {/* Title + Status */}
                <div className="flex items-center gap-2">
                    <div className="flex-1 rounded-md border bg-white px-3 py-2 font-bold uppercase text-sm">
                        {title}
                    </div>
                    <div className="rounded-md border bg-white p-2 flex items-center justify-center">
                        {done ? (
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
                <div className="rounded-md border bg-white px-3 py-2 text-sm leading-snug line-clamp-2">
                    {description}
                </div>
            </div>
        </div>
    );
};

export default User_Draft;

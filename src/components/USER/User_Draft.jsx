import React from "react";
import {
    ChevronRight,
    ThumbsUp,
    ThumbsDown,
    MessageSquare,
    Tag,
} from "lucide-react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const User_Draft = ({
    title,
    description,
    author,
    tags = [],
    version,
    updatedAt,
    status,
    upvotes,
    downvotes,
    comments,
    id
}) => {
    if (status !== "draft") return null;

    return (
        <div className="w-full">
            <div className="flex flex-col gap-2 rounded-2xl border border-black/50 bg-[#e5ecff] p-4">
                {/* Title + Status */}
                <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between gap-1">
                        <div className="flex-1 rounded-md border bg-white px-3 py-2 font-bold uppercase text-sm">
                            {title}
                        </div>
                        <div className="rounded-md   p-1 flex items-center justify-center bg-[#42a146] hover:bg-[#368838] transition">
                            <button>
                                <Link to={id ? `/dashboard-user/${id}` : "#"}>
                                    <ChevronRight size={30} color="white"/>
                                </Link>
                            </button>
                        </div>
                    </div>

                    {/* Author + Version + Date */}
                    <div className="flex flex-wrap gap-4 text-xs text-gray-700">
                        <span className="bg-white border rounded-md px-2 py-1">
                            {author?.name} — {author?.role}
                        </span>
                        <span className="bg-white border rounded-md px-2 py-1">
                            v{version}
                        </span>
                        <span className="bg-white border rounded-md px-2 py-1">
                            Updated:{" "}
                            {format(new Date(updatedAt), "MMM d, yyyy")}
                        </span>
                    </div>

                    {/* Tags */}
                    {tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="flex items-center gap-1 bg-white border rounded-md px-3 py-1 text-xs font-medium"
                                >
                                    <Tag size={12} /> {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                {/* Description (clamped to 2 lines) */}
                <p className="rounded-md border bg-white p-1 text-sm leading-snug line-clamp-2">
                    {description}
                </p>

                {/* Engagement */}
                <div className="flex gap-4 text-xs text-gray-700">
                    <div className="flex items-center gap-1">
                        <ThumbsUp size={14} /> {upvotes}
                    </div>
                    <div className="flex items-center gap-1">
                        <ThumbsDown size={14} /> {downvotes}
                    </div>
                    <div className="flex items-center gap-1">
                        <MessageSquare size={14} /> {comments}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User_Draft;

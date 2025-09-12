import React, { useState, useMemo } from "react";
import {
    ChevronRight,
    ChevronLeft,
    MessageSquare,
    ThumbsUp,
    ThumbsDown,
    Tag,
} from "lucide-react";
import { Link } from "react-router-dom";
import draftsData from "@/data/drafts.json"; // Adjust path as needed
import { format } from "date-fns";

const LatestDraft = () => {
    // Filter drafts to exclude "approved" or "done"
    const filteredDrafts = useMemo(() => {
        return (draftsData?.data?.drafts || [])
            .filter((d) => d.status !== "approved" && d.status !== "done")
            .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextDraft = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredDrafts.length);
    };

    const prevDraft = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? filteredDrafts.length - 1 : prevIndex - 1
        );
    };

    if (filteredDrafts.length === 0) {
        return (
            <p className="text-center text-gray-500">
                No active drafts available
            </p>
        );
    }

    const draft = filteredDrafts[currentIndex];

    return (
        <div className="w-full">
            {/* Heading */}
            <div className="flex justify-between items-center mb-3 mx-5">
                <h1 className="font-black text-2xl uppercase text-[#2b6bf6]">
                    Latest Drafts
                </h1>
            </div>

            {/* Card */}
            <div className="relative flex flex-col gap-4 rounded-2xl border border-black/50 bg-[#e5ecff] p-4">
                {/* Floating arrows */}
                {filteredDrafts.length > 1 && (
                    <div className="absolute -top-6 right-2 flex bg-white border rounded-full shadow overflow-hidden">
                        <button
                            className="p-2 hover:bg-gray-100 transition"
                            onClick={prevDraft}
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            className="p-2 hover:bg-gray-100 transition border-l"
                            onClick={nextDraft}
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                )}

                {/* Title + Author */}
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-3">
                        <div className="flex-1 rounded-md border bg-white px-5 py-4 font-bold uppercase text-lg">
                            {draft.title}
                        </div>
                    </div>
                    <div className="rounded-md w-fit border bg-white px-5 py-2 text-sm">
                        {draft.author.name} — {draft.author.role}
                    </div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {draft.tags.map((tag) => (
                            <span
                                key={tag}
                                className="flex items-center gap-1 bg-white border rounded-md px-3 py-1 text-xs font-medium"
                            >
                                <Tag size={12} /> {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Description */}
                <div className="rounded-md border bg-white px-5 py-4 text-sm leading-relaxed">
                    {draft.description}
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap justify-between text-sm text-gray-600">
                    <div>
                        Version:{" "}
                        <span className="font-semibold">{draft.version}</span>
                    </div>
                    <div>
                        Last Updated:{" "}
                        <span className="font-semibold">
                            {format(new Date(draft.updated_at), "MMM d, yyyy")}
                        </span>
                    </div>
                    <div>
                        Review Deadline:{" "}
                        <span className="font-semibold">
                            {format(
                                new Date(draft.review_deadline),
                                "MMM d, yyyy"
                            )}
                        </span>
                    </div>
                </div>

                {/* Engagement */}
                <div className="flex gap-6 text-sm text-gray-700 mt-2">
                    <div className="flex items-center gap-1">
                        <ThumbsUp size={16} /> {draft.upvotes}
                    </div>
                    <div className="flex items-center gap-1">
                        <ThumbsDown size={16} /> {draft.downvotes}
                    </div>
                    <div className="flex items-center gap-1">
                        <MessageSquare size={16} /> {draft.comments_count}{" "}
                        Comments
                    </div>
                </div>

                {/* Action button */}
                <div className="flex justify-center">
                    <Link to={draft.id ? `/dashboard-user/${draft.id}` : "#"}>
                    <button className="flex items-center min-w-[80%] justify-center gap-2 rounded-md bg-[#42a146] px-4 py-2 font-bold text-white hover:bg-[#368838] transition">
                        Check Out <ChevronRight size={18} />
                    </button>
                </Link>
            </div>
        </div>
        </div >
    );
};

export default LatestDraft;
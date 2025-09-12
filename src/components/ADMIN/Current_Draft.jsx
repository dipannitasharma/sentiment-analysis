import React, { useMemo } from "react";
import {
    CircleCheckBig,
    Clock,
    Tag,
    MessageSquare,
    ThumbsUp,
    ThumbsDown,
    ChevronRight,
    BarChart3,
    TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import draftsData from "@/data/adminDrafts.json"; // adjust path as needed
import { format } from "date-fns";

const Current_Draft = () => {
    // Get the latest draft (assumes drafts are sorted newest first)
    const currentDraft = useMemo(() => {
        return draftsData?.data?.drafts?.[0] || null;
    }, []);

    if (!currentDraft) {
        return (
            <p className="text-center text-gray-500">
                No current draft available.
            </p>
        );
    }

    const isDone = currentDraft.status === "approved";
    const aiData = currentDraft.ai_analysis;

    return (
        <div className="w-full">

            <h1 className="ml-5 mb-3 font-black text-2xl uppercase text-[#2b6bf6]">
                Current Draft
            </h1>

            <div className="flex flex-col gap-4 rounded-2xl border border-black/50 bg-[#e5ecff] p-4">
                {/* Title + Status */}
                <div className="flex items-center gap-3">
                    <div className="flex-1 rounded-md border bg-white px-5 py-4 font-bold uppercase text-lg">
                        {currentDraft.title}
                    </div>
                    <div className="rounded-md border bg-white p-3">
                        {isDone ? (
                            <CircleCheckBig
                                size={36}
                                className="text-green-600"
                            />
                        ) : (
                            <Clock size={36} className="text-red-600" />
                        )}
                    </div>
                </div>

                {/* Author */}
                <div className="rounded-md w-fit border bg-white px-5 py-2 text-sm">
                    {currentDraft.author.name} — {currentDraft.author.role}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {currentDraft.tags.map((tag) => (
                        <span
                            key={tag}
                            className="flex items-center gap-1 bg-white border rounded-md px-3 py-1 text-xs font-medium"
                        >
                            <Tag size={12} /> {tag}
                        </span>
                    ))}
                </div>

                {/* Description */}
                <div className="rounded-md border bg-white px-5 py-4 text-sm leading-relaxed">
                    {currentDraft.description}
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap justify-between text-sm text-gray-600">
                    <div>
                        Version:{" "}
                        <span className="font-semibold">
                            {currentDraft.version}
                        </span>
                    </div>
                    <div>
                        Last Updated:{" "}
                        <span className="font-semibold">
                            {format(
                                new Date(currentDraft.updated_at),
                                "MMM d, yyyy"
                            )}
                        </span>
                    </div>
                    <div>
                        Review Deadline:{" "}
                        <span className="font-semibold">
                            {format(
                                new Date(currentDraft.review_deadline),
                                "MMM d, yyyy"
                            )}
                        </span>
                    </div>
                </div>

                {/* Engagement */}
                <div className="flex gap-6 text-sm text-gray-700 mt-2">
                    <div className="flex items-center gap-1">
                        <ThumbsUp size={16} /> {currentDraft.upvotes}
                    </div>
                    <div className="flex items-center gap-1">
                        <ThumbsDown size={16} /> {currentDraft.downvotes}
                    </div>
                    <div className="flex items-center gap-1">
                        <MessageSquare size={16} />{" "}
                        {currentDraft.comments_count} Comments
                    </div>
                </div>

                {/* AI Analysis Section */}
                {aiData && (
                    <div className="rounded-xl border  bg-white p-4 shadow-sm">
                        <h2 className="text-lg font-bold flex items-center gap-2 text-blue-700 mb-2">
                            <BarChart3 size={18} /> AI Analysis
                        </h2>
                        <p className="text-sm text-gray-700 mb-3">
                            {aiData.summary}
                        </p>
                        <ul className="list-disc list-inside text-sm text-gray-800 mb-3">
                            {aiData.key_points?.map((point, idx) => (
                                <li key={idx}>{point}</li>
                            ))}
                        </ul>

                        {/* Dummy Graph Data Display */}
                        <div className="grid grid-cols-3 gap-3 text-center">
                            {aiData.dummy_graphs?.support_trend && (
                                <div className="bg-blue-50 p-3 rounded-lg">
                                    <TrendingUp className="mx-auto text-blue-600 mb-1" />
                                    <p className="text-xs text-gray-600">
                                        Support Trend
                                    </p>
                                    <p className="font-bold">
                                        {aiData.dummy_graphs.support_trend.slice(
                                            -1
                                        )}
                                        %
                                    </p>
                                </div>
                            )}
                            {aiData.dummy_graphs?.false_positive_concerns && (
                                <div className="bg-red-50 p-3 rounded-lg">
                                    <TrendingUp className="mx-auto text-red-600 mb-1 rotate-180" />
                                    <p className="text-xs text-gray-600">
                                        False Positives
                                    </p>
                                    <p className="font-bold">
                                        {aiData.dummy_graphs.false_positive_concerns.slice(
                                            -1
                                        )}
                                        %
                                    </p>
                                </div>
                            )}
                            {aiData.dummy_graphs?.engagement_growth && (
                                <div className="bg-green-50 p-3 rounded-lg">
                                    <TrendingUp className="mx-auto text-green-600 mb-1" />
                                    <p className="text-xs text-gray-600">
                                        Engagement
                                    </p>
                                    <p className="font-bold">
                                        +
                                        {aiData.dummy_graphs.engagement_growth.slice(
                                            -1
                                        )}
                                        %
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Action button */}
                <div className="flex justify-center">
                    <Link
                        to={`/dashboard-admin/${currentDraft.id}`}
                        className="w-full flex justify-center"
                    >
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

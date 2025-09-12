import React, { useMemo } from "react";
import {
    CircleCheckBig,
    Clock,
    Tag,
    MessageSquare,
    ThumbsUp,
    ThumbsDown,
    ChevronLeft,
    BarChart3,
    TrendingUp,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import draftsData from "@/data/adminDrafts.json"; // adjust path as needed
import { format } from "date-fns";

const DraftDetails = ({ id: propId }) => {
    // Get ID from URL (if using route param) or from prop
    const { id: routeId } = useParams();
    const draftId = propId ?? Number(routeId);

    const draft = useMemo(() => {
        return (
            draftsData?.data?.drafts?.find((d) => d.id === Number(draftId)) ||
            null
        );
    }, [draftId]);

    if (!draft) {
        return <p className="text-center text-gray-500">Draft not found.</p>;
    }

    const isDone = draft.status === "approved";
    const aiData = draft.ai_analysis;

    return (
        <div className="w-full">
            <h1 className="ml-5 mb-3 font-black text-2xl uppercase text-[#2b6bf6]">
                Draft Details
            </h1>

            <div className="flex flex-col gap-4 rounded-2xl border border-black/50 bg-[#e5ecff] p-4">
                {/* Title + Status */}
                <div className="flex items-center gap-3">
                    <div className="flex-1 rounded-md border bg-white px-5 py-4 font-bold uppercase text-lg">
                        {draft.title}
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

                {/* Questions Section */}
                {draft.questions?.length > 0 && (
                    <div className="rounded-xl border bg-white p-4 shadow-sm">
                        <h2 className="text-lg font-bold mb-2 text-blue-700">
                            Questions
                        </h2>
                        <ul className="list-disc list-inside space-y-3">
                            {draft.questions.map((q) => (
                                <li key={q.id}>
                                    <p className="font-semibold">{q.text}</p>
                                    <div className="flex gap-2 mt-1 flex-wrap">
                                        {q.options.map((option, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-gray-100 border px-2 py-1 rounded-md text-xs"
                                            >
                                                {option}
                                            </span>
                                        ))}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* AI Analysis Section */}
                {aiData && (
                    <div className="rounded-xl border bg-white p-4 shadow-sm">
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

                {/* Back button */}
                <div className="flex justify-center">
                    <Link
                        to="/dashboard-admin"
                        className="w-full flex justify-center"
                    >
                        <button className="flex items-center w-[80%] justify-center gap-2 rounded-md bg-gray-600 px-4 py-2 font-bold text-white hover:bg-gray-700 transition">
                            <ChevronLeft size={18} /> Back
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DraftDetails;

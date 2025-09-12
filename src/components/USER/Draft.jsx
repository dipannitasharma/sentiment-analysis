import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { MessageSquare, ThumbsUp, ThumbsDown, Tag } from "lucide-react";
import draftsData from "@/data/drafts.json"; // Adjust path as needed
import { format } from "date-fns";

const Draft = () => {
    const { slug } = useParams();

    // Find the draft that matches the slug (id)
    const draft = useMemo(() => {
        return (draftsData?.data?.drafts || []).find(
            (d) => String(d.id) === slug
        );
    }, [slug]);

    if (!draft) {
        return <p className="text-center text-gray-500">Draft not found.</p>;
    }

    return (
        <div className="flex flex-col gap-4 rounded-2xl border border-black/50 bg-[#e5ecff] p-4">
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
                        {format(new Date(draft.review_deadline), "MMM d, yyyy")}
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
                    <MessageSquare size={16} /> {draft.comments_count} Comments
                </div>
            </div>
        </div>
    );
};

export default Draft;

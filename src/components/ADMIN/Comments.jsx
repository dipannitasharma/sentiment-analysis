import React, { useEffect, useState } from "react";
import { User, ChevronRight, SlidersHorizontal } from "lucide-react";
import commentsData from "@/data/comments.json"; // <- Place the JSON file in src/data/

const Comments = ({ id }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        if (!id) return;

        // Find the comments for the given draft ID
        const draftComments = commentsData.comments.find(
            (item) => String(item.id) === String(id)
        );

        setComments(draftComments ? draftComments.comments : []);
    }, [id]);

    return (
        <div className="flex h-screen flex-col">
            {/* Header */}
            <div className="flex justify-between items-center px-3">
                <h1 className="ml-2 mb-3 font-black text-2xl uppercase text-[#2b6bf6]">
                    Comments
                </h1>
                <button className="p-2">
                    <SlidersHorizontal />
                </button>
            </div>

            {/* Scrollable comments area */}
            <div className="flex-1 overflow-y-auto px-3">
                {comments.length > 0 ? (
                    <div className="flex flex-col gap-3">
                        {comments.map((c) => (
                            <div
                                key={c.comment_id}
                                className="bg-[#e5ecff] border border-gray-400 rounded-xl p-3 flex flex-col gap-2 shadow-sm"
                            >
                                {/* Top row */}
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <User
                                            size={28}
                                            className="text-gray-600"
                                        />
                                        <div className="bg-white rounded-md px-2 py-1 font-semibold text-sm">
                                            {c.author}
                                        </div>
                                    </div>
                                    <ChevronRight
                                        size={24}
                                        className="text-gray-600"
                                    />
                                </div>

                                {/* Comment box */}
                                <div className="bg-white border rounded-md px-3 py-2 text-sm text-gray-700">
                                    {c.text}
                                </div>

                                {/* Timestamp */}
                                <div className="text-xs text-gray-500 text-right">
                                    {new Date(c.timestamp).toLocaleString()}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500 text-center mt-10">
                        No comments available for this draft.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Comments;

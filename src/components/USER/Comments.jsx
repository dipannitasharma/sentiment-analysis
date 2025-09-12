import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { User } from "lucide-react";
import draftsData from "@/data/drafts.json";
import stakeholderData from "@/data/stakeholder.json";

const Comments = () => {
    const { slug } = useParams();

    // Get stakeholder info (static for now)
    const stakeholder = stakeholderData;

    // Find the matching draft and its questions
    const draft = useMemo(() => {
        return (draftsData?.data?.drafts || []).find(
            (d) => String(d.id) === slug
        );
    }, [slug]);

    if (!draft) {
        return <p className="text-gray-500 text-center">Draft not found.</p>;
    }

    return (
        <div className="w-full">
            <div className="flex flex-col gap-4 rounded-2xl border border-black/50 bg-[#e5ecff] p-4">
                {/* Header with stakeholder info */}
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <User size={28} className="text-gray-600" />
                        <div className="bg-white rounded-md px-2 py-1 font-semibold text-sm">
                            {stakeholder.name} — {stakeholder.role}
                        </div>
                    </div>
                    <p className="text-xs text-gray-600 ml-10">
                        {stakeholder.organization} | {stakeholder.department}
                    </p>
                    <p className="text-xs text-gray-600 ml-10 italic">
                        {stakeholder.notes}
                    </p>
                </div>

                {/* Comment box */}
                <div className="rounded-2xl border border-black/50 bg-white">
                    <textarea
                        className="w-full h-40 p-2 resize-none"
                        placeholder="Write your comment here..."
                    />
                </div>

                {/* Submit button */}
                <div className="flex justify-end">
                    <button className="flex items-center justify-end gap-2 rounded-md bg-[#42a146] px-4 py-2 font-bold text-white hover:bg-[#368838] transition">
                        Submit
                    </button>
                </div>

                {/* Dynamic MCQ Section */}
                {draft.questions?.length > 0 && (
                    <div className="flex flex-col gap-3">
                        <h2 className="font-bold">Describe us more</h2>
                        <div className="rounded-2xl border border-black/50 bg-white p-3">
                            <form className="flex flex-col gap-3 text-sm">
                                {draft.questions.map((q) => (
                                    <div key={q.id}>
                                        <p className="font-semibold">
                                            {q.id}. {q.text}
                                        </p>
                                        {q.options.map((option, idx) => (
                                            <label
                                                key={idx}
                                                className="flex items-center gap-2"
                                            >
                                                <input
                                                    type="radio"
                                                    name={`question-${q.id}`}
                                                    value={option}
                                                />
                                                {option}
                                            </label>
                                        ))}
                                    </div>
                                ))}
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Comments;

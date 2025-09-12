import React, { useMemo } from "react";
import User_Draft from "./User_Draft";
import draftsData from "@/data/drafts.json";

const AvailableDrafts = () => {
    // Same filtering logic as LatestDraft to stay consistent
    const drafts = useMemo(() => {
        return (draftsData?.data?.drafts || [])
            .filter((d) => d.status !== "approved" && d.status !== "done")
            .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
    }, []);

    if (drafts.length === 0) {
        return (
            <p className="text-center text-gray-500 mt-4">
                No drafts available
            </p>
        );
    }

    return (
        <div className="flex h-screen flex-col">
            {/* Header fixed at top */}
            <h1 className="ml-5 mb-3 font-black text-2xl uppercase text-[#2b6bf6]">
                Available Drafts
            </h1>

            {/* Scrollable list */}
            <div className="flex-1 overflow-y-auto pr-2">
                <div className="flex flex-col gap-2">
                    {drafts.map((draft) => (
                        <User_Draft
                            key={draft.id}
                            title={draft.title}
                            description={draft.description}
                            author={draft.author}
                            tags={draft.tags}
                            version={draft.version}
                            updatedAt={draft.updated_at}
                            status={draft.status}
                            upvotes={draft.upvotes}
                            downvotes={draft.downvotes}
                            comments={draft.comments_count}
                            id={draft.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AvailableDrafts;
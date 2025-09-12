import React, { useMemo } from "react";
import Admin_Draft from "./Admin_Draft";
import draftsData from "@/data/adminDrafts.json"; // adjust path if needed

const Your_Draft = () => {
    // Get all drafts by Amitav Roy (id = 1)
    const drafts = useMemo(() => {
        return (draftsData?.data?.drafts || []).filter(
            (d) => d.author.id === 1 // filter by current admin
        );
    }, []);

    return (
        <div className="flex h-screen flex-col">
            {/* Header fixed at top */}
            <h1 className="ml-5 mb-3 font-black text-2xl uppercase text-[#2b6bf6]">
                Your Drafts
            </h1>

            {/* Scrollable drafts area */}
            <div className="flex-1 overflow-y-auto pr-2">
                <div className="flex flex-col gap-3">
                    {drafts.length > 0 ? (
                        drafts.map((draft) => (
                            <Admin_Draft
                                key={draft.id}
                                title={draft.title}
                                description={draft.description}
                                status={draft.status}
                                id={draft.id}
                            />
                        ))
                    ) : (
                        <p className="text-center text-gray-500">
                            No drafts available.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Your_Draft;

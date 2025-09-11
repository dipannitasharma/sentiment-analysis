import React from "react";
import { FileText } from "lucide-react";

const CreateNewDraft = () => {
    return (
        <div className="w-full p-6">
            <div className="flex flex-col gap-4 rounded-2xl border border-black/50 bg-[#e5ecff] p-6">
                {/* Header */}
                <div className="flex items-center gap-2">
                    <FileText size={28} className="text-[#2b6bf6]" />
                    <h1 className="font-black text-2xl uppercase text-[#2b6bf6]">
                        Create New Draft
                    </h1>
                </div>

                {/* Draft Title */}
                <div>
                    <label className="font-semibold">Draft Title</label>
                    <input
                        type="text"
                        placeholder="Enter draft title..."
                        className="w-full mt-1 rounded-md border border-gray-400 bg-white px-3 py-2"
                    />
                </div>

                {/* Tags */}
                <div>
                    <label className="font-semibold">Tags</label>
                    <input
                        type="text"
                        placeholder="e.g., privacy, security, data"
                        className="w-full mt-1 rounded-md border border-gray-400 bg-white px-3 py-2"
                    />
                </div>

                {/* Draft Description */}
                <div>
                    <label className="font-semibold">Description</label>
                    <textarea
                        placeholder="Write the draft description here..."
                        className="w-full mt-1 h-40 rounded-md border border-gray-400 bg-white px-3 py-2 resize-none"
                    />
                </div>

                {/* Additional Questions (MCQs) */}
                <div className="flex flex-col gap-3">
                    <h2 className="font-bold">Additional Questions</h2>
                    <div className="rounded-2xl border border-black/50 bg-white p-3">
                        <form className="flex flex-col gap-3 text-sm">
                            {/* Q1 */}
                            <div>
                                <p className="font-semibold">1. How clear is this draft?</p>
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="clarity" /> Very Clear
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="clarity" /> Somewhat Clear
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="clarity" /> Unclear
                                </label>
                            </div>

                            {/* Q2 */}
                            <div>
                                <p className="font-semibold">2. Do you support this draft?</p>
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="support" /> Yes
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="support" /> No
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="support" /> Neutral
                                </label>
                            </div>

                            {/* Q3 */}
                            <div>
                                <p className="font-semibold">3. How important is this draft?</p>
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="importance" /> High
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="importance" /> Medium
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="importance" /> Low
                                </label>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                    <button className="flex items-center gap-2 rounded-md bg-[#42a146] px-6 py-2 font-bold text-white hover:bg-[#368838] transition">
                        Submit Draft
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateNewDraft;

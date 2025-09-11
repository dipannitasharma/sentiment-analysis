import React from 'react'
import { User } from "lucide-react";

const Comments = ({ name }) => {
    return (
        <div className="w-full">
            <div className="flex flex-col gap-4 rounded-2xl border border-black/50 bg-[#e5ecff] p-4">
                {/* Header with user */}
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <User size={28} className="text-gray-600" />
                        <div className="bg-white rounded-md px-2 py-1 font-semibold text-sm">
                            {name}
                        </div>
                    </div>
                </div>

                {/* Comment box */}
                <div className='rounded-2xl border border-black/50 bg-white'>
                    <textarea
                        className="w-full h-40 p-1 px-2 resize-none"
                        placeholder="Write your comment here..."
                    />
                </div>

                {/* Submit button */}
                <div className="flex justify-end">
                    <button className="flex items-center justify-end gap-2 rounded-md bg-[#42a146] px-4 py-2 font-bold text-white hover:bg-[#368838] transition">
                        Submit
                    </button>
                </div>

                {/* MCQ Section */}
                <div className='flex flex-col gap-3'>
                    <h2 className='font-bold'>Describe us more</h2>
                    <div className='rounded-2xl border border-black/50 bg-white p-3'>
                        <form className="flex flex-col gap-3 text-sm">
                            <div>
                                <p className="font-semibold">1. How clear is the draft?</p>
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="clarity" value="very_clear" /> Very Clear
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="clarity" value="somewhat_clear" /> Somewhat Clear
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="clarity" value="unclear" /> Unclear
                                </label>
                            </div>

                            <div>
                                <p className="font-semibold">2. Do you support this draft?</p>
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="support" value="yes" /> Yes
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="support" value="no" /> No
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="support" value="neutral" /> Neutral
                                </label>
                            </div>

                            <div>
                                <p className="font-semibold">3. How important is this draft to you?</p>
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="importance" value="high" /> High
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="importance" value="medium" /> Medium
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="importance" value="low" /> Low
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comments

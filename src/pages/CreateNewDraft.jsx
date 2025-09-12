import React, { useState } from "react";
import { FileText, PlusCircle, Trash2 } from "lucide-react";

const CreateNewDraft = () => {
    const [questions, setQuestions] = useState([]);

    const addQuestion = () => {
        setQuestions([
            ...questions,
            { text: "", options: [""] }, // start with one empty option
        ]);
    };

    const updateQuestionText = (index, value) => {
        const updated = [...questions];
        updated[index].text = value;
        setQuestions(updated);
    };

    const updateOptionText = (qIndex, optIndex, value) => {
        const updated = [...questions];
        updated[qIndex].options[optIndex] = value;
        setQuestions(updated);
    };

    const addOption = (qIndex) => {
        const updated = [...questions];
        updated[qIndex].options.push("");
        setQuestions(updated);
    };

    const removeOption = (qIndex, optIndex) => {
        const updated = [...questions];
        updated[qIndex].options.splice(optIndex, 1);
        setQuestions(updated);
    };

    const removeQuestion = (qIndex) => {
        const updated = [...questions];
        updated.splice(qIndex, 1);
        setQuestions(updated);
    };

    const handleSubmit = () => {
        console.log("Submitting draft with questions:", questions);
        // Add your backend integration here
    };

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

                {/* Dynamic Questions Section */}
                <div className="flex flex-col gap-3">
                    <h2 className="font-bold">Additional Questions</h2>
                    {questions.map((q, qIndex) => (
                        <div
                            key={qIndex}
                            className="rounded-2xl border border-black/50 bg-white p-4 flex flex-col gap-3"
                        >
                            {/* Question Text */}
                            <div className="flex justify-between items-center">
                                <input
                                    type="text"
                                    placeholder={`Question ${qIndex + 1}`}
                                    value={q.text}
                                    onChange={(e) =>
                                        updateQuestionText(
                                            qIndex,
                                            e.target.value
                                        )
                                    }
                                    className="w-full rounded-md border border-gray-300 px-3 py-2"
                                />
                                <button
                                    onClick={() => removeQuestion(qIndex)}
                                    className="ml-3 text-red-600 hover:text-red-800"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>

                            {/* Options */}
                            <div className="flex flex-col gap-2">
                                {q.options.map((opt, optIndex) => (
                                    <div
                                        key={optIndex}
                                        className="flex items-center gap-2"
                                    >
                                        <input
                                            type="text"
                                            placeholder={`Option ${
                                                optIndex + 1
                                            }`}
                                            value={opt}
                                            onChange={(e) =>
                                                updateOptionText(
                                                    qIndex,
                                                    optIndex,
                                                    e.target.value
                                                )
                                            }
                                            className="flex-1 rounded-md border border-gray-300 px-3 py-2"
                                        />
                                        {q.options.length > 1 && (
                                            <button
                                                onClick={() =>
                                                    removeOption(
                                                        qIndex,
                                                        optIndex
                                                    )
                                                }
                                                className="text-red-600 hover:text-red-800"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Add Option Button */}
                            <button
                                onClick={() => addOption(qIndex)}
                                className="text-blue-600 hover:underline text-sm self-start"
                            >
                                + Add Option
                            </button>
                        </div>
                    ))}

                    {/* Add Question Button */}
                    <button
                        onClick={addQuestion}
                        className="flex items-center gap-2 self-start rounded-md bg-blue-600 px-4 py-2 text-white font-semibold hover:bg-blue-700 transition"
                    >
                        <PlusCircle size={18} /> Add Question
                    </button>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                    <button
                        onClick={handleSubmit}
                        className="flex items-center gap-2 rounded-md bg-[#42a146] px-6 py-2 font-bold text-white hover:bg-[#368838] transition"
                    >
                        Submit Draft
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateNewDraft;

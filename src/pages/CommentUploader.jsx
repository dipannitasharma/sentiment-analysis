import Comments from "@/components/USER/Comments";
import Draft from "@/components/USER/Draft";
import React from "react";
const CommentUploader = () => {
    return (
        <div className="grid grid-cols-2 gap-4 h-fit">
            <Draft />
            <Comments />
        </div>
    );
};

export default CommentUploader;

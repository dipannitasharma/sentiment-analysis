
import Comments from '@/components/USER/Comments';
import Draft from '@/components/USER/Draft';
import React from 'react'
import { useParams } from 'react-router-dom';
const CommentUploader = () => {
    const { slug } = useParams();
    return (

        <div className='grid grid-cols-2 gap-4 h-fit'>
            <Draft />
            <Comments name={"raunak"} />
            
        </div>

    );
};

export default CommentUploader
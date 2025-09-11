import Comments from '@/components/ADMIN/Comments';
import Current_Draft_details from '@/components/ADMIN/Current_Draft_details';
import React from 'react'
import { useParams } from 'react-router-dom';
const CommentExplorer = () => {
  const { slug } = useParams();
  return (
    
      <div className='grid grid-cols-2 gap-4 h-fit'>
        <Current_Draft_details />
      {/* <Your_Draft /> */}
      <Comments />
      </div>

  );
};

export default CommentExplorer
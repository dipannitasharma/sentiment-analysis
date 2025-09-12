import Comments from '@/components/ADMIN/Comments';
import DraftDetails from '@/components/ADMIN/Current_Draft_details';
import React from 'react'
import { useParams } from 'react-router-dom';
const CommentExplorer = () => {
  const { slug } = useParams();
  return (

      <div className='grid grid-cols-2 gap-4 h-fit'>
      <DraftDetails id={slug} />
      {/* <Your_Draft /> */}
      <Comments id={slug} />
      </div>

  );
};

export default CommentExplorer

//for users
import AvailableDrafts from '@/components/USER/AvailableDrafts'
import LatestDraft from '@/components/USER/LatestDrafts'
import React from 'react'

const Dashboard_User = () => {
  return (
    <div className='grid grid-cols-2 gap-4 h-fit'>
      <AvailableDrafts />
      <LatestDraft />
    </div>
    
  )
}

export default Dashboard_User
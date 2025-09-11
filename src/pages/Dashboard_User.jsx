//for users
import AvailableDrafts from '@/components/USER/AvailableDrafts'
import LatestDrafts from '@/components/USER/LatestDrafts'
import React from 'react'

const Dashboard_User = () => {
  return (
    <div className='grid grid-cols-2 gap-4 h-fit'>
      <AvailableDrafts />
      <LatestDrafts />
    </div>
    
  )
}

export default Dashboard_User
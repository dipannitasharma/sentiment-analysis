//for organisers
import Current_Draft from '@/components/ADMIN/Current_Draft'
import Your_Draft from '@/components/ADMIN/Your_Draft'
import React from 'react'

const Dashboard = () => {
    return (
        <div className='grid grid-cols-2 gap-4 h-fit'>
            <Current_Draft />
            <Your_Draft />
        </div>

    )
}

export default Dashboard

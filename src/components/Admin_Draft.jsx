import React from 'react'
import { CircleCheckBig, Clock } from 'lucide-react';

const Admin_Draft = ({
    title = "Digital Data Protection and Privacy Bill, 2025",
    description = "This draft bill proposes guidelines for secure collection, storage, and usage of personal data by companies and government bodies. It emphasizes user consent, data minimization, and stricter penalties for misuse. The bill seeks to balance innovation in digital services with the protection of citizens' privacy rights.",
    done = true
}) => {
    return (
        <div>

            <div className='bg-[#d9d9d9] min-w-full h-fit flex flex-col gap-2 border-black/50 border rounded-2xl p-3'>
                <div className='flex justify-between gap-2 items-center'>
                    <div className='bg-white border font-bold uppercase text-md w-full p-2 rounded-md '>{title}</div>
                    <div className='bg-white border p-2 rounded-md'>
                        {done ? <CircleCheckBig size={24} color='green' /> : <Clock size={24} color='red' />}
                    </div>
                </div>
                {/* Clamp description to 2 lines */}
                <div className='bg-white border w-full p-1 rounded-md  line-clamp-2'>
                    {description}
                </div>
            </div>
        </div>
    )
}

export default Admin_Draft
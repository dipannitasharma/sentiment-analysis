
import React from 'react'
import { CircleCheckBig, ChevronRight , Clock} from 'lucide-react';

const Current_Draft = ({
    title = "Digital Data Protection and Privacy Bill, 2025",
    description = "This draft bill proposes guidelines for secure collection, storage, and usage of personal data by companies and government bodies. It emphasizes user consent, data minimization, and stricter penalties for misuse. The bill seeks to balance innovation in digital services with the protection of citizens' privacy rights.",
    image = "https://datavizproject.com/wp-content/uploads/types/Line-Graph.png",
    done = true
    
}) => {
    return (
        <div>
            <h1 className='font-black text-2xl uppercase text-[#2b6bf6] ml-5 mb-3'>Current Draft</h1>
            <div className='bg-[#d9d9d9] min-w-full h-fit flex flex-col gap-3 border-black/50 border rounded-2xl p-3 '>
                <div className='flex justify-between gap-3 items-center  '>
                    <div className='bg-white border font-bold uppercase text-xl  w-full py-5 rounded-md px-5'>{title}</div>
                    <div className='bg-white border p-3 rounded-md'>
                        {done ? <CircleCheckBig size={40} color='green' /> : <Clock size={40} color='red' />  }</div>
                </div>
                <div className='bg-white border  w-full py-5 rounded-md px-5'>{description}</div>
                <div className='bg-white border  w-full p-2 rounded-md '>
                    <img src={image} />
                </div>
                <div className='flex justify-end gap-3 items-center '>
                    <button className='bg-[#42a146] rounded-md p-2 text-white flex font-bold' >Check Out <ChevronRight /></button>
                </div>
            </div>
        </div>

    )
}

export default Current_Draft
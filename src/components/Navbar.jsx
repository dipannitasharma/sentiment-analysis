import React from 'react'
import { UserRound, PenLine } from 'lucide-react';
const Navbar = () => {
  return (
    <nav className="w-screen  bg-white border-b border-black shadow-xl shadow-gray-500/15 flex items-center justify-between px-6 py-3">

      <div className='flex items-center gap-2 space-x-4 p-0'>
        <div class=" font-bold text-black text-3xl">
          MCA&apos; <sup className="text-[#002aff] font-black text-lg">25</sup>
        </div>
        <div className="flex items-center space-x-4 p-0">
          <button className='bg-[#42a146] rounded-md p-2 text-white flex gap-2  font-bold' >Create New Draft <PenLine size={20}/></button>
        </div>
      </div>

      <div className="flex items-center space-x-4 p-0">
        <button className="bg-red-600 border-1 border-[#647EFF] text-white text-sm font-semibold px-4 py-2 rounded-3xl">
          LOG OUT
        </button>

        
        <UserRound size={40} className='bg-[#B8CEFE] rounded-full p-1 border' />
      </div>
    </nav>
  );
}

export default Navbar

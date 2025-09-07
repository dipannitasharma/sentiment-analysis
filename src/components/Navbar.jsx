import React from 'react'

const Navbar = () => {
  return (
    <nav className="w-screen   border-b border-black flex items-center justify-between px-6 py-3">
 
  <div class="text-lg font-bold text-black">
    MCA’25
  </div>

 
  <div className="flex items-center space-x-4">
    
    <button className="bg-red-600 border-1 border-[#647EFF] text-white text-sm font-semibold px-4 py-2 rounded-3xl">
      LOG OUT
    </button>

    
   <div className="w-15 h-15 bg-[#B8CEFE] flex items-center justify-center rounded-full  ">
        <svg xmlns="http://www.w3.org/2000/svg" 
             class="h-15 w-15 text-black-600" 
             fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 
          1.79-4 4 1.79 4 4 4zM6 20c0-3.314 2.686-6 6-6s6 2.686 6 6" />
        </svg>
      </div>
  </div>
</nav>


  )
}

export default Navbar
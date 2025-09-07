import React from 'react'
import Admin_Draft from '../Admin_Draft'

const Your_Draft = () => {
  const drafts = [
    {
      title: "Digital Data Protection and Privacy Bill, 2025",
      description: "Guidelines for secure collection and storage of personal data with user consent and strict penalties for misuse.",
      done: true,
    },
    {
      title: "Corporate Transparency Act, 2025",
      description: "Aims to improve disclosure requirements for companies and increase accountability of directors and auditors.",
      done: false,
    },
    {
      title: "Green Business Incentive Policy, 2025",
      description: "Encourages sustainable practices by offering tax benefits to eco-friendly companies adopting renewable energy.",
      done: true,
    },
    {
      title: "Cybersecurity and Digital Safety Bill, 2025",
      description: "Focuses on cybercrime prevention, stronger security compliance, and protection of digital infrastructures.",
      done: false,
    },
    {
      title: "Startup Innovation Promotion Act, 2025",
      description: "Provides funding support, tax relief, and ease of regulations to encourage startups and entrepreneurs.",
      done: true,
    },
  ]
  return (
    <div><h1 className='font-black text-2xl uppercase text-[#2b6bf6] ml-5 mb-3'>Your Drafts</h1>
      <div className='flex flex-col gap-3'>
        {drafts.map((draft, index) => (
        <Admin_Draft
          key={index}
          title={draft.title}
          description={draft.description}
          done={draft.done}
        />
      ))}</div>
    </div>
  )
}

export default Your_Draft
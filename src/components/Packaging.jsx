import React from 'react'
import List from './List';
// import '../App.css'

export const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];
export default function Packaging() {
  return (
    
    <div className='bg-[#5a3e2b] text-[#ffebb3] p-p flex justify-between flex-col gap-12 items-center h-screen'>
      <ul className='w-4/5 overflow-scroll grid grid-cols-grAuto gap-5 justify-center items-start'>
        {initialItems.map(items=> (
          <List items={items} key={items.id}/>
        ))}
      </ul>
    </div>
  )
}

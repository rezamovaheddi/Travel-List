import React from 'react'
import {useState} from 'react'
// import '../App.css'
export default function From() {
  const [description, setDescription] = useState('');
  const [quantity,setQuantity] = useState(3)
  return (
    <form className='bg-[#e5771f] p-2 flex items-center justify-center gap-2'>
        <h3 className='mr-4 text-4xl'>What do you need for travel😍</h3>
        <select className='bg-[#ffebb3] [#5a3e2b] rounded-3xl font-bold text-3xl p-p-f' 
          value={quantity} 
          onChange={(e)=> setQuantity(e.target.value)}
          >
          {Array.from({length: 20}, (_,i)=> i+1).map((num)=>(
            <option value={num} key={num}>{num}</option>
          ))}
        </select>
        <input className='bg-[#ffebb3] [#5a3e2b] rounded-3xl font-bold text-3xl p-p-f' type='text' placeholder='Item...' value={description} onChange={(e)=> setDescription(e.target.value)} />
        <button className='bg-[#76c7ad] [#5a3e2b] rounded-3xl font-bold text-3xl p-p-f uppercase'>Add</button>
    </form>
  );
};

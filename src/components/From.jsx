import React from 'react'
// import '../App.css'
export default function From() {
  return (
    <form className='bg-[#e5771f] p-2 flex items-center justify-center gap-2'>
        <h3 className='mr-4 text-4xl'>What do you need for travel😍</h3>
        <select className='bg-[#ffebb3] [#5a3e2b] rounded-3xl font-bold text-3xl p-p-f'>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
        <input className='bg-[#ffebb3] [#5a3e2b] rounded-3xl font-bold text-3xl p-p-f'  type='text' placeholder='Item...' />
        <button className='bg-[#76c7ad] [#5a3e2b] rounded-3xl font-bold text-3xl p-p-f uppercase'>Add</button>
    </form>
  );
};

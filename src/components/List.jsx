import React from 'react'

export default function List({items}) {

  return (
    <div>
        <li className='flex justify-center gap-5'>
            <span className={`${items.packed ? 'line-through' : ''}`}>
                {items.description}  {items.quantity}
            </span>
            <button className='text-2xl translate-y-[2px]'>❌</button>
            <input className='' type="checkbox"/>
        </li>
    </div>
  )
}
// textDecoration: 'line-thruogh'}
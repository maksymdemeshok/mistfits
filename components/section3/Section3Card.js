import React from 'react'


export default function Section3Card (props) {
    return <div className='flex flex-col bg-white box-border w-[140px] p-[15px] rounded shadow-md mt-[20px]'>
        <img className="w-[120px] h-[120px mb-[10px]" src={props.img} alt="" />
        <p className="mb-[10px] font-extralight text-xs">{props.country}</p>
        <h4 className="text-xs font-bold mb-[10px] w-[90px]">{props.title}</h4>
        <span className="text-xs block bg-yellow-800 bg-opacity-20 p-[6px] w-[68px] rounded-lg text-yellow-800 font-extrabold">{props.discount}</span>
    </div>
}
import React from 'react'

export default function Section7Card (props) {
    return (
        <div className="flex w-[374px] flex-col justify-center items-start">
            <img className="w-[374px] mb-[15px]" src={props.img} alt="" />
            <h2 className="text-xl font-extrabold">{props.title}</h2>
        </div>
    )
}
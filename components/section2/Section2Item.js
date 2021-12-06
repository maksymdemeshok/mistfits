import React from 'react'; 

export default function Section2Item (props) {
    return (
        <div className="max-w-sm my-11 mr-10 last:border-r-0 relative border-r-[3px] border-solid border-black">
            <img className="absolute left-[-40px] " src={props.img} alt="" />
            <h1 className="mb-4 text-base font-extrabold">{props.title}</h1>
            <p className="text-base mr-10 tracking-wide">{props.content}</p>
        </div>
    )
}
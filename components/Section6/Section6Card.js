import React from 'react'


export default function Section6Card (props) {
    return (
        <div className="flex w-[373px] flex-col rounded-xl">
            <img className="w-[373px]" src={props.img} alt="" />
            <div className="flex bg-white py-[35px] pr-[35px] pl-[25px] flex-row justify-between items-start rounded-b-xl">
                <img src="img/sec6/mm-comment.svg" alt="" />
                <div>
                    <p className="font-light mb-[30px] max-w-[247px]">{props.content}</p>
                    <a className="underline font-bold text-green-600" href={props.instLink}>{props.link}</a>
                </div>
            </div>
        </div>
    )
}
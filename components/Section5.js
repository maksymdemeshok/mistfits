import React from 'react'

export default function Section5 () {
    return (
        <div className="bg-sec3 py-[50px] flex justify-center items-center w-screen">
            <div className="flex w-[1200px] flex-row justify-between items-center">
                <img className="max-w-[400px]" src="img/sec5/mm-uglystickers.jpeg" alt="" />
                <div className="max-w-[500px]">
                   <img src="img/sec5/mm-uglytext.svg" alt="" />
                   <p 
                   className="text-xl mt-[15px] font-light">It can be expensive to eat healthy. Yet almost half of the food grown in this country is thrown out because it can't be sold. That's where we come in.</p>
                </div>
            </div>
        </div>
    )
}
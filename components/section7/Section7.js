import React from 'react'
import Section7Card from './Section7Card'


export default function Section7 () {
    return (
        <div className="bg-main w-screen pt-[70px] flex justify-center items-center">
            <div className="flex justify-center items-center flex-col">
                <h1 className="text-[42px] my-[25px] font-extrabold">There's more to explore</h1>
                <p className="text-xl my-[30px]">Visit our blog for recipes, how-tos, and the latest Misfits Market news.</p>
               <div className="flex flex-row w-[1200px] justify-between items-start">
               <Section7Card
                img="img/sec7/mm-card-1.jpeg"
                title="Make Produce Last Even Longer"
                 />
               <Section7Card
                img="img/sec7/mm-card-2.jpeg"
                title="Genius Tips from Our Chef-in-Residence Bobby Flay"
                 />
               <Section7Card
                img="img/sec7/mm-card-3.jpeg"
                title="How to Bring Out the Best in Your Favorite Veggies"
                 />
               </div>
                <button className="px-10 my-10 py-3 bg-yellow-300 font-bold text-xl text-extrabold rounded border-2 border-solid border-black">Visit Our Blog</button>
            </div>
        </div>
    )
}
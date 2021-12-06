import React from 'react';

export default function Hero() {
    return (
        <div className=" mt-32 w-full flex justify-center items-center min-h-full bg-contain bg-no-repeat bg-right-80 bg-56% bg-hero-pattern">
            <div className="w-1200 grid grid-cols-2 p-10 md:py-20 2xl:py-40 gap-10">
                <div className=" flex flex-col justify-center p-10 items-start ">
                    <h1 className="tracking-wide text-left text-6xl font-extrabold w-96 mb-12 " >Save big by saving food</h1>
                    <p className="text-left tracking-wide w-auto text-xl mb-12">Fight food waste with organic produce and sustainably sourced groceries delivered to your door at <span className="text-yellow-800 font-extrabold text-xl">up to 40% off</span> grocery store prices.</p>
                    <button className=" px-12 py-4 bg-yellow-300 font-bold text-lg text-extrabold rounded border-2 border-solid border-black">Get started</button>
                </div>
            </div>
            <div className=""></div>
        </div>
    )
}
import React from 'react'

export default function Section8() {
    return (
        <div>
            <div className="w-screen bg-bgsec8 bg-no-repeat bg-top-50 bg-cover min-h-[500px]">
                <div className=" w-screen bg-cover bg-top bg-no-repeat ">
                    <div className="max-w-[600px] flex justify-center items-center flex-col mx-auto">
                        <h1 className="text-[42px]  tracking-wide font-extrabold">If you made it this far...</h1>
                        <p className="text-xl my-[35px] font-light text-center">Something tells us you would appreciate our newsletter: dinner ideas, pics of funny fruit, and a bunch of other useful stuff.</p>
                        <form className="flex mb-[300px] justify-center items-center flex-col " action="">
                            <input className="w-[500px] py-[15px] px-[20px] rounded text-xl placeholder-gray-500 mb-[20px] font-light" placeholder="Your Email" type="mail" />
                            <input className="w-[500px] py-[15px] px-[20px] rounded text-xl placeholder-gray-500 font-light appearance-none" placeholder="Zip Code" type="number" />
                            <p className=" my-[20px] font-light text-sm text-center">By providing your email address, you agree to our <a className="text-green-600 underline" href="#">Terms of Service</a> and <a className="text-green-600 underline" href="#">Privacy Policy</a>.</p>
                            <button className="px-20 my-10 py-4 bg-yellow-300 font-bold text-xl text-extrabold rounded border-2 border-solid border-black hover:bg-green-600" type="submit">Join the Fun</button>
                        </form>
                    </div>
                </div>

            </div>
            <div className="w-screen bg-sec3 flex flex-col justify-center items-center">
                <h1 className="font-bold text-xl">Follow along <a className="text-xl font-light text-green-600 underline" href="#">@misfitsmarket </a> </h1>
                <div className="w-[1200px] mt-10 mb-[50px] flex flex-row justify-between items-center">
                    <img className="w-[175px]" src="img/sec8/mm-footer-1.png" alt="" />
                    <img className="w-[175px]" src="img/sec8/mm-footer-2.png" alt="" />
                    <img className="w-[175px]" src="img/sec8/mm-footer-3.png" alt="" />
                    <img className="w-[175px]" src="img/sec8/mm-footer-4.png" alt="" />
                    <img className="w-[175px]" src="img/sec8/mm-footer-5.png" alt="" />
                    <img className="w-[175px]" src="img/sec8/mm-footer-6.png" alt="" />
                  
                </div>
            </div>
        </div>
    )
}
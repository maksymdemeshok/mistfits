import React from 'react';

export default function Footer() {
    return (
        <div className="w-screen bg-sec3 flex flex-col items-center justify-center">
            <div className="flex flex-row justify-start items-start w-[1200px]">
                <div className="w-[400px] mr-[150px] flex flex-col justify-between items-start">
                    <form className="flex w-full flex-col justify-start items-start" action="">
                        <img className="w-[300px]" src="img/mm-logo.svg" alt="" />
                        <p className="text-base font-light my-[20px] tracking-wide">Subscribe to stay in the loop.</p>
                        <input className=" w-full bg-main my-[5px] h-[60px] py-[10px] px-[15px] placeholrder-gray-600 rounded " type="email" placeholder="Email" />
                        <input className=" w-full bg-main my-[5px] h-[60px] py-[10px] px-[15px] placeholrder-gray-600 rounded " type="text" placeholder="Zip Code" />
                        <button className="px-20 w-full mt-[15px] py-4 bg-yellow-300 font-bold text-xl text-extrabold rounded border-2 border-solid border-black hover:bg-green-600" type="submit">Sign Up</button>
                        <p className="text-base font-light my-[20px] tracking-wide">By providing your email address, you agree to our <a href="#" className="text-green-600 underline">Terms of Service</a> and <a href="#" className="text-green-600 underline">Privacy Policy</a>.</p>
                    </form>
                </div>
                <div className="flex w-[500px] flex-row justify-between items-start">
                    <ul>
                        <li className="list py-[10px] none text-base font-extrabold"><a href="#">Signup</a></li>
                        <li className="list py-[10px] none text-base font-extrabold"><a href="#">Our Produce</a></li>
                        <li className="list py-[10px] none text-base font-extrabold"><a href="#">Our Sourcing</a></li>
                        <li className="list py-[10px] none text-base font-extrabold"><a href="#">About Us</a></li>
                        <li className="list py-[10px] none text-base font-extrabold"><a href="#">Refer Friends</a></li>
                    </ul>
                    <ul>
                        <li className="list py-[10px] none text-base font-extrabold"><a href="#">Blog</a></li>
                        <li className="list py-[10px] none text-base font-extrabold"><a href="#">Careers</a></li>
                        <li className="list py-[10px] none text-base font-extrabold"><a href="#">Press</a></li>
                        <li className="list py-[10px] none text-base font-extrabold"><a href="#">Accessibility</a></li>

                    </ul>
                    <ul>
                        <li className="list py-[10px] none text-base font-extrabold"><a href="#">FAQs</a></li>
                        <li className="list py-[10px] none text-base font-extrabold"><a href="#">Help Center</a></li>
                        <li className="list py-[10px] none text-base font-extrabold"><a href="#">Contact us</a></li>

                    </ul>
                </div>
            </div>
            <div className="w-[1200px] mt-[40px] mb-[70px] flex justify-between flex-row items start">
                <div className="w-[400px]" >
                    <ul className="w-full flex flex-row items-center justify-between">
                        <li><img className="w-[45px]" src="img/socials/mm-social-instagram.svg" alt="" /></li>
                        <li><img className="w-[45px]" src="img/socials/mm-social-fb.svg" alt="" /></li>
                        <li><img className="w-[45px]" src="img/socials/mm-social-tiktok.svg" alt="" /></li>
                        <li><img className="w-[45px]" src="img/socials/mm-social-twitter.svg" alt="" /></li>
                        <li><img className="w-[45px]" src="img/socials/mm-social-youtube.svg" alt="" /></li>
                        <li><img className="w-[45px]" src="img/socials/mm-social-pin.svg" alt="" /></li>
                    </ul>
                </div>
                <div>
                    <p className="font-light text-right text-sm">Copyright © Misfits Market. All rights reserved.</p>
                    <ul className="flex flex-row ">
                        <li className=""><a className="border-r text-sm px-[5px] border-solid border-black underline font-light text-base text-green-600 " href="#">Terms of Service</a></li>
                        <li className=""><a className="border-r text-sm px-[5px] border-solid border-black underline font-light text-base text-green-600 " href="#">Privacy Policy </a></li>
                        <li className=""><a className="border-r text-sm px-[5px] border-solid border-black underline font-light text-base text-green-600 " href="#">Do Not Sell My Information</a></li>
                        <li className=""><a className=" text-sm px-[5px]  underline font-light text-base text-green-600 " href="#">California Privacy Notice</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
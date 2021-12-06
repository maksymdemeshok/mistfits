import React from 'react'
import Section3Card from './Section3Card'
import { CheckIcon } from '@heroicons/react/solid'

export default function Section3() {
    return <div className="w-full bg-sec3 flex justify-center items-center">
        <div className=" grid grid-cols-2 justify-items-between w-[1200px]  py-16 gap-5">
            <div className=" min-h-[600px] flex flex-row justify-evenly max-w-[500px]">
                <div className="flex flex-col justify-center items-center">
                    <Section3Card
                        img='img/sec3/mm-avocado.jpeg'
                        title='Organic Hass Avocados'
                        discount='50% Off'
                    />
                    <Section3Card
                        img='img/sec3/mm-olive.jpeg'
                        country='Italione'
                        title='Organic Extra Virgin Olive Oil, 25.5 Fl Oz'
                        discount='44% Off'
                    />
                </div>
                <div className="flex mt-[120px] flex-col justify-evenly items-end">

                    <Section3Card
                        img='img/sec3/mm-orange.jpeg'
                        title='Organic Valencia Oranges'
                        discount='67% Off'
                    />

                    <Section3Card
                        img='img/sec3/mm-waffle.jpeg'
                        country='Belgian Boys'
                        title='Butter Waffle Chips, 4.23 Oz'
                        discount='50% Off'
                    />
                </div>

                <div className="flex flex-col justify-start items-center">

                    <Section3Card
                        img='img/sec3/mm-nori.jpeg'
                        country='Kimnori'
                        title='Organic Seaweed Snacks, Sea Salt, 1.69 Oz (12 Ct)'
                        discount='44% Off'
                    />
                    <Section3Card
                        img='img/sec3/mm-zuch.jpeg'
                        title='Organic Zucchini'
                        discount='47% Off'
                    />
                </div>
            </div>

            <div className="flex flex-col justify-center ">
            <img className="w-[147px] h-[68px]" src="img/sec3/mm-arrow.svg" alt="" />
            <h1 className="text-4xl font-extrabold mb-[40px]">Cut your weekly grocery bill</h1>
            <h2 className="text-xl mb-[40px] tracking-wide font-extrabold">Join our <span className="text-green-600">FREE</span> membership and start saving</h2>
          
            <div className="relative mb-[20px] pl-[40px]">
            <CheckIcon
           className="w-8 h-8 text-green-600 mr-2 absolute left-[0px]" />
           <p className="tracking-wide text-base">Your free membership unlocks <b>savings of up to 40%</b> sometimes more! compared to grocery store prices.</p>
            </div>
            <div className="relative mb-[20px] pl-[40px]">
            <CheckIcon
           className="w-8 h-8 text-green-600 mr-2 absolute left-[0px]" />
           <p className="tracking-wide text-base">Get fresh, <b>organic produce</b> and high quality <b>pantry staples, meats, and seafood</b> that you’d typically pay a premium for elsewhere.</p>
            </div>
            <div className="relative mb-[20px] pl-[40px]">
            <CheckIcon
           className="w-8 h-8 text-green-600 mr-2 absolute left-[0px]" />
           <p className="tracking-wide text-base">Convenient home delivery with no membership fees or commitments</p>
            </div>
         
      
          
            </div>
        </div>
    </div>
}



import React from 'react';
import Section6Card from './Section6Card';

export default function Section6() {
    return (
        <div>
            <div className="w-screen bg-sec6 h-screen bg-imgsec6 flex justify-center items-center bg-35% bg-right-bottom bg-no-repeat p-40 ">
                <div className="flex justify-center items-center ">
                    <div className="grid grid-cols-2 w-[1200px]">
                        <div className="w-[500px]">
                            <h2 className="text-[42px] mb-[20px] font-bold">The funny-looking solution</h2>
                            <p className="text-xl w-[400px] font-light">We take in the high-quality food that grocery stores would rather let go to waste. Then, we find everything a good home. Your home.</p>
                        </div>
                        <div></div>
                    </div>
                </div>

            </div>
            <div className="w-screen bg-sec6 py-[20px] flex justify-center items-center">
                <img src="img/sec6/mm-sec6-text.svg" alt="" />
            </div>
            <div className="bg-sec6 flex justify-center py-[40px] items-center">
                <div className="w-[1240px] flex mb-[40px] flex-row justify-between items-end">
                    <Section6Card
                        img="img/sec6/mm-card-2.png"
                        link="@chefdavepalmer"
                        instLink="instagram.com/chefdavepalmer"
                        content="What a beautiful haul from Misfits Market this week! It is basically a chef's dream. I definitely have a lot to work with this week, and I get to experiment with something new to me called jicama."
                    />
                    <Section6Card
                        img="img/sec6/mm-card-3.png"
                        link="@angvbeauty"
                        instLink="instagram.com/angvbeauty"
                        content="I'm going to need a bigger table soon 😂⁣ Misfits Market NEVER disappoints ‼ Organic produce delivered directly to you for up to 40% less than grocery store prices. 🤯"
                    />
                    <Section6Card
                        img="img/sec6/mm-card-1.png"
                        link="@a1990powell"
                        instLink="instagram.com/a1990powell"
                        content="Oh how I was looking forward to this box and I may have all ready ate the bag of @deepriversnacks chips they were so good!"

                    />
                </div>
            </div>


        </div>
    )
}
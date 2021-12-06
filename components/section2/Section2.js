import React from 'react'; 
import Section2Item from './Section2Item';

export default function Section2() {
    return (
      <div className="bg-white w-screen flex justify-center items-center pl-[100px]  ">
         <div className="grid grid-cols-3 w-1200 gap-10">
         <Section2Item 
              img="/img/sec2/mm-savings.svg"
            title="Save Every Week"
            content="Our direct partnerships with high-quality producers let you save an average of $21.49 each week."
         
         />
           <Section2Item 
           img="/img/sec2/mm-hassle.svg"
            title="Hassle-Free Shopping"
            content="Skip trips to the store and tackle your list in just minutes."
            />
           <Section2Item
           img="/img/sec2/mm-dogood.svg"
            title="Do Some Good"
            content='Your FREE membership helps fix our broken food system and build a more sustainable future.'
            />
         </div>  
      </div>
    )

}
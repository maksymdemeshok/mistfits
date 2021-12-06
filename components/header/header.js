import React from 'react'; 
import Dropdown from './Dropdown';
import SignIn from './SignIn';



const Header = function  () {
    
   
    return (
        <header className="w-screen px-8 bg-main flex items-center justify-between fixed top-0 left-0 h-20 " >
        <a><img  src="img/mm-logo.svg" alt="mistfits" /></a>
        <nav className="w-5/12 md:w-1/2 flex justify-end items-center">
        <Dropdown />
        <SignIn />
        <button className="px-10 py-2 bg-yellow-300 font-bold text-base text-extrabold rounded border-2 border-solid border-black">Get Started</button>
        </nav>
        </header>
    )  
};

export default Header;


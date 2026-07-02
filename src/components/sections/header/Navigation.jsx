import React from 'react';
import { AiFillCodeSandboxCircle } from "react-icons/ai";

const Navigation = () => {
  return (
    <nav className="w-full absolute top-3 z-50 left-1/2 -translate-x-1/2 max-md:hidden max-lg:w-3xl max-xl:w-5xl max-[1440px]:w-7xl max-w-360 bg-primary-dark/25
    backdrop-blur-sm flex items-center justify-between rounded-2xl px-8 py-3">
        <AiFillCodeSandboxCircle className="size-10 text-accent-purple"/>

        <div className="flex gap-x-6 text-lg font-regular">
            <a href="#">Works</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact Me</a>
        </div>        

    </nav>
  )
}

export default Navigation;
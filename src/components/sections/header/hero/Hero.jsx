import React from 'react';
import { motion } from 'motion/react';
import CTAbutton from '../../../CTAbutton.jsx';


import HeroImage from './HeroImage';
import { headerImages } from "../../../../utils/utils.js";

const Hero = () => {
  return (
    <div className="relative w-full min-h-dvh md:min-h-dvh flex items-center overflow-hidden pb-4 lg:pb-16">

        <div className="flex flex-col max-w-4xl text-center items-center mx-auto gap-y-3 md:gap-y-10 pt-60 sm:pt-70 md:pt-120 max-md:px-2"> {/* How do I bring this down */}

          <div className="flex flex-col gap-y-2">
            <h1 className="text-3xl sm:text-6xl lg:text-7xl font-nohemi">Beautifully crafted<br/>illustrations</h1>
            <p className="text-sm sm:text-base md:text-lg text-primary-dark/80 tracking-wide">Transform your ideas into breathtaking visuals.</p>
          </div>
          <CTAbutton classes="px-8 py-4 max-sm:px-5 max-sm:py-3 rounded-xl sm:rounded-2xl hover:px-10 max-sm:hover:px-8 text-xl max-sm:text-base max-sm:font-medium"/>
  

          <div className="flex max-md:w-full max-md:flex-col max-sm:gap-y-3 max-md:gap-y-6 md:bg-primary-grey px-2 lg:px-3 py-3 lg:py-6 md:gap-x-4 lg:gap-x-8 max-lg:mx-4 rounded-2xl">
            <div className="max-md:bg-primary-grey max-sm:py-2 max-sm:rounded-xl max-md:py-4 max-md:rounded-2xl">
              <p className="max-md:px-4 text-base sm:text-lg lg:text-2xl font-nohemi font-medium lg:tracking-wide">Fast Results</p>
              <p className="text-sm opacity-60">Turn ideas into beautiful illustrations fast.</p>
            </div>
            <div className="max-md:bg-primary-grey max-sm:py-2 max-sm:rounded-xl max-md:py-4 max-md:rounded-2xl md:border-l-2 md:border-r-2 px-3 lg:px-6 border-primary-dark/40">
              <p className="max-md:px-4 text-base sm:text-lg lg:text-2xl font-nohemi font-medium lg:tracking-wide">Diverse Styles</p>
              <p className="text-sm opacity-60">You can choose from a large variety of styles.</p>
            </div>
            <div className="max-md:bg-primary-grey max-sm:py-2 max-sm:rounded-xl max-md:py-4 max-md:rounded-2xl">
              <p className="max-md:px-4 text-base sm:text-lg lg:text-2xl font-nohemi font-medium lg:tracking-wide">Affordable Prices</p>
              <p className="text-sm opacity-60">Affordable prices that fit your budget</p>
            </div>
          </div>
        </div>

        <div
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-240 max-sm:top-132 sm:top-210 md:top-240 xl:top-260 animate-[spin_60s_linear_infinite]
          scale-55 sm:scale-89 md:scale-92 xl:scale-100">
          {
          headerImages.map( (imageObject, index) => (
            <HeroImage imageObject={imageObject} key={imageObject.name} index={index}/>
          ) )
        }

        </div>
        
      </div>        
    
  )
}

export default Hero;
import React from 'react';
import { services, whyChooseUs } from "../../../utils/utils.js";
import Service from './Service.jsx';
import WhyChooseUs from './WhyChooseUs.jsx';

const Services = () => {
  return (
    <div className="min-h-dvh py-8 sm:py-12 lg:py-16 px-2 sm:px-8 lg:px-16 flex flex-col items-center">
        <div className="max-w-360 flex flex-col items-center gap-y-8 sm:gap-y-12 lg:gap-y-16">
            <div className="flex flex-col gap-y-4 text-center max-w-4xl">
                <h3 className="text-3xl sm:text-4xl lg:text-6xl font-nohemi">My Services</h3>
                <p className="text-sm sm:text-base lg:text-lg text-primary-dark/70 tracking-wide">
                    From character design and concept art to commercial illustrations, we create visuals that capture attention and communicate your ideas with clarity and creativity.</p>
            </div>
            <div className="grid grid-cols-1 max-md:gap-y-3 md:grid-cols-3 gap-x-5 max-sm:w-[90%]">
                {
                    services.map(
                        (item)=>(
                            <Service item={item} key={item.id}/>
                        )
                    )
                }
            </div>
            <div>
                <h3 className="text-3xl sm:text-4xl lg:text-6xl font-nohemi">Why Choose Me?</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4 md:gap-4">
                {whyChooseUs.map(
                    (item)=>(
                        <WhyChooseUs item={item} key={item.id}/>
                    )
                )}
            </div>
            
        </div>
    </div>
  )
}

export default Services;
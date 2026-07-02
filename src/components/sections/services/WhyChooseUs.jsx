import React from 'react';
import CTAbutton from '../../CTAbutton';

const WhyChooseUs = ( {item} ) => {
    const Icon = item.icon;
  return (
    <div key={item.id} className="flex flex-col h-full bg-primary-grey gap-y-4 px-4 py-6 rounded-xl">
        <Icon className="size-12 mb-2 md:mb-4 text-primary-dark/70"/>
        <h4 className="text-lg md:text-2xl font-nohemi">{item.title}</h4>
        <p className="text-sm md:text-base text-primary-dark/70">{item.description}</p>
        <CTAbutton classes="px-3 md:px-4 py-2 rounded-lg mt-auto hover:px-5 max-sm:hover:px-4"/>
    </div>
  )
}

export default WhyChooseUs;
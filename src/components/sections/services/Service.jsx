import React from 'react';

const Service = ( {item} ) => {
    const Icon= item.icon;
  return (
    <div key={item.id} className="flex w-full sm:flex-col max-sm:items-center max-sm:justify-center max-sm:rounded-xl py-2 sm:py-4 lg:py-8 gap-y-2 md:gap-y-4 max-sm:bg-primary-light">
        <Icon className="size-12 mb-2 md:mb-4 text-primary-dark/70"/>
        <h4 className="text-lg md:text-2xl font-nohemi">{item.title}</h4>
        <p className="max-sm:hidden md:text-md text-primary-dark/70">{item.description}</p>
    </div>
  )
}

export default Service;
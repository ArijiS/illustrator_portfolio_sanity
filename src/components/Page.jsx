import React from 'react';

const Page = ( {children} ) => {
  return (
    <div className="w-full h-dvh overflow-x-hidden bg-white text-primary-dark">
        {children}
    </div>
  )
}

export default Page;
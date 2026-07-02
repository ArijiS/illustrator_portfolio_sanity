import React from 'react';
import { urlFor } from '../../../lib/imageUrl';
import { motion } from 'motion/react';

const Image = ( {item, setSelectedImage} ) => {
  return (
    
      <div
        style= { {borderColor: item.image.asset.metadata.palette.lightMuted.background} }
        className="group border-6 mb-3 break-inside-avoid object-cover overflow-hidden rounded-2xl cursor-pointer">

          <img src={urlFor(item.image).url()}
            width={item.image.asset.metadata.dimensions.width}
            height={item.image.asset.metadata.dimensions.height}
            alt={item.title}
            className="scale-101 w-full h-auto group-hover:scale-105 transition-all"
            onClick={ ()=> setSelectedImage( item ) }
            />

      </div>
    
    
  )
}

export default Image;
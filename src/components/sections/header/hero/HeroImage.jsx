import React from 'react'

const HeroImage = ( { imageObject, index } ) => {

  const radius = 790;
  const angle = (index/16) * 360;
  const cardRotation = angle + 90;
  const radians = angle * (Math.PI / 180);
  const x = radius * Math.cos(radians);
  const y = radius * Math.sin(radians);

  return (
    <div className="absolute w-60 h-80 rounded-4xl overflow-hidden"
      style={{ transform: `
        translate(-50%, -50%)
        translate(${x}px, ${y}px)
        rotate(${cardRotation}deg)
        ` }}
    >
        <img src={imageObject.image} alt={imageObject.name} className="h-full w-full object-cover"/>
    </div>
  )
}

export default HeroImage;
import React from 'react';
import { motion } from 'motion/react';
import { urlFor } from '../lib/imageUrl';
import { IoMdCloseCircleOutline } from "react-icons/io";

const Modal = ( {selectedImage, setSelectedImage} ) => {
  return (
                   
        <motion.div
        initial={ {opacity:0} }
        animate={ {opacity:1} }
        exit={ {opacity:0} }
        className="fixed inset-0 bg-primary-dark/90 flex items-center justify-center" onClick={ ()=> setSelectedImage(null) }>
            <motion.div className="relative"
                initial={ {opacity:0, scale:0.9} }
                animate={ {opacity:1, scale:1} }
                exit={ {opacity:0, scale:0.9} }
                transition={ {duration: 0.25} }
                onClick={ e=> e.stopPropagation() }>

                <motion.img src={ urlFor(selectedImage.image).url() } alt={selectedImage.title} 
                className="w-auto h-auto max-w-[80vw] max-h-[80vh] rounded-2xl"/>

                <motion.button className="absolute -top-10 -right-10 cursor-pointer hover:bg-accent-yellow rounded-full transition-all"
                    onClick={ ()=> setSelectedImage(null) }
                    initial={ {opacity:0, scale:0} }
                    animate={ {opacity:1, scale:1} }
                    exit={ {opacity:0, scale:0} }
                    transition={ {duration:0.25} }>
                    <IoMdCloseCircleOutline className="size-10 text-primary-light"/>
                </motion.button>

                <div className="absolute flex gap-x-6 w-full justify-center
                bottom-0 left-0 bg-primary-light px-4 py-2 text-sm font-light tracking-wide rounded-bl-2xl rounded-br-2xl">
                    <p>
                        {`Title: ${selectedImage.title}`}
                    </p>
                    <p>
                        {`Category: ${selectedImage.category}`}
                    </p>
                    <p>
                        {`All rights reserved Owner`}
                    </p>
                </div>
            </motion.div>
        </motion.div>    

  )
}

export default Modal;
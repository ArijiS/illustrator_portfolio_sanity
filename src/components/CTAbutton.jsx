import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import ContactModal from './ContactModal';
import useContactModalStore from '../store/useContactModalStore';


const CTAbutton = ( {classes = ""} ) => {
  const { openModal } = useContactModalStore();

  return (
            <button
            className={`group bg-accent-yellow flex items-center justify-center ${classes} w-fit
            gap-x-2 cursor-pointer transition-all`}
            onClick={ openModal }
            >Get a quote today <FaArrowRightLong className="group-hover:translate-x-1.5 transition-all"/>
            </button>
  )
}

export default CTAbutton;
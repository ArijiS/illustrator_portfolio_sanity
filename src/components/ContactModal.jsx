import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ContactForm from './sections/contact/ContactForm';
import { IoMdCloseCircleOutline } from "react-icons/io";
import useContactModalStore from '../store/useContactModalStore';

const ContactModal = () => {
  const { closeModal, isOpen } = useContactModalStore();

  return (
    <AnimatePresence>
      {isOpen &&
        (<motion.div
          initial={ {opacity:0} }
          animate={ {opacity:1} }
          exit={ {opacity:0} }
          className="fixed w-full inset-0 bg-primary-dark/90 flex items-center justify-center"
          onClick={ closeModal }>
            <motion.div
              initial={ {opacity:0, y:20} }
              animate={ {opacity:1, y:0} }
              exit={ {opacity:0, y:-20} }
              transition={ {duration:0.25} }
              onClick={ e=> e.stopPropagation() }
              className="relative max-sm:w-9/10 max-w-6xl mx-4">
                <motion.button className="absolute -top-10 -right-5 cursor-pointer hover:bg-accent-yellow rounded-full transition-all"
                  onClick={ closeModal }
                  initial={ {opacity:0, scale:0} }
                  animate={ {opacity:1, scale:1} }
                  exit={ {opacity:0, scale:0} }
                  transition={ {duration:0.25} }>
                    <IoMdCloseCircleOutline className="size-10 text-primary-light"/>
                </motion.button>
              <ContactForm idPrefix="modal"/>
            </motion.div>
        </motion.div>)
      }
        
    </AnimatePresence>
    
  )
}

export default ContactModal;
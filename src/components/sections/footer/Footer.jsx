import React from 'react';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-primary-dark w-full h-20">
      <div className="max-w-360 h-full flex items-center justify-between text-white mx-auto px-2 sm:px-8 lg:px-16">
        <p className="max-sm:text-sm max-sm:font-medium">Made with 💕 by Backyard16</p>
        <div className="flex items-center gap-x-2 sm:gap-x-5">
          <FaSquareXTwitter className="max-sm:size-7 sm:size-10"/>
          <FaInstagramSquare className="max-sm:size-7 sm:size-10"/>
          <FaLinkedin className="max-sm:size-7 sm:size-10"/>
          <FaYoutubeSquare className="max-sm:size-7 sm:size-10"/>
        </div>
        
      </div>
    </div>
  )
}

export default Footer;
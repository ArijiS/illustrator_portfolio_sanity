import React from 'react';
import { useState, useEffect } from 'react';
import CTAbutton from '../../CTAbutton.jsx';
import { FaArrowRightLong } from "react-icons/fa6";
import { client } from '../../../lib/sanity.js';
import toast from 'daisyui/components/toast';

const ContactForm = ( {idPrefix} ) => {

    const [ contactImage, setContactImage ] = useState(null);
    const [ loading, setLoading ] = useState(false);

    useEffect(()=>{
        const fetchImage = async() =>{
            try{
            setLoading(true);
            const data = await client.fetch(
                `*[_type == "about"][0]{
                contactImage{
                asset->
                }
            }`);
            setContactImage(data);
            }
            catch(err){
                toast.error(err.message);
            }
            finally{
                setLoading(false)
            }
        }
        fetchImage(); }, []);

  return (
    <div className="w-full max-w-360 flex flex-col flex-1 items-center md:mx-auto px-2 sm:px-8 lg:px-16">
            
            <div className="flex w-full max-w-6xl h-auto md:h-150 overflow-hidden rounded-2xl my-auto">
                <div className="w-1/2 h-full max-md:hidden">
                    {contactImage ? <img src={contactImage.contactImage.asset.url}
                    alt="Contact-image" className="h-full object-cover"/> :
                    <div className="skeleton h-32 w-32"></div>
                    }
                </div>
                <form className="bg-primary-grey w-full md:w-1/2 p-8 flex flex-col gap-y-8">
                    <div className="flex w-full max-sm:flex-col sm:flex-row gap-x-5 gap-y-5">
                        <div className="flex w-full flex-col gap-y-4">
                            <label htmlFor={`${idPrefix}-name`}>Name</label>
                            <input type="text" id={`${idPrefix}-name`} className="bg-white p-3 rounded-xl w-full"/>
                        </div>
                        <div className="flex w-full flex-col gap-y-4">
                            <label htmlFor={`${idPrefix}-email`}>Email</label>
                            <input type="email" id={`${idPrefix}-email`} className="bg-white p-3 rounded-xl w-full"/> 
                        </div>        
                    </div>
                    <select defaultValue="What are you looking for?" className="select w-full bg-white p-6 rounded-xl text-base">
                        <option disabled={true}>What are you looking for?</option>
                        <option className="hover:bg-primary-grey">Character Design</option>
                        <option className="hover:bg-primary-grey">Concept Art</option>
                        <option className="hover:bg-primary-grey">Environment Art</option>
                        <option className="hover:bg-primary-grey">Book Illustration</option>
                        <option className="hover:bg-primary-grey">Custom Query</option>
                    </select>
                    <div className="flex flex-col h-full gap-y-4">
                            <label htmlFor={`${idPrefix}-message`}>Message</label>
                            <textarea id={`${idPrefix}-message`} className="bg-white h-full p-3 rounded-xl"></textarea>
                    </div> 
                        <button className="group bg-accent-yellow flex items-center justify-center text-xl px-6 py-4 rounded-xl w-full
                            gap-x-2 cursor-pointer hover:px-8 transition-all">Get a quote today
                            <FaArrowRightLong className="group-hover:translate-x-1.5 transition-all"/></button>
            </form>
            </div>
            
        </div>
  )
}

export default ContactForm;
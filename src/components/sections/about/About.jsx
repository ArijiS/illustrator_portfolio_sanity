import React, { useEffect, useState } from 'react';
import toast from 'daisyui/components/toast';
import { client } from '../../../lib/sanity.js';
import CTAbutton from '../../CTAbutton.jsx';
import { sectionOne, sectionTwo } from '../../../utils/utils.js';
import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  const [ aboutImages, setAboutImages ] = useState(null);
  const [ loading, setLoading ] = useState(false);
  
  useEffect(()=>{
    const fetchAboutImages = async () => {
      try{
        setLoading(true);
        const data = await client.fetch(
          `*[_type == "about"][0]{
              headshot{
                asset->
              },
              workingImage{
                asset->
              }
          }`
        );
        setAboutImages(data);
      }
      catch(error){
        toast.error( error.message );
      }
      finally{
        setLoading(false);
      }
    }
    fetchAboutImages();
  }, []);


  return (
    <div className="py-8 sm:py-12 lg:py-16 px-2 sm:px-8 lg:px-16 bg-primary-grey min-h-dvh">
      <div className="max-w-360 h-full flex flex-col mx-auto gap-y-8 sm:gap-y-12 lg:gap-y-16">
        <h3 className="text-3xl sm:text-4xl lg:text-6xl font-nohemi text-center">About Me</h3>
{/**_______________________________________TOP HALF___________________________________________ */}
        <div className="w-full grid max-lg:grid-cols-1 grid-cols-2 gap-y-10 gap-x-2 sm:gap-x-8 xl:gap-x-15">
          <div className="max-w-3xl flex flex-col justify-between gap-y-7 max-lg:order-2">
            <div className="flex flex-col gap-y-4 lg:gap-y-6">
              <h4 className="text-lg md:text-2xl xl:text-3xl font-nohemi">Bringing Ideas To Life Through Illustration</h4>
              <p className="text-base lg:text-lg text-primary-dark/80">With over a decade of experience creating custom illustrations, character designs, and visual concepts, we help brands, businesses, and creators communicate their ideas through compelling artwork.</p>
              <CTAbutton classes="max-lg:mt-4 px-4 py-2 rounded-lg hover:px-5"/>
            </div>
            <div className="flex gap-x-4">
              {
              sectionOne.map(
                (item)=> (
                  <div key={item.id}>
                    <p className="text-lg max-lg:bg-white max-lg:p-2 max-lg:rounded-xl lg:text-2xl xl:text-3xl leading-tight mb-2">{item.heading}</p>
                    <p className="text-sm max-lg:hidden text-primary-dark/80 leading-tight">{item.description}</p>
                  </div>                  
                )
              )
            }
            </div>
          </div>
          <div className="h-full w-full justify-self-end overflow-hidden rounded-2xl max-lg:order-1">
            { aboutImages ?  
              <img src={aboutImages.headshot.asset.url} alt="headshot-image" 
            className="object-cover w-full h-full object-[50%_20%]"
            /> :
            <div className="flex w-52 flex-col gap-4">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
        }
          
        </div>
{/**_______________________________________BOTTOM HALF___________________________________________ */}
        <div className="h-full w-full justify-self-start overflow-hidden rounded-2xl max-lg:order-3">
            { aboutImages ?  
              <img src={aboutImages.workingImage.asset.url} alt="headshot-image" 
            className="w-full h-full object-cover object-[50%_20%]"
            /> :
            <div className="flex w-52 flex-col gap-4">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
        }
        </div>
        <div className="flex flex-col max-sm:gap-y-7 gap-y-4 sm:justify-between max-lg:order-4">
            <div className="max-w-3xl flex flex-col gap-y-2 md:gap-y-4 lg:gap-y-6">
              <h4 className="text-lg md:text-2xl xl:text-3xl font-nohemi">Unlock The Power Of Visual Storytelling</h4>
              <p className="text-base lg:text-lg max-lg:hidden text-primary-dark/80">Strong visuals do more than look impressive—they help businesses build recognition, communicate ideas, and create memorable experiences. Strategic illustration can elevate your brand and make your message more engaging across every platform.</p>
              <CTAbutton classes="px-4 py-2 max-lg:mt-4 rounded-lg hover:px-5"/>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 sm:gap-y-2 xl:gap-y-3">
              {
                sectionTwo.map((item)=>(
                  <li key={item.id} className="flex items-center gap-x-2 text-lg sm:text-sm md:text-base text-primary-dark/80 md:font-medium"><FaCheckCircle className=" size-6 sm:size-5 text-accent-purple"/>{item.point}</li>
                ))
              }
            </ul>
        </div>

        </div>
    

      </div>
    </div>
  )
}

export default About;
import React from 'react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { client } from "../../../lib/sanity.js"
import { urlFor } from '../../../lib/imageUrl.js';
import Image from './Image.jsx';
import { categoryButtons } from '../../../utils/utils.js';
import { AnimatePresence, motion } from 'motion/react';
import Modal from '../../Modal.jsx';

const Gallery = () => {

  const [ loading, setLoading ] = useState(false);
  const [ illustrations, setIllustrations ] = useState( [] );
  const [ selectedCategory, setSelectedCategory ] = useState("Featured");
  const [ loadMoreClicked, setLoadMoreClicked ] = useState( false );
  const [ selectedImage, setSelectedImage ] = useState(null);

  useEffect(()=>{
    const fetchIllustrations = async () => {

      try{
        setLoading(true);
        const data = await client.fetch(
          `*[_type == "illustration"]{
          _id,
          title,
          category,
          featured,
          image{
            asset->
          }
          }`
        );
        setIllustrations(data);
      }
      catch(error){
        toast.error(error.message);
      }
      finally{
        setLoading(false);
      }}
      
      fetchIllustrations();


      }, []);

      const filterIllustrations = ( category ) => {

        if( category.toLowerCase() == "featured" ){
          return illustrations.filter( illustration => illustration.featured );
        }

        if (category.toLowerCase() == "all"){
          return illustrations;
        }

        else {
          return illustrations.filter( illustration => illustration.category.toLowerCase() == category.toLowerCase() )
        }      
        
      };

      const displayIllustrations = filterIllustrations( selectedCategory );

  return (
    <div className="py-8 sm:py-12 lg:py-16 flex flex-col items-center gap-y-8 md:gap-y-10 lg:gap-y-14 text-sm lg:text-lg tracking-tight bg-primary-grey px-2 sm:px-8 lg:px-16">

      <div className="flex flex-col gap-y-3 text-center">
        <h3 className="text-3xl sm:text-4xl lg:text-6xl font-nohemi">Portfolio</h3>
        <p className="text-sm sm:text-base lg:text-lg text-primary-dark/70 tracking-wide">Some of my works for our global clients.</p>
      </div>

      <div className="flex max-sm:grid max-sm:grid-cols-3 max-sm:gap-x-1 max-sm:gap-y-1 gap-x-1 lg:gap-x-4 bg-white px-2 lg:px-8 py-2 lg:py-4 rounded-2xl">
        {
          categoryButtons.map(
            (categoryObj)=>(
              <button key={categoryObj.id} onClick={
                ()=>{
                  setSelectedCategory( categoryObj.category );
                  setLoadMoreClicked(false);                  
                }}
              className= {selectedCategory == categoryObj.category ?
                "border-2 border-accent-yellow bg-accent-yellow cursor-pointer px-1 md:px-4 py-1 md:py-2 rounded-lg md:rounded-xl transition-all" :
                "border-2 border-accent-yellow hover:bg-accent-yellow/20 cursor-pointer px-1 md:px-4 py-1 md:py-2 rounded-lg md:rounded-xl transition-all"}
              >{categoryObj.category}</button>
            )
          )
        }
      </div>
      
      <AnimatePresence mode="wait">
        <motion.div className="max-w-360 mx-auto columns-1 sm:columns-2 lg:columns-3"
          key={`${selectedCategory}`}
          initial={ {opacity:0, y:20} }
          animate={ {opacity:1, y:0} }
          exit={ {opacity:0, y:-20} }
          transition={ {duration:0.25} }
        >
          
            {loading ? 
            (Array.from({length: 9}).map((_, index)=>(
              <div className="skeleton w-full bg-gray-500" key={index}></div>
            ))) :
            (
              displayIllustrations.slice(
                0, loadMoreClicked ? displayIllustrations.length : 9
              ).map(item => (
                <Image item={item} key={item._id} setSelectedImage={ setSelectedImage }/>
              ))
            )
          }
          
       </motion.div>
       </AnimatePresence>
        
    
        <button className="px-2 md:px-5 py-1 max-sm:hover:px-4 md:hover:px-6 rounded-lg md:rounded-xl border-2 border-accent-yellow hover:bg-accent-yellow cursor-pointer transition-all"
        onClick={ ()=> {
          setLoadMoreClicked( prev=> !prev )
        }}
        >Show {loadMoreClicked ? "Fewer" : "More"}</button>

        <AnimatePresence>
          {selectedImage && <Modal selectedImage={ selectedImage } setSelectedImage={ setSelectedImage }/>}
        </AnimatePresence>

    </div>
  )
}

export default Gallery;
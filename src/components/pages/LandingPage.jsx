import React, { useState } from 'react'
import { Alert } from '../ui/alert'
import ImageSlider from '../carousel/ImageSlider';
import Parallax from '../parallax/Parallax';
import Carousel from '../autoplayCarousel/Carousel';
import { countries } from "../data/Data";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"

const slides = [
  { url: 'https://images.unsplash.com/photo-1717496002081-38a90d3cba26?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'image1' },
  { url: 'https://images.unsplash.com/photo-1716881757832-b71ca98e3ca5?q=80&w=2686&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'image2' },
  { url: 'https://plus.unsplash.com/premium_photo-1717563132055-3e7a31ab3fa6?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'image3' },
  { url: 'https://images.unsplash.com/photo-1715464881844-a6de4a3b004c?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'image4' },
  { url: 'https://images.unsplash.com/photo-1715261174985-cc54833c0e27?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'image5' },
  { url: 'https://images.unsplash.com/photo-1716033712290-0a9bc8bdc796?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'image6' }
]


function LandingPage() {
  const [alertFlag, setAlertFlag] = useState(false)
  const handleClick = () => {
    console.log("clicked");
    setAlertFlag(true)
  }



  return (
    <div className='  mt-[90px]'>

<div>
      <Alert className={alertFlag ? "hidden" : "flex"}  onClick={handleClick}>we have added 5 new exciting courses to our list head to our latest courses section to know more  </Alert>
      </div>

      <div className="w-[302px] h-[180px] sm:w-[802px] sm:h-[280px] lg:w-[1180px] lg:h-[400px] mx-auto  my-2">
        {/* <ImageSlider slides={slides} /> */}
      <Carousel images={slides} />

      </div>

      <div>
        <Parallax slides={slides} />
      </div>

      
      
      {/* <Carousel images={countries} /> */}
     

    </div>
  )
}

export default LandingPage

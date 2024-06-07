import React, { useState } from 'react'
import { Alert } from '../ui/alert'
import ImageSlider from '../carousel/ImageSlider';
import Parallax from '../parallax/Parallax';
import Carousel from '../autoplayCarousel/Carousel';
import { countries } from "../data/Data";
import TabsDemo from '../customTabs/TabsDemo';
import backgroundImage from '../../assets/testimonial-img.jpg';  
import ProductCarousel from '../products-carousel/ProductCarousel';
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
      {/* <Carousel images={countries} /> */}

            {/* product Gallery  */}
  <section className='  bg-landingPageBlue w-full h-auto border flex flex-col justify-center items-center py-8' >
        {/* typography */}
        <div className=' px-12 pt-12 '>
          <div className=' flex flex-col items-center justify-center '>
          <h1 className=' font-semibold text-4xl '>Product Gallery</h1>
          <div className='max-w-xl mx-auto'>
              <p className='text-center py-3'>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
            </div>
          </div>
         
        </div>
        {/* typography ends */}

        {/* product carousel */}
        <div  >
          {/* product cards */}
          <div className="w-[302px] h-[180px] sm:w-[802px] sm:h-[280px] lg:w-[1180px] lg:h-auto  border">
            <div className='p-12'>
          <ProductCarousel />
            </div>
          </div>

        </div>
        {/* product carousel ends */}
      </section>
      {/* product gallery ends */}
      {/* user tab page */}
      <section className=' w-auto h-[706px] '>
        <div className='container-tabs w-full h-full p-8'>
          <TabsDemo />
        </div>
      </section>
      {/* user tab page  ends*/}
      {/* testimonial */}
      <section className='w-[302px] h-[180px] sm:w-[802px] sm:h-[280px] lg:w-auto lg:h-[400px] mx-auto  '>
        <div  className='w-full h-screen bg-cover bg-center ' style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      </section>

    </div>
  )
}

export default LandingPage

import React, { useState } from 'react'
import { Alert } from '../ui/alert'
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"



function LandingPage() {
  const [alertFlag, setAlertFlag] = useState(false)
  const handleClick = () => {
    console.log("clicked");
    setAlertFlag(true)
  }
  return (
    <div className=''>

      <Alert className={alertFlag ? "hidden" : "flex"} onClick={handleClick}>we have added 5 new exciting courses to our list head to our latest courses section to know more  </Alert>
      <div>
      {/* <Carousel>
        <CarouselContent>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel> */}
      </div>


    </div>
  )
}

export default LandingPage

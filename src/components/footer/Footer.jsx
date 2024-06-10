import React from 'react'

function Footer() {
  return (
    <>
      <div className='container grid grid-rows-3 bg-footerBackground text-white '>
        <div className=' row-span-2  grid grid-cols-3 p-8 '>
          <div className=' col-span-1 grid grid-rows-2  p-2'>
            <div className='row-span-1 text-white font-bold'>Steps</div>
            <div className='row-span-1 grid grid-cols-4 '>
              <div>facebook</div>
              <div>Twitter</div>
              <div>LinkedIn</div>
              <div>Github</div>
            </div>
          </div>
          <div className='col-span-2 grid grid-cols-3 gap-8  p-6'>
            <div className='grid gap-2'>
              <div>Services</div>
              <div>Service1</div>
              <div>Service2</div>
              <div>Service3</div>
            </div>
            <div className='grid gap-2'>
            <div>Products</div>
              <div>Products1</div>
              <div>Products2</div>
              <div>Products3</div>
            </div>
            <div className='grid gap-2'>
            <div>Contact us</div>
              <div>l7@gmail.com</div>
              <div>facebook</div>
              <div>instagram</div>
            </div>
          </div>
        </div>
        <div className='   p-8'>
          <hr />
        </div>
        <div className='  row-span-1 grid grid-cols-3 p-2'>
          <div className=' col-span-1'>© 2024 ladder7 . All rights reserved.</div>
          <div className='grid  grid-flow-col   col-span-2 '> 
            <h3 >Terms of Service</h3>
            <h3 >Privacy Policy</h3>
            <h3 >Cookies</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
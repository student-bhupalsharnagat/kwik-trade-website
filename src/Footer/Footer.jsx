import React from 'react'
import "./Footer.css"
import { LuInstagram } from "react-icons/lu";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import whatsappImg from  "../assets/whatsapp icon.webp"
// import { assets } from "../../assets/assets";
function Footer() {
  return (
    <>
    <div className=' bg-black flex items-center justify-center '>
<div className='w-[50vw] flex justify-center items-center gap-5 relative bottom-1 feature '>


            <img src="https://kwik.trade/frontend/assets/images/home/100.svg" alt="" className='w-16 h-16'  />
             <img src="https://kwik.trade/frontend/assets/images/home/secure.svg" alt="" className='w-14 h-14' />
              <img src="https://kwik.trade/frontend/assets/images/home/instant.svg" alt="" className='w-23 h-23' />
</div>
       
    </div>
 




{/* for whatsapp chat */}

<div className='flex
  justify-center items-center 
  
  
  '>
    <div className='w-[50vw] 
   
   h-14
   rounded-sm
   bg-white relative bottom-  flex  justify-center items-center gap-1 whatsapp-btn'>
<img src={whatsappImg} alt="" className='w-10 h-10' />
 <span className='font-bold text-black font-sans text text-base'>Chat on Whatsapp</span>
    </div>
</div>





{/* social media */}


<div className='flex
  justify-center items-center 
   '>



  <div className='w-[50vw] h-13 relative top-10 flex justify-center items-center flex-col gap-4  socialMedia-Container'>

<h1 className='text-white font-bold  text-2xl socialMedia-heading'>Connect With Us:</h1>
<div className='flex justify-center items-center gap-4'>
 <a href="#"> <LuInstagram  className='bg-[oklch(0.91_0.2_118.21)] text-xl  '/></a>
  <div className='bg-[oklch(0.91_0.2_118.21)]   h-6 w-6 rounded-full  flex justify-center items-center'> <a href=""><FaTelegramPlane className='text-base mr-0.5
'/> </a></div>

<div className='bg-[oklch(0.91_0.2_118.21)]   h-6 w-6 rounded-full  flex justify-center items-center'>
  < a href=''>
  <FaFacebookF /> </a></div>


</div>



  </div>
</div>

    </>
  )
}

export default Footer
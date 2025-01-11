import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contect = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTECT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img src={assets.contact_img} className='w-full md:max-w-[380px]' alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className='font-semibold'>Our Store</p>
          <p className='text-gray-500'>828115, Surunga Hari Mandir <br /> Dhanbad , Jharkhand , india</p>
          <p className='text-gray-500'>Tel : (415) 555-0132 <br />Email:bugu@forever.com</p>
          <p className='font-semibold text-xl text-gray-600'> Careers at Forever</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 text-sm hover:bg-black hover:text-white transition-all duration-500 py-2'>Explore Jobs</button>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default Contect
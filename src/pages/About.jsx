import React from 'react'
import Title from "../components/Title"
import { assets } from "../assets/frontend_assets/assets"
import NewsLetterBox from "../components/NewsLetterBox"

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/3 text-gray-600">
          <p>Welcome to Bugumart, your trusted online marketplace for high-quality products at unbeatable prices. At Bugumart, we are committed to making your shopping experience simple, reliable, and enjoyable. From everyday essentials to exclusive finds,  Bugumart is here to redefine online shopping. Join us and discover the joy of convenient and affordable shopping today</p>
          <p>As a customer-focused platform, we take pride in providing exceptional service, fast delivery, and ongoing support to our growing community of shoppers.  Thank you for making us your go-to destination—we’re excited to serve you and enhance your online shopping journey.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>We take pride in providing fast shipping, reliable service, and a user-friendly shopping experience that you can count on. Whether you’re here for convenience or the thrill of discovering something new, Bugumart is dedicated to making every interaction effortless and enjoyable. Join our growing community and experience online shopping the Bugumart way!</p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE AS"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-2 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Our dedication to quality assurance extends beyond our products to every aspect of your shopping experience. From a secure and user-friendly platform to fast and reliable delivery, we strive to  </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-2 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className='text-gray-600'>Our commitment to convenience doesn’t stop there—we’re here to provide fast, reliable delivery straight to your doorstep, saving you trips to crowded stores.  </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-2 flex flex-col gap-5">
          <b>Exceptional Customer service:</b>
          <p className='text-gray-600'> From the moment you visit our site to the delivery of your order, we are dedicated to providing personalized support that exceeds your expectations.  </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default About
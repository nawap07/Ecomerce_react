import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
    return (
        <div>
            <div className="flex flex-col   sm:grid grid-cols-[2fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
                <div className="">
                    <img src={assets.logo} className='mb-5 w-32' alt="" />
                    <p className='w-full md:w-2/3 text-gray-600'>
                    Quality is our top priority. Every product on Bugumart is carefully chosen, rigorously tested, and sourced from trusted suppliers to ensure that it meets our high standards. 
                    </p>
                </div>
                <div className="">
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privecy Policy</li>
                    </ul>
                </div>
                <div className="">
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+1-212-456-7890</li>
                        <li>contect@buguMart.com</li>
                    </ul>
                </div>
            </div>
            <div className="">
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2024@ forever.com - All Right Reserve</p>
            </div>
        </div>
    )
}

export default Footer
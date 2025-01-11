import React, { useContext, useState } from 'react'
import { assets } from "../assets/frontend_assets/assets"
import { Link, NavLink } from "react-router-dom"
import { ShopContext } from '../context/ShopContext';
const Navbar = () => {
    const [visable, setVisable] = useState(false);
    const { setShowSearch, getCartCount } = useContext(ShopContext)
    return (
        <div className='flex items-center justify-between py-5 font-medium'>
            <Link to={"/"}>
                <img src={assets.logo} alt={"logo"} className='w-36' />
            </Link>
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to={"/"} className="flex items-center gap-1 flex-col">
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to={"/collection"} className="flex items-center gap-1 flex-col">
                    <p>COLLECTION</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to={"/about"} className="flex items-center gap-1 flex-col">
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to={"/contect"} className="flex items-center gap-1 flex-col">
                    <p> CONTECT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
            </ul>
            <div className="flex items-center gap-6">
                <img src={assets.search_icon} alt={"search_icon"} className='w-5 cursor-pointer' onClick={() => setShowSearch(true)} />
                <div className=" group relative">
                   <Link to={"/login"}> <img src={assets.profile_icon} alt={"profile_icon"} className='w-5 cursor-pointer' /></Link>
                    <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 ">
                        <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-200 text-gray-500 rounded">
                            <p className='cursor-pointer hover:text-white'>My Profile</p>
                            <p className='cursor-pointer hover:text-blue-300'>Orders</p>
                            <p className='cursor-pointer hover:text-red-300'>Logout</p>
                        </div>
                    </div>
                </div>
                <Link to="/cart" className='relative flex items-center'>
                    <img src={assets.cart_icon} className='w-5  min-w-5' alt="" />
                    <p className='text-sm absolute left-3 top-2 w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[7px]'>{getCartCount()}</p>
                </Link>
                <img src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" onClick={() => setVisable((prev) => !prev)} />
            </div>
            {/* SideBar menu for small screen */}
            <div className={` absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visable ? "w-full" : "w-0"}`}>
                <div className="flex flex-col text-gray-600">
                    <div className="flex items-center gap-4 p-3 cursor-pointer" onClick={() => setVisable((prev) => !prev)}>
                        <img src={assets.dropdown_icon} className='h-4 rotate-180 cursor-pointer' alt="" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => setVisable((prev) => !prev)} className="py-2 pl-6 border" to={"/"}>HOME</NavLink>
                    <NavLink onClick={() => setVisable((prev) => !prev)} className="py-2 pl-6 border" to={"/collection"}>COLLECTION</NavLink>
                    <NavLink onClick={() => setVisable((prev) => !prev)} className="py-2 pl-6 border" to={"/about"}>ABOUT</NavLink>
                    <NavLink onClick={() => setVisable((prev) => !prev)} className="py-2 pl-6 border" to={"/contect"}>CONTECT</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar
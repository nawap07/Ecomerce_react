import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import ReletedProduct from '../components/ReletedProduct';

const Product = () => {
  const { productId } = useParams();
  const { products, currency ,addToCart} = useContext(ShopContext);
  const [prouctData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('')

  const fetchProductData = async () => {
    products.map((product) => {
      if (product._id === productId) {
        setProductData(product);
        setImage(product.image[0])
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData()
  }, [productId, products])
  console.log(productId);
  return prouctData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 '>
      {/* Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {
              prouctData.image.map((item, index) => (
                <img src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" onClick={() => setImage(item)} />
              ))
            }
          </div>
          <div className="w-full sm:w-[80%] ">
            <img src={image} alt="" className='w-full h-auto' />
          </div>
        </div>
        {/* Product Information */}
        <div className="flex-1">
          <h1 className='font-medium text-2xl mt-2'>{prouctData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{prouctData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{prouctData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {
                prouctData.sizes.map((item, index) => (
                  <button key={index} className={` border px-4 bg-gray-200 py-2 ${item === size ? 'border-orange-500' : ""}`} onClick={() => setSize(item)}>
                    {item}
                  </button>
                ))
              }
            </div>
          </div>
          <button onClick={()=>addToCart(prouctData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% original product</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* Description & Review Section */}
      <div className="mt-20">
        <div className="flex">
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            E-commerce websites have revolutionized the way people shop by providing a convenient, fast, and diverse platform to explore and purchase products online. These websites act as virtual marketplaces, offering a wide range of items such as clothing, electronics, home essentials, and more, often at competitive prices. With advanced search filters, user-friendly interfaces, and secure payment options, e-commerce platforms ensure a seamless shopping experience. Additionally </p>
          <p>For businesses, e-commerce websites open doors to a global audience, enabling them to expand their reach beyond physical store locations. With tools like inventory management, targeted marketing, and data analytics, businesses can optimize their operations and cater to specific customer preferences. Moreover, the integration of AI and automation enhances efficiency, </p>
        </div>
      </div>
      {/* Display related products */}
      <ReletedProduct category={prouctData.category} subCategory={prouctData.subCategory}/>
    </div>
  ) : (
    <div className="opacity-0"></div>
  )
}

export default Product
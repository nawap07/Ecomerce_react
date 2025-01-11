import React from 'react'

const NewsLetterBox = () => {

    const handleFrom = (e) => {
        e.preventDefault();
    }
    return (
        <div className='text-center'>
            <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
            <p className='text-gray-400 mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae aspernatur ipsam odit necessitatibus, numquam repellendus.</p>
            <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3' onSubmit={handleFrom}>
                <input
                    type="email"
                    placeholder='Enter you email'
                    className='w-full sm:flex-1 outline-none'
                    required
                />
                <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
            </form>
        </div>
    )
}

export default NewsLetterBox
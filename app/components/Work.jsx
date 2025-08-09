import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Work = () => {
    return (
        <div id='work' className='w-full px-[12%] py-10 scroll-mt-20 bg-white '>
            <h4 className='text-center mb-2 text-lg font-Ovo'>
                My portfolio
            </h4>
            <h2 className='text-center text-5xl sm:text-4xl md:text-5xl lg:text-[60px] font-Ovo'>
                My latest work
            </h2>
            <p className='text-center  max-w-2xl mx-auto mb-10 mt-5 '>
                Welcome to my web development portfolio! Explore a collection of projects showcasing
                my expertise in front-end development.
            </p>
            <div className='grid grid-cols-1  md:grid-cols-2 gap-6'>
                {
                    workData.map(({ title, description, bgImage, link }, index) => (
                        <div key={index} className='mb-10 aspect-auto bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '300px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <a href={link} target="_blank">
                                <div className='absolute w-10/12 bg-white rounded-md bottom-5 left-1/2 -translate-x-1/2 py-3 px-4 flex items-center justify-between shadow-lg group-hover:bottom-7 duration-500'>
                                    <div>
                                        <h2 className='font-semiold'>{title}</h2>
                                        <p className='text-sm text-gray-700'>{description}</p>
                                    </div>
                                    <div className='flex items-center justify-center w-9 aspect-square border rounded-full shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transitionduration-500'>
                                        <Image src={assets.send_icon} alt='send icon' className='w-6' />

                                    </div>
                                </div>
                            </a>
                        </div>))
                }
            </div>
        </div >
    )
}

export default Work
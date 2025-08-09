import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div id='about' className='w-full px-[12%] py-10 scroll-mt-20 bg-white '>
            <h4 className='text-center mb-2 text-lg font-Ovo'>
                Introduction
            </h4>
            <h2 className='text-center text-5xl sm:text-4xl md:text-5xl lg:text-[60px] font-Ovo mb-5'>
                About me
            </h2>
            {/* contrent  */}
            <div className='
            flex flex-col md:flex-row w-full gap-20 items-center justify-between my-10'>
                <div className=' w-64 sm:w-80 rounded-3xl overflow-hidden max-w-none'>
                    <Image src={assets.profile_img} alt='profile' className='rounded-3xl w-full' />
                </div>
                <div className='flex-1'>
                    <p className='mb-10 max-w-2xl '>I am an experienced Full-Stack Developer with over 3 years of experience delivering end-to-end web solutions. Skilled in designing and implementing responsive, performant, and SEO-optimized applications that provide excellent user experiences. Strong problem-solving abilities combined with a commitment to clean code, best practices, and effective teamwork in fast-paced development environments.</p>
                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
                        {infoList.map(({ icon, iconDark, title, description, description2 }, index) => (<li
                            key={index}
                            className='border-[0.5px] border-gray-300 p-6 rounded-xl cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-black'>
                            <Image src={icon} alt={title} className='w-7 mt-3' />
                            <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                            <p className='text-gray-600 text-sm'>{description}</p>
                            <p className='text-gray-600 text-sm'>{description2}</p>
                        </li>))}
                    </ul>
                    <h4 className='my-6 text-gray-700'>
                        Tools I Use
                    </h4>
                    <ul className='flex items-center gap-3 sm:gap-4'>
                        {toolsData.map((tool, index) => (
                            <li key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cusor-pointer hover:-translate-y-1 duration-500 hover:bg-[#fcf4ff] hover:shadow-black'>
                                <Image src={tool} alt='tool' className='w-5 sm:w-7' />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About
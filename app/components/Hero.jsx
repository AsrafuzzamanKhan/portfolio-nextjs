import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='w-11/12 max-w-3xl h-screen text-center mx-auto flex flex-col items-center justify-center gap-4'>

            <div>
                <Image src={assets.profile_img} alt='hero background' className=' rounded-full w-32  contain' />

            </div>
            <h3 className=' flex items-center gap-2 text-xl md:text-2xl font-Ovo  mb-4'>
                Hi! I'm  MD Asrafuzzaman khan <Image src={assets.hand_icon} alt='wave' className='w-6' />
            </h3>
            <h1 className=' text-3xl  sm:text-4xl md:text-5xl lg:text-[60px] font-Ovo'>
                Full stack web developer
            </h1>
            <p>Skilled Full-Stack Developer with 3+ years’ experience building responsive, high-performance web applications. Committed to clean code, strong problem-solving, and delivering excellent user experiences.</p>

            <div className='flex gap-4'>
                <a href="#contact"
                    className='px-10 py-3 rounded-full border border-white bg-black text-white  flex items-center gap-2'
                >Contact me <Image src={assets.right_arrow_white} alt='contact' className='w-4' /></a>
                <a href="/resume.pdf" download className='px-10 py-3 border rounded-full border border-gray-500 flex items-center gap-2'>My resume <Image src={assets.download_icon} alt='contact' className='w-4' /></a>
            </div>

        </div>
    )
}

export default Hero
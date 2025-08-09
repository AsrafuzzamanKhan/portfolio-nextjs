import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='text-center py-10 '>
                <Image src={assets.logo} alt='footer' className='w-36 mx-auto mb-2' />
                <div className='flex items-center justify-center gap-2 mb-4 w-max mx-auto'>
                    <Image src={assets.mail_icon} alt='footer' className='w-6' />
                    <p>asrafuzzamankhan89@gmail.com</p>
                </div>
            </div>
            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] pt-5 pb-10'>
                <p className=''>© 2025 MD ASRAFUZZAMAN KHAN. All rights reserved.</p>
                <ul className="flex items-center justify-center gap-4  my-4">
                    <li className='hover:text-green-700 transition duration-300'><a target='_blank' href="https://github.com/AsrafuzzamanKhan"> GitHub</a></li>
                    <li className='hover:text-green-700 transition duration-300'><a target='_blank' href="https://www.linkedin.com/in/asrafuzzaman-khan"> linkedIn</a></li>
                </ul>
            </div>

        </div>
    )
}

export default Footer
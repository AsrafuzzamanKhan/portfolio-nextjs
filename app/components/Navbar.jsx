import { assets } from '@/assets/assets.js'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const sideMenuRef = useRef();
    const openSideMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }
    const closeSideMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    }
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        })
    }, [])
    return (
        <>
            <div className='fixed top-0 right-0 -z-10 w-10/11 translate-y-[-80%]'>
                <Image src={assets.header_bg_color} alt='background' className='w-full' />
            </div>

            <nav className={`w-full fixed py-4 px-5 lg:px-8 xl:px-[8%] flex items-center justify-between z-50 ${isScrolled ? ' bg-white shadow-lg backdrop-blur-lg' : ''} transition-all duration-300`}>
                <a href="#top">
                    <Image src={assets.logo} className='w-28 cursor-pointer mr-14' alt='logo' />
                </a>
                <ul className={`hidden md:flex items-center gap-6 lg:gap-8  px-12 py-3   ${isScrolled ? 'bg-transparent' : ' rounded-full shadow-sm bg-opacity-50'}`}>
                    <li><a href="#top" className='font-Ovo'>Home</a></li>
                    <li className='font-Ovo'><a href="#about" className='font-Ovo'>About me</a></li>
                    <li><a href="#services" className='font-Ovo'>Services</a></li>
                    <li><a href="#work" className='font-Ovo'>My work</a></li>
                    <li><a href="#experience" className='font-Ovo'>Experience</a></li>
                    <li><a href="#contact" className='font-Ovo'>Contact me</a></li>

                </ul>
                <div className='flex items-center gap-4'>
                    {/* <button>
                        <Image src={assets.moon_icon} alt='moon' className='w-6' />
                    </button> */}
                    <a href="#contact" className=' hidden lg:flex items-center gap-3 px-10 border border-gray-500 rounded-full py-2.5 ml-4 font-Ovo'>
                        Contact <Image src={assets.arrow_icon}
                            className='w-3 ' alt='contact' />
                    </a>
                    <button>
                        <Image
                            onClick={openSideMenu}
                            src={assets.menu_black}
                            alt='menu'
                            className='block md:hidden w-6 ml-4' />
                    </button>
                </div>

                {/* mobile menu  */}
                <ul ref={sideMenuRef} className='fixed top-0 -right-64 bottom-0 w-64 h-screen bg-rose-50 md:hidden flex flex-col items-center gap-4 py-20 px-10 rounded-lg shadow-lg z-50 transition duration-700'>
                    <div className='absolute top-5 right-5'>
                        <Image onClick={closeSideMenu} src={assets.close_black} className='w-5 cursor-pointer' alt='logo' />
                    </div>
                    <li className='md:hidden'>
                        <a href="#top" className='font-Ovo' onClick={closeSideMenu}>Home</a>
                    </li>
                    <li className='md:hidden'>
                        <a href="#about" className='font-Ovo' onClick={closeSideMenu}>About me</a>
                    </li>
                    <li className='md:hidden'>
                        <a href="#services" className='font-Ovo' onClick={closeSideMenu}>Services</a>
                    </li>
                    <li className='md:hidden'>
                        <a href="#work" className='font-Ovo' onClick={closeSideMenu}>My work</a>
                    </li>
                    <li className='md:hidden'>
                        <a href="#experience" className='font-Ovo' onClick={closeSideMenu}>Experience</a>
                    </li>
                    <li className='md:hidden'>
                        <a href="#contact" className='font-Ovo' onClick={closeSideMenu}>Contact me</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
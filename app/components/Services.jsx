import { serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
    return (
        <div id='services' className='w-full px-[12%] py-10 scroll-mt-20 bg-white '>

            <h4 className='text-center mb-2 text-lg font-Ovo'>
                What I offer
            </h4>
            <h2 className='text-center text-5xl sm:text-4xl md:text-5xl lg:text-[60px] font-Ovo'>
                My Services
            </h2>
            <p className='text-center  max-w-2xl mx-auto mb-10 mt-5 '>
                Building powerful, responsive, and high-performance web solutions.
                Full-Stack expertise to deliver seamless user experiences end-to-end.
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {serviceData.map(({ icon, title, description, link }, index) => (
                    <div
                        key={index}
                        className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
                    >
                        <div className="flex items-center mb-4">
                            <Image className="w-10" src={icon} alt='service' />
                            <h3 className="ml-3 text-xl font-semibold">{title}</h3>
                        </div>
                        <p className="text-gray-600">{description}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}
export default Services
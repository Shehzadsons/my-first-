"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Project = () => {
    return (
        <div id="Project">
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto ">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                            MY PROJECTS
                        </h1>
                    </div>

                    <div className="flex flex-wrap hover:cursor-pointer m-5 -mt-[3rem]" >
                        {/* projects */}
                        <div className="lg:w-1/3 sm:w-1/2 p-2 rounded-3xl">
                            <div>
                                <Link href="https://1st-ecommerce-websites.netlify.app/" target="blank"
                                    className="flex relative  h-[300px]">

                                    <Image
                                        alt="vercel-app-file"
                                        className="absolute inset-0 w-full h-full object-cover object-center "
                                        src={require('../../../public/assests/ecommere website screen shot.png')}
                                        width={700}
                                        height={700}
                                    />
                                    <div className="px-4 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                                            E-commerce website
                                        </h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                            E-commerce
                                        </h1>
                                        <p className="leading-relaxed line-clamp-2">

                                            Lalam is a ladies clothing brand, potentially specializing in traditional South Asian attire. Based on available information, it might cater to the Pakistani market.  Without more details, it's difficult to pinpoint their specific style or range.
                                        </p>

                                        {/* <Link href={'https://1st-ecommerce-websites.netlify.app/'} target="blank"> */}
                                            <p className=" leading-relaxed  text-blue-500 hover:underline">

                                            View Project:
                                        </p>
                                        {/* </Link> */}
                                    </div>
                                </Link>
                            </div>

                        </div>


                        {/* projects */}
                        <div className="lg:w-1/3 sm:w-1/2 p-2 rounded-3xl">
                            <div>
                                <Link href="https://lalam-final-project.vercel.app/" target="blank"
                                    className="flex relative h-[300px]">

                                    <Image
                                        alt="vercelappfile"
                                        className="absolute inset-0 w-full h-full object-cover object-center "
                                        src={require('../../../public/assests/lalam screenshot.png')}
                                        width={500}
                                        height={500}
                                    />
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                                            Lalam clothing
                                        </h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                            Lalam
                                        </h1>
                                        <p className="leading-relaxed  line-clamp-2">

                                            Lalam is a ladies clothing brand, potentially specializing in traditional South Asian attire. Based on available information, it might cater to the Pakistani market.  Without more details, it's difficult to pinpoint their specific style or range.
                                        </p>

                                         {/* <Link href={'https://lalam.netlify.app/'} target="blank"> */}
                                            <p className=" leading-relaxed  text-blue-500 hover:underline">

                                                View Project:
                                            </p>
                                        {/* </Link>  */}
                                    </div>
                                </Link>
                            </div>
                        </div>


                        {/* projects */}
                        <div className="lg:w-1/3 sm:w-1/2 p-2 rounded-3xl">
                            <div>
                                <Link href="https://lalam-m.netlify.app/" target="blank"
                                    className="flex relative h-[300px]">
                                    <Image
                                        alt="netlifyappproject"
                                        className="absolute inset-0 w-full h-full object-cover object-center "
                                        src={require('../../../public/assests/lalam screenshot.png')}
                                        width={500}
                                        height={500}
                                    />
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                                            Lalam clothing
                                        </h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                            Lalam
                                        </h1>
                                        <p className="leading-relaxed  line-clamp-2">

                                            Lalam is a ladies clothing brand, potentially specializing in traditional South Asian attire. Based on available information, it might cater to the Pakistani market.  Without more details, it's difficult to pinpoint their specific style or range.
                                        </p>

                                        {/* <Link href={'https://lalam.netlify.app/'} target="blank"> */}
                                            <p className=" leading-relaxed  text-blue-500 hover:underline">

                                            View Project:
                                        </p>
                                        {/* </Link> */}
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
export default Project


"use client"
import Image from "next/image"
import React from "react"
import Typewriter from 'typewriter-effect';
import Link from "next/link";


const Hero = () => {
    return (
        
            <section className="text-gray-600 body-font  bg-gray-100">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            I am
                            <br className="hidden lg:inline-block" />
                            <Typewriter
                                options={{
                                    strings: ['Web Developer', 'UI/UX Designer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                        <div className="w-[100px] h-[2px] bg-blue-700"></div>
                        <p className="mb-8 leading-relaxed">
                            Enthusiastic and results-oriented individual with a passion for technology and a strong desire to learn and grow. Proven ability to quickly grasp new concepts and apply them to practical applications. Eager to contribute to innovative projects and make a positive impact in the tech industry

                        </p>
                        <div className="flex justify-center">
                            <Link href="#contact">
                            <button className="inline-flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700-600 rounded text-lg">
                                Contact
                            </button>
                            </Link>

                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <Image
                            className="object-cover object-center rounded mx-auto w-[20rem] "
                            alt="hero"
                            width={500}
                            height={500}
                            src={require('../../../public/assests/shahzad.jpg.jpg')}
                        />
                    </div>
                </div>
            </section>



    )
}
export default Hero
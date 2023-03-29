import React, { useState } from "react";
import image1 from '../assets/testimoni/1.png';
import image2 from '../assets/testimoni/2.png';
import image3 from '../assets/testimoni/3.png';
import image4 from '../assets/testimoni/4.png';
import vid from '../assets/video.mp4'

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image1, image2, image3, image4];

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <>
        <section className="relative inline-flex flex-col md:flex-row pt-12 lg:min-h-0 min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 px-10 justify-start items-start">
            <div
                className="absolute transitiona-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200">
            </div>
            <div className="relative inline-flex flex-col w-full md:w-[70%] px-0 md:px-10 font-bold">
                <h1 className="text-xl md:text-3xl">
                    Rawatlah Kendaraan Anda Seperti Anda Menikmati Setiap Perjalanannya
                </h1>
                <video
                    loop
                    autoPlay
                    muted
                    className="w-full bg-gray-100 mt-11"
                >
                    <source src={vid} type="video/mp4" />
                    "Your browser does not support the video tag"
                </video>
            </div>
            <div className="relative inline-flex w-full md:w-[30%] px-0 md:px-10 mt-3 md:mt-16 mr-14">
                <img src={images[currentIndex]} alt="slider" className="relative inline-flex w-auto h-[500px] object-cover" />
                <div className="absolute inset-0 flex justify-between items-center">
                    <button 
                        onClick={prevSlide}
                        className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M15 19l-7-7 7-7"></path>
                        </svg>
                    </button>
                    <button 
                        onClick={nextSlide}
                        className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full ml-4">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    </>
  );
};

export default Slider;

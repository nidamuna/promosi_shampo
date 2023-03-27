import React from 'react'
import Logo from '../assets/logo.png'
import Shampo from '../assets/polish.png'
import Car from '../assets/mobil.png'
import Motor from '../assets/motor.png'
import Tire from '../assets/ban.png'
import Body from '../assets/setir.png'
import Mesin from '../assets/mesin.png'

const Hero = () => {

  const phone = '628151607192'; // Ganti dengan nomor WhatsApp Anda
  const message = 'saya ingin membeli Semir Dresing ALL IN ONE'; // Pesan yang ingin Anda kirimkan
  
  const handleClick = () => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  const data=[
        {
            image:Car,
            name:"Body motor & mobil kilap maximal"
        },
        {
            image:Body,
            name:"Dashboard mobil"
        },
        {
            image:Mesin,
            name:"Mesin mobil"
        },
        {
            image:Tire,
            name:"Ban"
        },
        {
            image:Motor,
            name:"All komponen motor"
        }
    ]

    return (
        <div className="min-h-screen">
        <header className="py-4 bg-white sm:py-5" x-data="{expanded: false}">
            <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between">
                    <div className="flex shrink-0 items-center justify-center">
                        <a href="#" title="" className="flex">
                            <img className="w-auto h-10" src={Logo} alt="" />
                            <span className='ml-3 text-[24px] font-semibold text-gray-900 transition-all duration-200'>
                             Protection
                            </span>
                        </a>
                    </div>

                    <div className="hidden md:space-x-10 md:items-center md:justify-center md:flex">
                    <a href="#" title=""
                        className="text-xs font-bold tracking-widest text-gray-900 uppercase transition-all duration-200 hover:text-indigo-600">
                        Services
                    </a>

                    <a href="#" title=""
                        className="text-xs font-bold tracking-widest text-gray-900 uppercase transition-all duration-200 hover:text-indigo-600">
                        Latest Collections
                    </a>

                    <a href="#" title=""
                        className="text-xs font-bold tracking-widest text-gray-900 uppercase transition-all duration-200 hover:text-indigo-600">
                        Blog
                    </a>
                    </div>

                    <div className="hidden md:flex">
                    <button
                        className="inline-flex items-center justify-center px-6 py-2 sm:py-2.5 text-base font-semibold text-white transition-all duration-200 bg-gray-900 rounded-lg sm:text-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                        onClick={handleClick}>
                        Pesan Sekarang
                    </button>
                    </div>
                </nav>
            </div>
        </header>

      <section className="pt-12 bg-gradient-to-b from-gray-50 via-white to-gray-50 min-h-screen">
        <div className="px-14 mx-auto sm:px-6 lg:px-14 max-w-7xl">
          <div className="grid max-w-md grid-cols-1 mx-auto lg:grid-cols-12 gap-x-6 gap-y-8 lg:max-w-none">
            <div className="self-center lg:col-span-4">
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
                🔥🔥PROMO AWAL BULAN HARGA NEW NORMAL🔥🔥
              </h1>
              <p className="mt-5 text-base font-normal leading-7 text-gray-500">
                Semir Dresing ALL IN ONE kualitas premium interior & eksterior motor/mobil
              </p>
              <div className="relative inline-flex mt-9 group">
                <div
                  className="absolute transitiona-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200">
                </div>

                <button
                    onClick={handleClick}
                    className="relative inline-flex items-center justify-center px-8 py-3 sm:text-sm sm:py-3.5 text-base font-semibold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                    Pesan Sekarang
                </button>
              </div>
            </div>

            <div className="self-end lg:order-last lg:pb-20 lg:col-span-3">
              <p className="text-xs font-bold tracking-widest text-gray-500 uppercase">
                ⚡️ Dapat di aplikasikan pada
              </p>
              <div className="mt-6 space-y-6 lg:space-y-8">
              {data.map((i, index) => (
                <div key={index} className="relative overflow-hidden">
                  <div className="flex items-start lg:items-center">
                    <img className="object-cover w-12 h-12 rounded-lg shrink-0" src={i.image} alt="" />
                    <p className="ml-5 text-base font-bold leading-6 text-gray-900">
                        {i.name}
                    </p>
                  </div>
                </div>
              ))}
              </div>
            </div>

            <div className="self-end lg:col-span-5">
              <img className="w-[60%] mx-auto" src={Shampo} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
    ) 
}

export default Hero
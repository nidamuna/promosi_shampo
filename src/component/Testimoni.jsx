import React from 'react'
import Foto from '../assets/testi-foto.png'
import Foto2 from '../assets/testi-sm.png'


const Testimoni = () => {
  return (
    <>
        <section className="pt-12 min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 px-10">
            <div className='relative inline-flex my-9 group w-full'>
                <div
                  className="absolute transitiona-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200">
                </div>
                <h1 className='relative inline-flex font-bold text-2xl md:text-4xl w-full px-0 md:px-14'>
                    Sudah banyak yang membuktikan kualitas AW Premium Polish
                </h1>
            </div>
           
            <img src={Foto} alt="hasil" className='md:flex hidden' />
            <img src={Foto2} alt="hasil" className='flex md:hidden' />
        </section>
    </>  
)
}

export default Testimoni
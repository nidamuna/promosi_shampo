import React from 'react'

const Harga = () => {
    const color = ["#44BCFF", "#d344ff", "#FF44EC", "#FF675E",]
    const data = ["SHAMPO SNOW WASH", "PEMBERSIH INTERIOR", "PEMBERSIH KERAK KRAMIK", "GLASS CLEANER(PEMBERSIH JAMUR KACA)"]
  return (
    <>
        <section id='pricelist' className="pt-12 lg:min-h-0 min-h-screen pb-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 px-10 flex flex-col justify-center items-center">
            <h1 className='font-bold text-4xl w-full text-center'>
                Tersedia Juga :
            </h1>
            <ul className='flex md:flex-row flex-col w-full justify-center md:justify-between items-center text-[12px] md:text-[16px] px-4 md:px-14 mt-8 font-semibold'>
                {color.map((i, index) => (
                    <li key={index} 
                        className={`p-3 rounded-md shadow-xl w-full md:w-auto mb-5 md:mb-0`}
                        style={{ backgroundColor: i }}
                    >
                        {data[index]}
                    </li>
                ))}
            </ul>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-y-1 gap-x-0 md:gap-y-8 md:gap-x-10 w-[90%]'>
                {/* platinum */}
                <div className='flex flex-col justify-center items-center mt-10'>
                    <div className='bg-yellow-500 p-2 font-semibold w-[100%] text-center rounded-t-xl'>
                        Platinum Polish
                    </div>
                    <div className='flex justify-between items-center w-[100%] mt-3 border-b-2 '>
                        <p>500 ml</p>
                        <p>75.000</p>
                    </div>
                    <div className='flex justify-between items-center w-[100%] mt-3 border-b-2'>
                        <p>250 ml</p>
                        <p>49.000</p>
                    </div>
                    <div className='flex justify-between items-center w-[100%] mt-3 border-b-2'>
                        <p>Free Pad Busa</p>
                    </div>
                </div>
                {/* interior */}
                <div className='flex flex-col justify-center items-center mt-10'>
                    <div className='bg-yellow-500 p-2 font-semibold w-[100%] text-center rounded-t-xl'>
                        Interior Cleaner
                    </div>
                    <div className='flex justify-between items-center w-[100%] mt-3 border-b-2'>
                        <p>5 Liter</p>
                        <p>120.000</p>
                    </div>
                    <div className='flex justify-between items-center w-[100%] mt-3 border-b-2'>
                        <p>500 ml</p>
                        <p>70.000</p>
                    </div>
                    <div className='flex justify-between items-center w-[100%] mt-3 border-b-2'>
                        <p>250 ml</p>
                        <p>39.000</p>
                    </div>
                </div>
                {/* Premium */}
                <div className='flex flex-col justify-center items-center mt-10'>
                    <div className='bg-yellow-500 p-2 font-semibold w-[100%] text-center rounded-t-xl'>
                        Premium Polish
                    </div>
                    <div className='flex justify-between items-center w-[100%] mt-3 border-b-2'>
                        <p>30 Liter</p>
                        <p>800.000</p>
                    </div>
                    <div className='flex justify-between items-center w-[100%] mt-3 border-b-2'>
                        <p>5 Liter</p>
                        <p>140.000</p>
                    </div>
                    <div className='flex justify-between items-center w-[100%] mt-3 border-b-2'>
                        <p>500 ml (Pouch)</p>
                        <p>50.000</p>
                    </div>
                </div>
                {/* Shampo */}
                <div className='flex flex-col justify-center items-center mt-10'>
                    <div className='bg-yellow-500 p-2 font-semibold w-[100%] text-center rounded-t-xl'>
                        Shampo Snow Wash 
                    </div>
                    <div className='flex justify-between items-center w-[100%] mt-3 border-b-2'>
                        <p>30 Liter</p>
                        <p>200.000</p>
                    </div>
                    <div className='flex justify-between items-center w-[100%] mt-3 border-b-2'>
                        <p>5 Liter</p>
                        <p>70.000</p>
                    </div>
                    <div className='flex justify-between items-center w-[100%] mt-3 border-b-2'>
                        <p>500 ml</p>
                        <p>24.000</p>
                    </div>
                    <div className='md:flex justify-between items-center w-[100%] mt-3 text-white hidden'>
                        <p>500 ml</p>
                        <p>24.000</p>
                    </div>
                </div>
                {/* Gloss */}
                <div className='flex flex-col justify-center items-center mt-10'>
                    <div className='bg-yellow-500 p-2 font-semibold w-[100%] text-center rounded-t-xl'>
                        Gloss Cleaner
                    </div>
                    <div className='flex justify-between items-center w-[100%] mt-3 border-b-2'>
                        <p>5 Liter</p>
                        <p>120.000</p>
                    </div>
                    <div className='flex justify-between items-center w-[100%] mt-3 border-b-2'>
                        <p>500 ml</p>
                        <p>70.000</p>
                    </div>
                    <div className='flex justify-between items-center w-[100%] mt-3 border-b-2'>
                        <p>250 ml</p>
                        <p>39.000</p>
                    </div>
                    <div className='flex justify-between items-center w-[100%] mt-3 border-b-2'>
                        <p>Free Sarung Tangan</p>
                    </div>
                </div>
                {/* Kinclong */}
                <div className='flex flex-col justify-center items-center mt-10'>
                    <div className='bg-yellow-500 p-2 font-semibold w-[100%] text-center rounded-t-xl'>
                        Paket Kinclong
                    </div>
                    <div className='flex justify-between items-center w-[100%] mt-3 border-b-2'>
                        <p>Platinum 250 ml</p>
                        <p>119.000</p>
                    </div>
                    <div className='flex justify-between items-center w-[100%] mt-3 border-b-2'>
                        <p>Glass 250 ml</p>
                    </div>
                    <div className='flex justify-between items-center w-[100%] mt-3 border-b-2'>
                        <p>Interior 250 ml</p>
                    </div>
                    <div className='flex justify-between items-center w-[100%] mt-3 border-b-2'>
                        <p>Shampo 500 ml</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Harga
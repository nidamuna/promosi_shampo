import React from 'react'
import Polish from '../assets/produkx.png'
import Ok from '../assets/centang.png'

const Premium = () => {
    const data=[
        {
            name:"Tidak lengket"
        },
        {
            name:"Beraroma grape"
        },
        {
            name:"Aman di kendaraan"
        },
        {
            name:"Hidrophobic (Efek daun talas)"
        },
        {
            name:"Praktis tinggal pakai"
        },
        {
            name:"Pemakaian lebih irit"
        },
    ]
  return (
    <>
        <section id="polish" className="pt-0 min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 flex md:flex-row flex-col px-10">
            <div className='flex flex-col p-8 w-full md:w-[50%] justify-center items-center'>
               <h1 className='font-bold text-2xl md:text-4xl'>
                    Perbedaan AW PREMIUM POLISH dengan Produk X
               </h1>
               <img src={Polish} alt="produk x" className='h-[300px] mt-10'/>
            </div>
            <div className='flex flex-col md:flex-row p-8 w-full md:w-[50%] justify-start items-center'>
                <ul>
                    {data.map((i)=> (
                        <li className='flex flex-row items-center gap-3 mb-3 font-semibold'>
                            <img src={Ok} alt="checklist" className='h-5' />
                            {i.name}</li>
                    ))}
               </ul>
               <div className='absolute h-screen hidden md:flex justify-end items-end w-[40%] pb-20 mt-0'>
                    <div className='-skew-y-12 bg-red-700 rounded-xl p-6 h-[145px] w-[250px] text-center text-white font-bold text-xl md:text-2xl flex flex-col'>
                        <span className='flex gap-3'>
                            Dari <span className='line-through text-black'>Rp 160.000</span>
                        </span>
                        <span>disc 15%</span>  
                        <span className='text-2xl md:text-4xl'>Rp 135.000</span>
                    </div>
                </div>
                <div className='md:hidden flex justify-end items-end w-[100%] mt-20'>
                    <div className='-skew-y-12 bg-red-700 rounded-xl p-6 h-[145px] w-[250px] text-center text-white font-bold text-xl md:text-2xl flex flex-col'>
                        <span className='flex gap-3'>
                            Dari <span className='line-through text-black'>Rp 160.000</span>
                        </span>
                        <span>disc 15%</span>  
                        <span className='text-2xl md:text-4xl'>Rp 135.000</span>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Premium
import React from 'react'
import Shampo from '../assets/ph.png';
import Ok from '../assets/centang.png'
import vid from '../assets/video2.mp4'
import Yt from '../assets/button-yt.png'

const Shampoo = () => {
  const data=[
    {
        name:"PH Balance Formula",
        desc:"Diproduksi dengan formulasi PH Balance 7 (Netral) sehingga aman untuk semua jenis cat mobil & motor"
    },
    {
        name:"Carnauba Wax",
        desc:"Kandungan Crystal Carnauba Wax yang mampu melapisi & memberikan efek kilap maksimal pada cat body mobil & motor kesayangan"
    },
    {
        name:"Hydrophobic Effect",
        desc:"Efek Daun talas yang dapat memperlambat timbulnya jamur & mencegah debu atau kotoran yang menempel kembali setelah pencucian"
    },
    {
        name:"Snow Foam",
        desc:"Busa salju yang lembut, ampuh membersihkan kotoran, debu, & sisa residu material lain. Juga ramah lingkungan & aman untuk pemakaian harian"
    },
]

  return (
    <>
       <section id="shampoo" className="pt-10 lg:min-h-0 min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 flex flex-col md:flex-row px-10">
            <div className='flex flex-col p-0 md:p-8 w-full md:w-[50%] justify-start items-start'>
               <h1 className='font-bold text-2xl md:text-4xl'>
                    Perbedaan AW PREMIUM POLISH dengan Produk X
               </h1>
               <img src={Shampo} alt="produk x" className='h-[200px] md:h-[400px] mt-10 z-30'/>
               <video
                    loop
                    autoPlay
                    muted
                    className="w-full h-[200px] md:h-[400px] -mt-[200px] md:-mt-[400px]"
                >
                    <source src={vid} type="video/mp4" />
                    "Your browser does not support the video tag"
                </video>
            </div>
            <div className='flex flex-row p-0 md:p-8 w-full md:w-[50%] justify-start items-center'>
                <ul>
                    {data.map((i)=> (
                        <li className='flex flex-col mb-3 font-semibold'>
                            <span className='flex flex-row items-center gap-3'>
                              <img src={Ok} alt="checklist" className='h-5' />
                              {i.name} 
                            </span>
                            <p className='ml-8 font-normal text-[14px]'>
                              {i.desc}
                            </p>
                        </li>
                    ))}
               </ul>
            </div>
        </section>
        <div className='w-full p-8 flex justify-center items-center bg-gradient-to-b from-gray-50 via-white to-gray-50'>
          <a href="https://www.youtube.com/@awprotectionofficial" target="_blank" rel="noreferrer">
            <img src={Yt} alt="yt" className='h-[100px] cursor-pointer hover:scale-110' />
          </a>
        </div>
    </>
  )
}

export default Shampoo
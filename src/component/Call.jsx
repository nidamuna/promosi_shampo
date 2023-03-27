import React from 'react'

const Call = () => {
    const phone = '628151607192'; // Ganti dengan nomor WhatsApp Anda
  const message = 'saya ingin membeli Semir Dresing ALL IN ONE'; // Pesan yang ingin Anda kirimkan
  
  const handleClick = () => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  return (
    <>
        <section className="py-10 bg-gradient-to-b from-gray-50 via-white to-gray-50 sm:py-16 lg:py-24 flex justify-center items-center">
                <div className="w-[80%] bg-gray-100 p-14 rounded-3xl">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                            Lakukan Pemesananmu Sekarang Juga
                        </h2>
                        <p className="mt-4 text-2xl font-medium">
                            Fast Respon melalui WhatsApp Admin kami
                        </p>

                        <div className="relative inline-flex mt-9 group">
                            <div
                            className="absolute transitiona-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200">
                            </div>

                            <button
                                onClick={handleClick}
                                className="relative inline-flex items-center justify-center px-8 py-3 sm:text-sm sm:py-3.5 text-base font-semibold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                                Pesan Sekarang
                            </button>
                        </div>
                        <p className="mt-6 text-base text-black">
                            Tegal Kota bisa melakukan COD
                        </p>

                        <p className="mt-6 text-base text-black">Ingin langsung ke store kami? 
                            <a href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x2e6fb7d91997367b:0xc911d095873edbb7?utm_source=mstt_1" target="_blank" rel="noreferrer" className="ml-3 text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">
                                Arahkan ke store
                            </a>
                        </p>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Call
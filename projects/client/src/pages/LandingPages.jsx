import React from 'react'
import image from '../assets/undraw_doctors_hwty.svg'
import { GiMedicines, GiChestnutLeaf,GiShinyApple,GiBeerBottle, GiSquareBottle, GiGlassShot, GiNotebook, GiShipBow } from 'react-icons/gi';
import image2 from '../assets/undraw_conference_re_2yld.svg'
import image3 from '../assets/undraw_shopping_app_flsj.svg'
import bca from '../assets/Bank BCA Logo (PNG-1080p) - FileVector69.png'
import bri from '../assets/bri.png'
import bni from '../assets/Bank BNI Logo (PNG-1080p) - FileVector69.png'
import gopay from '../assets/Logo GoPay (PNG-1080p) - FileVector69.png'
import ovo from '../assets/ovo.png'
import shoppe from '../assets/ShopeePay Logo (PNG-1080p) - Vector69Com.png'


const LandingPages = () => {
  return (
    <div>
            <div className='h-56 sm:h-64 md:h-[500px] xl:h-[650px]'>
              <div className='h-56 sm:h-64 md:h-[500px] xl:h-[650px] bg-cover bg-center' style={{backgroundImage:'url(https://images.unsplash.com/photo-1576091358783-a212ec293ff3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80)'}}>
                <div className='container mx-auto'>
                  <div className='grid grid-cols-2 gap-4 place-content-end '>
                    <div className='text-xs mt-32 md:mt-72 lg:mt-96 backdrop-blur-sm bg-white/30 lg:text-3xl text-center max-w-xs py-5 text-blue-900 '>
                      Memenuhi kebutuhan untuk kesehatan anda
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-2 my-3 w-full  py-10 shadow-lg bg-gradient-to-tr from-sky-500 to-white rounded-lg'>
              <div clas className=''>
                <img className='h-52 lg:mx-auto' src={image} alt='medcare.com' />
              </div>
              <div className='mx-auto py-10 lg:mx-1 lg:py-4  md:flex justify-around md:mt-10 lg:mt-10'>
                <div className=''>
                  <p className=' text-blue-800 text-sm font-bold lg:text-2xl'>Punya Resep Dokter</p>
                  <p className='text-white text-xs'>Hanya foto resep anda dan unggah max 10mb</p>
                  <p className='hidden lg:block text-white text-xs'>tanpa perlu antri obat akan dikirimkan ke lokasi anda</p>
                </div>
                <div className=' md:pr-2 lg:mt-5'>
                  <button className='bg-teal-500 hover:bg-teal-600 px-2 py-1 rounded-lg text-white'>Unggah Resep</button>
                </div>
              </div>
            </div>
        <div className='container mx-auto px-5 py-5'>
            <div className='flex justify-between my-2'>
              <p className='text-sm font-bold text-blue-800'>Kategori</p>
              <p className='text-xs font-bold  text-teal-500'>Lihat Semua</p>
            </div>
            <div className='flex justify-between mx-auto'>
              <div className='w-40 rounded-xl shadow-xl '>
                <div className='py-3'>
                  <GiMedicines size={50} className='mx-auto fill-red-500'/>
                  <p className='text-xs text-center text-blue-900 font-bold'>Obat-Obatan</p>
                </div>  
              </div>
              <div className='w-40 rounded-xl shadow-xl '>
                <div className='py-3'>
                  <GiChestnutLeaf size={50} className='mx-auto fill-green-500'/>
                  <p className='text-xs text-center text-blue-900 font-bold'>Herbal</p>
                </div>  
              </div>
              <div className='w-40 rounded-xl shadow-xl '>
                <div className='py-3'>
                  <GiShinyApple size={50} className='mx-auto fill-red-500'/>
                  <p className='text-xs text-center text-blue-900 font-bold'>Nutrisi</p>
                </div>  
              </div>
              <div className='w-40 rounded-xl shadow-xl '>
                <div className='py-3'>
                  <GiSquareBottle size={50} className='mx-auto fill-orange-500'/>
                  <p className='text-xs text-center text-blue-900 font-bold'>Alat Kesehatan</p>
                </div>  
              </div>
              <div className=' hidden md:block w-40 rounded-xl shadow-xl '>
                <div className='py-3'>
                  <GiBeerBottle size={50} className='mx-auto fill-sky-500'/>
                  <p className='text-xs text-center text-blue-900 font-bold'>Vitamin</p>
                </div>  
              </div>
              <div className='w-40 rounded-xl shadow-xl '>
                <div className='py-3'>
                  <GiGlassShot size={50} className='mx-auto fill-red-500'/>
                  <p className='text-xs text-center text-blue-900 font-bold'>Perawatan</p>
                </div>  
              </div>
              <div className='hidden md:block w-40 rounded-xl shadow-xl '>
                <div className='py-3'>
                  <GiMedicines size={50} className='mx-auto fill-green-500'/>
                  <p className='text-xs text-center text-blue-900 font-bold'>Suplement</p>
                </div>  
              </div>
            </div>
            <div className='grid md:grid-cols-2 gap-2 mt-5 mx-auto'>
              <div className='bg-gradient-to-tr from-orange-500 to-white  h-28 rounded-lg lg:h-40'>
                <div className='mt-2 flex px-5 lg:px-20'>
                  <img src={image2} alt='medcare.com' className='h-24 lg:h-36'/>
                  <div className='pt-3 lg:pt-5 lg:pl-10 '>
                    <p className='text-medium font-bold  text-center text-blue-900 lg:text-2xl'>Program Hamil</p>
                    <p className='text-sm text-center  text-blue-900'>Rencanakan kelahiran buah hati anda</p>
                  </div>
                </div>
              </div>
              <div className='bg-gradient-to-tr from-sky-500 to-white h-28 rounded-lg lg:h-40'>
                <div className='mt-2 flex px-5 lg:px-20'>
                  <img src={image3} alt='medcare.com' className='h-24 lg:h-36'/>
                  <div className='pt-3 lg:pt-5 lg:pl-10 '>
                    <p className='text-medium font-bold  text-center text-blue-900 lg:text-2xl'>10-10 Flash Sale</p>
                    <p className='text-sm text-center  text-blue-900'>Dapatkan diskon besar untuk keperluan anda</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex justify-between my-2'>
              <p className='text-sm font-bold text-blue-800'>Produk Populer</p>
              <p className='text-xs font-bold  text-teal-500'>Lihat Semua</p>
            </div>
            <div className='overflow-x-auto flex no-scrollbar bg-gradient-to-t from-teal-50 to-white'>
              <div className='w-48 shadow-lg mx-4 my-4 bg-white'>
                <img src='https://d2qjkwm11akmwu.cloudfront.net/products/fb9bf376-4df4-4fee-829f-eb9cf9581e11_product_image_url.webp' alt='medcare.com' className='h-28 px-10 object-cover'/>
                <p className=' px-5 text-blue-900 font-bold text-sm'>Irbesatran 300 mg Box 10 Tablet</p>
                <div className='w-20 py-1 px-5 flex '>
                  <p className='border border-red-400 text-xs text-red-300 font-bold text-center'>17%</p>
                  <p className='pl-1 text-slate-400 text-xs line-through'>Rp.65.000</p>
                </div>
                <div className='px-5'>
                  <p className='text-blue-900 font-bold text-sm'>Rp.65.000<span className='text-sm text-slate-400 font-normal'>/Strip</span></p>
                </div>
                <div className='px-5 py-5'>
                  <button className='border-2 border-teal-500 text-teal-500 px-10 rounded-lg py-1 hover:bg-teal-200'>Keranjang</button>
                </div>
              </div>
              <div className='w-48 shadow-lg mx-4 my-4 bg-white'>
                <img src='https://d2qjkwm11akmwu.cloudfront.net/products/282287_22-9-2021_10-16-32.webp' alt='medcare.com' className='h-28 px-10 object-cover'/>
                <p className=' px-5 text-blue-900 font-bold text-sm'>Rhinos Junior Sirup 60 ml</p>
                <div className='w-20 py-1 px-5 flex '>
                  <p className='border border-red-400 text-xs text-red-300 font-bold text-center'>17%</p>
                  <p className='pl-1 text-slate-400 text-xs line-through'>Rp.65.000</p>
                </div>
                <div className='px-5'>
                  <p className='text-blue-900 font-bold text-sm'>Rp.62.600<span className='text-sm text-slate-400 font-normal'>/Bottle</span></p>
                </div>
                <div className='px-5 py-5'>
                  <button className='border-2 border-teal-500 text-teal-500 px-10 rounded-lg py-1 hover:bg-teal-200 '>Keranjang</button>
                </div>
              </div>
              <div className='w-48 shadow-lg mx-4 my-4 bg-white'>
                <img src='https://d2qjkwm11akmwu.cloudfront.net/products/832754_22-9-2021_10-18-52.webp' alt='medcare.com' className='h-28 px-10 object-cover'/>
                <p className=' px-5 text-blue-900 font-bold text-sm'>Sanadryl DMP Sirup 120 ml</p>
                <div className='w-20 py-1 px-5 flex '>
                  <p className='border border-red-400 text-xs text-red-300 font-bold text-center'>17%</p>
                  <p className='pl-1 text-slate-400 text-xs line-through'>Rp.65.000</p>
                </div>
                <div className='px-5'>
                  <p className='text-blue-900 font-bold text-sm'>Rp.32.400<span className='text-sm text-slate-400 font-normal'>/Bottle</span></p>
                </div>
                <div className='px-5 py-5'>
                  <button className='border-2 border-teal-500 text-teal-500 px-10 rounded-lg py-1 hover:bg-teal-200'>Keranjang</button>
                </div>
              </div>
              <div className='w-48 shadow-lg mx-4 my-4 bg-white'>
                <img src='https://d2qjkwm11akmwu.cloudfront.net/products/849685_22-9-2021_10-21-15.webp' alt='medcare.com' className='h-28 px-10 object-cover'/>
                <p className=' px-5 text-blue-900 font-bold text-sm pt-5'>Tremenza</p>
                <div className='w-20 py-1 px-5 flex '>
                  <p className='border border-red-400 text-xs text-red-300 font-bold text-center'>17%</p>
                  <p className='pl-1 text-slate-400 text-xs line-through'>Rp.5.000</p>
                </div>
                <div className='px-5'>
                  <p className='text-blue-900 font-bold text-sm'>Rp.50.000<span className='text-sm text-slate-400 font-normal'>/Strip</span></p>
                </div>
                <div className='px-5 py-5'>
                  <button className='border-2 border-teal-500 text-teal-500 px-10 rounded-lg py-1 hover:bg-teal-200'>Keranjang</button>
                </div>
              </div>
              <div className='w-48 shadow-lg mx-4 my-4 bg-white'>
                <img src='https://d2qjkwm11akmwu.cloudfront.net/products/176340_10-6-2022_16-17-13.webp' alt='medcare.com' className='h-28 px-10 object-cover'/>
                <p className=' px-5 text-blue-900 font-bold text-sm pt-5'>Sanmol Forte 4 Tablet</p>
                <div className='w-20 py-1 px-5 flex '>
                  <p className='border border-red-400 text-xs text-red-300 font-bold text-center'>17%</p>
                  <p className='pl-1 text-slate-400 text-xs line-through'>Rp.500</p>
                </div>
                <div className='px-5'>
                  <p className='text-blue-900 font-bold text-sm'>Rp.2.600<span className='text-sm text-slate-400 font-normal'>/Tablet</span></p>
                </div>
                <div className='px-5 py-5'>
                  <button className='border-2 border-teal-500 text-teal-500 px-10 rounded-lg py-1 hover:bg-teal-200'>Keranjang</button>
                </div>
              </div>
              <div className='w-48 shadow-lg mx-4 my-4 bg-white'>
                <img src='https://d2qjkwm11akmwu.cloudfront.net/products/317428_22-9-2021_10-57-22.webp' alt='medcare.com' className='h-28 px-10 object-cover'/>
                <p className=' px-5 text-blue-900 font-bold text-sm'>Paracetamol 500 mg 10 Kaplet</p>
                <div className='w-20 py-1 px-5 flex '>
                  <p className='border border-red-400 text-xs text-red-300 font-bold text-center'>17%</p>
                  <p className='pl-1 text-slate-400 text-xs line-through'>Rp.6.000</p>
                </div>
                <div className='px-5'>
                  <p className='text-blue-900 font-bold text-sm'>Rp.5.200<span className='text-sm text-slate-400 font-normal'>/Kaplet</span></p>
                </div>
                <div className='px-5 py-5'>
                  <button className='border-2 border-teal-500 text-teal-500 px-10 rounded-lg py-1 hover:bg-teal-200'>Keranjang</button>
                </div>
              </div>
              <div className='w-48 shadow-lg mx-4 my-4 bg-white'>
                <img src='https://d2qjkwm11akmwu.cloudfront.net/products/fb9bf376-4df4-4fee-829f-eb9cf9581e11_product_image_url.webp' alt='medcare.com' className='h-28 px-10 object-cover'/>
                <p className=' px-5 text-blue-900 font-bold text-sm'>Irbesatran 300 mg Box 10 Tablet</p>
                <div className='w-20 py-1 px-5 flex '>
                  <p className='border border-red-400 text-xs text-red-300 font-bold text-center'>17%</p>
                  <p className='pl-1 text-slate-400 text-xs line-through'>Rp.65.000</p>
                </div>
                <div className='px-5'>
                  <p className='text-blue-900 font-bold text-sm'>Rp.65.000<span className='text-sm text-slate-400 font-normal'>/Strip</span></p>
                </div>
                <div className='px-5 py-5'>
                  <button className='border-2 border-teal-500 text-teal-500 px-10 rounded-lg py-1 hover:bg-teal-200'>Keranjang</button>
                </div>
              </div>
            </div>
            <div className='my-3 '>
              <p className='text-sm font-bold text-blue-800'>Jaminan Untuk Anda</p>
            </div>
            <div className='my-2'>
              <div className='grid gap-2 lg:grid-cols-3'>
                <div className='w-full h-32 rounded-lg shadow-lg bg-gradient-to-t from-teal-50 to-white'>
                  <div className='grid grid-cols-3 px-5 py-4'>
                    <GiMedicines size={80} className='fill-red-600'/>
                    <div className='col-span-2'>
                      <p className='text-blue-900 font-bold text-lg'>100% Obat asli</p>
                      <p className='text-sm text-sky-700'>Semua Produk yang kami jual dijamin asli dengan kualitas yang baik</p>
                    </div>
                  </div>
                </div>
                <div className='w-full h-32 rounded-lg shadow-lg bg-gradient-to-t from-teal-50 to-white'>
                  <div className='grid grid-cols-3 px-5 py-4'>
                    <GiNotebook size={80} className='fill-green-600'/>
                    <div className='col-span-2'>
                      <p className='text-blue-900 font-bold text-lg'>Terjamin dan Hemat</p>
                      <p className='text-sm text-sky-700'>Kami menjamin pengembalian uang dari selisih perbedaan harga</p>
                    </div>
                  </div>
                </div>
                <div className='w-full h-32 rounded-lg shadow-lg bg-gradient-to-t from-teal-50 to-white'>
                  <div className='grid grid-cols-3 px-5 py-4'>
                    <GiShipBow size={80} className='fill-sky-300'/>
                    <div className='col-span-2'>
                      <p className='text-blue-900 font-bold text-lg'>Gratis Ongkir</p>
                      <p className='text-sm text-sky-700'>Kami kirim pembelian anda secara gratis tanpa antri</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className='hidden lg:block w-full bg-slate-100'>
              <div className='p-4'>
                  <p className='text-center text-blue-900 text-sm font-bold'>Metode Pembayaran</p>
                  <div className='container mx-auto px-20 mt-10'>
                    <div className='flex justify-center'>
                      <img src={bca} className='h-10' alt='medcare.com'/>
                      <img src={bri} className='h-10 px-10' alt='medcare.com'/>
                      <img src={bni} className='h-10 px-10' alt='medcare.com'/>
                      <img src={ovo} className='h-14 px-10' alt='medcare.com'/>
                      <img src={gopay} className='h-10 px-10' alt='medcare.com'/>
                      <img src={shoppe} className='h-10 px-10' alt='medcare.com'/>
                    </div>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default LandingPages
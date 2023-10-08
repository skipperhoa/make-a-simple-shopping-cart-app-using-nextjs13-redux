'use client'
import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import icon_cart from "@/app/_assets/images/icons8-cart-80.png";
import Image from 'next/image';
export default function Header() {
  const  numberCart  = useSelector((state: any) => state._todoProduct.numberCart);
  return (
    <div className='w-full p-5 bg-gray-300'>
       <div className='w-full max-w-6xl m-auto px-4 flex flex-row items-center justify-between'>
          <Link href={'/'} className='font-bold text-xl'>Hoa Dev <br/> <span className='text-red-500 text-sm'>https://hoanguyenit.com</span></Link>
            <Link href='/cart' className='bg-white p-2 block rounded-md'>
                <div className='flex flex-row gap-2'><Image src={icon_cart} alt="cart" width={25} height={25} /> Cart : <span className='font-bold text-red-500 inline-block'>
                      {numberCart}
                  </span></div>
            </Link>
       </div>
    </div>
  )
}



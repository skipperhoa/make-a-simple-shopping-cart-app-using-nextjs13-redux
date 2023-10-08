"use client"
import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr';
import { fetcher } from '@/app/_libs';
import { IProduct } from '@/app/_types';
export default function ProductPage() {
    const { data , error, isLoading } = useSWR<any>(
        `/api/products`,
        fetcher
      );
    if (error) return <div>Failed to load</div>;
    if (isLoading) return <div>Loading...</div>;
    if (!data) return null;
  return (
    <div className='w-full'>
        <ul className='flex flex-wrap mt-4'>
            {
                data && data.result.products.map((product: IProduct) => {
                    return (
                        <li key={product.id} className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-4">
                            <div className="my-2 bg-white rounded-[20px] overflow-hidden relative sm:h-auto md:h-[380px] hover:shadow-md  border-gray-500/20 border-[1px]">
                                    <Link href={`/product/${product.id}`}><Image className="w-full block h-[230px] sm:h-auo border-[1px] border-gray-300" src={product.thumbnail} alt=""  width={200} height={120} /></Link>
                                    <div className="p-4">
                                        <h2 className="capitalize text-xl sm:text-[14px] md:text-[16px] font-bold"><Link href={`/product/${product.id}`}>{product.title}</Link></h2>
                                    </div>
                                    <div className="w-full sm:relative md:absolute bottom-0 flex justify-between items-center border-t-[1px] border-gray-200 py-2">
                                        <ul className="pl-4">
                                            <li className="inline-block px-1"><Link href="react"><span className="inline-block text-[12px]">#{product.brand}</span></Link></li>
                                        </ul>
                                        <div className="pr-4">
                                            <span className="text-[14px] font-bold"><i className="fas fa-eye pr-2"></i>Price: {product.price}</span>
                                        </div>
                                    </div>
                            </div>
                        </li>
                    )
                })
               
            }
        </ul>
    </div>
  )
}

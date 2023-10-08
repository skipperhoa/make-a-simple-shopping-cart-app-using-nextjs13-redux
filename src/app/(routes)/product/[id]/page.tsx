"use client"
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import useSWR from 'swr';
import { fetcher } from '@/app/_libs';
import { AddCart } from '@/app/_redux/actions'
export default function ProductDetailPage({ params }: { params: { id: number } }) {
    const dispatch = useDispatch();
    const { data : product , error, isLoading } = useSWR<any>(
        `/api/products/${params.id}`,fetcher
    );
    if (error) return <div>Failed to load</div>;
    if (isLoading) return <div>Loading...</div>;
    if (!product) return null;
  return (
    <div className='w-full max-w-[400px] m-auto flex flex-col justify-center'>
       <div className="w-full mt-4">
            <Image src={product?.thumbnail} alt={product?.title} width={400} height={400}/>
            <div className='w-full mt-2'>
                <h1 className='font-bold text-2xl text-red-500'>{product?.title}</h1>
                <p className='text-gray-500'>{product?.description}</p>
                <p className='text-gray-500'>Price: ${product?.price}</p>
                <button className='bg-yellow-400 px-4 py-2 text-white mt-1' onClick={() => dispatch(AddCart(product))}>Add to Cart</button>
            </div>
       </div>
    </div>
  )
}
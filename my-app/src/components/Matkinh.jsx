import React, { useState } from 'react'
import Chitiet from './Chitiet'
import "./edit.scss"
function Matkinh() {
    const arrSanPham = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]

    const [matkinh,setMatkinh] = useState() ;
    
    function hienthi (matkinh){
        setMatkinh(matkinh);
    }

  return (
    <div className=' bg items-center '> 
    <div className='bg-zinc-300 opacity-75 py-8 mb-10'>
                <h2 className='text-4xl text-center font-bold'>TRY GLASSES APP ONLINE</h2>
            </div>

        <div className='container relative'>
            
            <div className='flex justify-between'>
            <div className='model info relative '>
                {
                    matkinh ? (<img className='bg_hienthi' src={matkinh.url} alt={matkinh.name} />) : null
                }
                {
                    matkinh ? (
                        <div className='bg-orange-200 absolute bottom-0 text-xl p-2'>
                            <div><p className='text-yellow-500'>{matkinh.name}</p></div>
                            <div>
                                <span className='text-base'>{matkinh.desc}</span>
                            </div>
                        </div>
                    ) : null
                }
                </div>
                <div className='model info'>
                    
                    </div>
            </div>
           
            <div className='info top-1/2 mt-32 left-80 w-1/2 absolute font '> 
            <Chitiet arrSanPham={arrSanPham} hienthi={hienthi} />
                
            </div>
        </div>
    </div>
  )
}

export default Matkinh
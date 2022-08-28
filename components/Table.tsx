import { Product } from '@stripe/firestore-stripe-payments';
import React from 'react'

interface Props {
    products: Product[];
    selectedPlan:Product | null
}


function Table({products, selectedPlan}:Props) {
  return (
    <table>
        <tbody className="divide-y divide-[gray]">
        <tr className='tableRow'>
                <td className='tableDataTitle'>Monthly price</td>
                {products.map((product) => (
                    <td key={product.id} className={`tableDataFeature ${
                        selectedPlan?.id === product.id
                            ? 'text-emerald-400'
                            : 'text-[gray]'
                    }`}
                    >${product.prices[0].unit_amount!/100}</td>
                ))}
            </tr>
            <tr className='tableRow'>
                <td className='tableDataTitle'>Video quality</td>
                {products.map((product) => (
                    <td key={product.id} className={`tableDataFeature ${
                        selectedPlan?.id === product.id
                            ? 'text-emerald-400'
                            : 'text-[gray]'
                    }`}
                    >{product.metadata.Quality}</td>
                ))}
            </tr>
            <tr className='tableRow'>
                <td className='tableDataTitle'>Users</td>
                {products.map((product) => (
                    <td key={product.id} className={`tableDataFeature ${
                        selectedPlan?.id === product.id
                            ? 'text-emerald-400'
                            : 'text-[gray]'
                    }`}
                    >{product.metadata.Users}</td>
                ))}
            </tr>
            <tr className='tableRow'>
                <td className='tableDataTitle'>Style</td>
                {products.map((product) => (
                    <td key={product.id} className={`tableDataFeature ${
                        selectedPlan?.id === product.id
                            ? 'text-emerald-400'
                            : 'text-[gray]'
                    }`}
                    >{product.metadata.Style}</td>
                ))}
            </tr>
        </tbody>
    </table>
  )
}

export default Table
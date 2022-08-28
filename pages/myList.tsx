import React from 'react'
import { useRecoilValue } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtom'
import Modal from '../components/Modal'
import Header from '../components/Header'
import Row from '../components/Row'
import useAuth from '../hooks/useAuth'
import Plans from '../components/Plans'
import { getProducts, Product } from '@stripe/firestore-stripe-payments'
import payments from '../lib/stripe'
import useSubscription from '../hooks/useSubscription'
import useList from '../hooks/useList'

interface Props {
  products: Product[]
}

const Shows = ( {
    products,
  }:Props ) => {


    const { logout, loading, user } = useAuth()
    const showModal = useRecoilValue(modalState)
    const list = useList(user?.uid)
    const subscription = useSubscription(user)

    if (loading || subscription === null) return null

    if (!subscription) return <Plans products={products}/>

    return (
    <div>
        <Header/>
        <main className='relative mt-24 pl-4 pb-24 lg:space-y-24 lg:pl-16'>
        <section className='md:space-y-24'>
            {list.length > 0 && <Row title="My List" movies={list} />}
            {list.length == 0 && <header className='mt-24'> Your List is empty.</header>}
        </section>
        </main>
        {showModal && <Modal/>}
    </div>
    )
}

export default Shows


export const getServerSideProps = async () => {
  const products = await getProducts(payments, {
    includePrices:true,
    activeOnly:true,
  })
  .then((res) => res)
  .catch((error) => console.log(error.message))
  
    return {
      props: {
        products,
      },
    }
  }
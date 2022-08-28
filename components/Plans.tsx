import { CheckIcon } from "@heroicons/react/solid"
import { Product } from "@stripe/firestore-stripe-payments";
import Head from "next/head"
import Link from "next/link"
import { useState } from "react";
import useAuth from "../hooks/useAuth"
import { loadCheckout } from "../lib/stripe";
import Loader from "./Loader";
import Table from "./Table";

interface Props {
    products: Product[];
}

function Plans({products}:Props) {
    const {logout, user} = useAuth()
    const [selectedPlan, setSelectedPlan] = useState<Product | null>(products[0])
    const [isBillingLoading, setIsBillingLoading] = useState(false)

    const subscribeToPlan = () => {
        if (!user) return

        loadCheckout(selectedPlan?.prices[0].id!)
        setIsBillingLoading(true)
    }

    return (
    <div>
        <Head>
            <title>Nextflix</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className="border-b border-white/10 bg-[#141414]">
            <Link href="/">
            <img
                src="https://www.svgrepo.com/show/423205/muffin.svg"
                alt="Netflix"
                width={90}
                height={90}
                className="cursor-pointer object-contain"
            />
            </Link>
            <button className="text-lg font-medium 
            hover:underline"
            onClick={logout}> Sign Out</button>
        </header>
        <main className="pt-40 max-w-5xl pb-12 transition-all px-5 md:px-10 mx-auto">
            <div className="mt-4 flex flex-col space-y-4">
                <div className="md:flex md:flex-row md:pb-2">
                    <div className="md:absolute">
                        <h1 className="mb-3 text-3xl font-medium"> Choose your plan</h1>
                        <ul>
                            <li className="flex items-center gap-x-2 text-lg">
                                <CheckIcon className="h-7 w-7 text-emerald-600" /> Watch all you want.
                                Ad-free.
                            </li>
                            <li className="flex items-center gap-x-2 text-lg">
                                <CheckIcon className="h-7 w-7 text-emerald-600" /> Recommendations
                                just for you.
                            </li>
                            <li className="flex items-center gap-x-2 text-lg">
                                <CheckIcon className="h-7 w-7 text-emerald-600" /> Change or cancel
                                your plan anytime.
                            </li>
                        </ul>
                    </div>
                    <div className="md:ml-[378px] flex w-full items-center justify-center self-end md:w-3/5">
                        {products.map((product) => (
                            <div 
                            key={product.id} 
                            className={`planBox ${selectedPlan?.id === product.id ? "opacity-100":
                            "opacity-60"}`}
                            onClick={() => setSelectedPlan(product)}
                            >
                                {product.name}
                            </div>
                        ))}
                </div>
                </div>
                <Table products={products} selectedPlan={selectedPlan}/>
                <button
                    disabled={!selectedPlan || isBillingLoading}
                    className={`mx-auto w-11/12 rounded bg-slate-600 py-4 text-xl shadow hover:bg-slate-700 md:w-[420px] ${
                    isBillingLoading && 'opacity-60'
                    }`}
                    onClick={subscribeToPlan}
                    >
                    {isBillingLoading ? (
                    <Loader color="dark:fill-gray-300" />
                    ) : (
                    'Subscribe'
                    )}
                </button>
            </div>
        </main>
    </div>
    )
}

export default Plans
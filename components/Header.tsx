import {ArrowSmRightIcon, BellIcon, FilmIcon, LogoutIcon, SearchIcon} from "@heroicons/react/solid"
import Link from "next/link"
import { useEffect, useState } from "react"
import useAuth from "../hooks/useAuth"
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
 

interface Inputs {
    title: string
  }


function Header() {

const { 
    register, 
    handleSubmit, 
    formState: { errors } 
    } = useForm<Inputs>();

const onSubmit: SubmitHandler<Inputs> = async ({title}) => {
    title = title.replaceAll(" ", "%20")
    router.push(
        {
            pathname:'/searchRes',
            query:{title}
        }
    )
    }

const {logout} = useAuth()
const [isScrolled, setIsScrolled] = useState(false)
const [searchToggle, setSearchToggle] = useState(false)

const router = useRouter()

useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
        window.removeEventListener("scroll", handleScroll)
    }
}, [])

return (
<header className={`${isScrolled && 'bg-[#141414]'}`}>
<div className="flex items-center space-x-2 md:space-x-10">
    <Link href="/">
        <FilmIcon className="h-6 w-6 cursor-pointer rounded"/>
    </Link>

    <ul className="hidden space-x-4 md:flex">
        <Link href="/shows">
            <li className="headerLink">Tv Shows</li>
        </Link>
        <li className="headerLink">Movies</li>
        <li className="headerLink">My List</li>
    </ul>
</div>
<div className="flex items-center space-x-4 text-sm font-light">
    <button onClick={() => setSearchToggle(!searchToggle)}>
        <SearchIcon className="hidden h-6 w-6 sm:inline cursor-pointer"/>
    </button>
    {searchToggle &&
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="textfield" placeholder="Title"
            className='hidden md:inline md:visible w-full flex-row input !p-0 ease-in-out duration-400'
            {...register("title", {required: true, minLength:1})}/>
            <button className=" hidden md:inline flex-row -ml-5 h-full">
                <ArrowSmRightIcon className=" hidden md:inlineflex h-full justify-center items-center w-5 p-1 mb-1 
                sm:inline cursor-pointer"/>
            </button>
        </form>
    }
    <BellIcon className="hidden h-6 w-6 sm:inline"/>
    <LogoutIcon className="h-6 w-6 cursor-pointer rounded"
    onClick={logout}/>
    <Link href="/account">
        <img
        onClick={logout}
        src="https://rb.gy/g1pwyx"
        alt=""
        className="cursor-pointer rounded"
        />
    </Link>
</div>
</header>
)
}

export default Header
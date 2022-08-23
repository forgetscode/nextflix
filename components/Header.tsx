 import {BellIcon, FilmIcon, LogoutIcon, SearchIcon} from "@heroicons/react/solid"
import Link from "next/link"
import { useEffect, useState } from "react"
import useAuth from "../hooks/useAuth"
 
 function Header() {

    const {logout} = useAuth()
    const [isScrolled, setIsScrolled] = useState(false)

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
        <SearchIcon className="hidden h-6 w-6 sm:inline"/>
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
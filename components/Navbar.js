import { useEffect, useState } from "react"
import Link from 'next/link'
export default function Navbar() {

    const [click, setClick] = useState(false)
    const [navBackground, setNavBackground] = useState(false)
    
    const handleClick = () => {
        setClick(!click)
    }
    
    const changeBackground = () => {
        if(window.scrollY <= 96){
            setNavBackground(true)
        }else{
            setNavBackground(false)
        }
    }
    
    return (
        <div>
            <nav className={`fixed w-full z-10 top-0 py-2 ${navBackground ? "bg-transparent text-black" : "bg-white text-black"} ${click ? "shadow" : ""} `}>
                <div className="container px-4 mx-auto md:flex md:items-center md:w-4/5 w-auto">

                    <div className="flex justify-between p-2 items-center">
                        <a className={`font-bold text-3xl text-white1 ${navBackground ? "text-one" : "text-four"}`}>CTR</a>
                        <button className={`px-3 py-1 rounded opacity-50 md:hidden focus:outline-none ${navBackground ? "text-black" : "text-black"}`} onClick={handleClick}>
                            {click ? <i className="lni lni-close"></i> : <i className="lni lni-menu"></i>}
                        </button>
                    </div>

                    <div className={`md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0 font-medium text-center md:text-left ${click ? "flex" : "hidden"}`}  id="navbar-collapse">
                        <Link href="/">
                            <a className="p-2 lg:px-4 md:mx-2 rounded hover:bg-one hover:text-white transition-colors duration-300">Home</a>
                        </Link>
                        <Link href="/about">
                            <a className="p-2 lg:px-4 md:mx-2 rounded hover:bg-one hover:text-white transition-colors duration-300">About</a>
                        </Link>
                        <Link href="/track">
                            <a className="p-2 lg:px-4 md:mx-2 rounded hover:bg-one hover:text-white transition-colors duration-300">Track</a>
                        </Link>
                        <Link href="/contact">
                            <a className="p-2 lg:px-4 md:mx-2 rounded-sm bg-one rounded hover:bg-four text-white transition-colors duration-300">Contact</a>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}
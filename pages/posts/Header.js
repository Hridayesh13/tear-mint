import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
    HomeIcon,
    CubeIcon
} from "@heroicons/react/outline"

import Link from 'next/link'

import { useEffect, useState } from 'react'
import Web3Modal from "web3modal"

import { ethers , BigNumber} from 'ethers';
export default function Header(){


    return(

        <header className="flex flex-col items-center justify-between h-auto m-2 mt-10 sm:flex-row"> 

        <div className="flex flex-grow max-w-md gap-5 "> 
            <Link href="/">
            <a className="text-xl font-bold ">Home</a>
            </Link>
            <Link href="/posts/about">
            <a className="text-xl font-bold ">About</a>
            </Link>
            <Link href="/posts/mint">
            <a className="text-xl font-bold ">Mint</a>
            </Link>
        </div>
        
        <HeaderItem />
        
        </header>
    )
}




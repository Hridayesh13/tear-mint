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

function Header(){

    const [user , setUser] = useState("Connect wallet");

    async function ConnectWallet(){

        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
    
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = await provider.getSigner();
        const signerAddress = await signer.getAddress();
        setUser(signerAddress);

    }


    return(

        <header className="flex flex-col items-center justify-between h-auto m-2 mt-10 sm:flex-row"> 

        <div className="flex flex-grow max-w-md gap-5 "> 
            <Link href="/">
            <a className="text-xl font-bold ">Home</a>
            </Link>
            <Link href="/posts/about">
            <a className="text-xl font-bold ">About</a>
            </Link>
            <Link href="/posts/mintingFrontPage">
            <a className="text-xl font-bold ">Mint</a>
            </Link>
        </div>
        
        { 
            <button className=" py-1 px-4 rounded bg-[#4FBDBA] text-white hover:bg-[#35858B]"
            onClick={ConnectWallet}>
            {user}
          </button> 
             
        }
        
        </header>
    )
}

export default Header



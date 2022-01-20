import Link from 'next/link'

function Middle(){

    return (
        <div className="min-h-screen">
        <div className="grid items-center flex-grow tracking-widest "> 
            <h1 className="max-w-6xl mx-auto mt-20 text-6xl font-bold text-center text-white md:text-9xl"> TEAR</h1>
            <h1 className="mt-5 text-6xl font-bold text-center text-white md:text-6xl"> a Fully On-Chain NFT</h1>
            <h1 className="mt-5 text-4xl text-center text-white md:text-4xl"> Generated and renderred completely on the blockchain</h1>
            <h1 className="mt-5 text-4xl text-center text-white md:text-4xl"> without any IPFS storage.</h1>
        </div>

        <div className="grid flex-grow place-items-center"> 
            <h1 className="m-2 mt-5 text-4xl text-justify "> Get yours now!!! </h1>
        
            <Link href="/posts/mintingFrontPage">
            <a className="text-xl font-bold ">Mint</a>
            </Link>

        </div>
    </div>
    )
}

export default Middle;
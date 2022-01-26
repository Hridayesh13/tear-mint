import Link from 'next/link'
import Header from './Header';

import { useEffect, useState } from 'react'
import Web3Modal from "web3modal"

import { ethers , BigNumber} from 'ethers';

import NFT from '../../artifacts/NFT.json';

function expandTo18Decimals(n) {
  return BigNumber.from(n).mul(BigNumber.from(10).pow(18))
}

export default function Mint() {

  const [userAccount, setUserAccount] = useState()
  const [recAccount, setRecAccount] = useState()
  const [amount, setAmount] = useState()
  const [feedback, setFeedback] = useState(`Click buy/mint your NFT.`);

  var nftAddress = "0xAe13D1D9889812d24e739165C4210d22ad702699";

  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  async function mint(){


    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = await provider.getSigner();
    const signerAddress = await signer.getAddress();
    const chainId = await signer.getChainId();

    let mintAmount = parseInt(amount);
    let cost = 20000000000000000;
    let gasLimit = 200000;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);

    console.log("Cost: ", totalCostWei);
    console.log("Max Gas limit: ", totalGasLimit);

    const NFTcontract = new ethers.Contract(nftAddress , NFT.abi , signer);

    console.log("ChainID: ", chainId);

    console.log("Provider: ", signerAddress);

    if( mintAmount <= 0){
      console.log(" error , put some integer ");
    }

    else{
      console.log( " starting ..............");
      setFeedback(`Minting your NFTs...`);
      let tx = await NFTcontract.mint( mintAmount, { gasLimit: totalGasLimit, from: signerAddress, value: totalCostWei });
      await tx.wait(1);
      let tcounter = await NFTcontract.tokenCounter();
      let tokenId = tcounter.toString();
      tokenId = parseInt(tokenId);

      for( let i=tokenId ; i< tokenId + mintAmount ; i++){
        console.log( "Minting ", tokenId, "th /500 NFTs  ");
        console.log("tokenURI: ", await NFTcontract.tokenURI(tokenId));
      }

      setFeedback(
        `Congrats, the NFT is yours! go visit Opensea.io to view it.`
      );
      
      console.log( "Successfully minted your NFTs ...");
    }
  }
  

  return (
    <div>
      <div className="">
        <Header />
      </div>
     
      <div className="grid flex-grow mt-40 tracking-widest place-items-center"> 
        <p1 className="mt-20 text-5xl text-center "> Only 500 NFTs in this collection.</p1>            
        <p1 className="m-2 text-5xl text-center "> Mint FAST!!!!</p1>
        <h1>Cost = 0.02 ETH per NFT</h1>
        <h3> Max minting limit : 2 </h3>
        {/* <h1 className="m-5 text-3xl text-justify "> This is a random digital art generatator platform on-chain on rinkeby network with the help of chainlink protocol</h1> */}
      </div>

      <div className="grid flex-grow mt-10 place-items-center "> 


        <input className='h-20 text-4xl text-center text-white bg-black border-2 border-white rounded-lg place-items-center w-96 focus:border-blue-500 ' onChange={e => setAmount(e.target.value)} placeholder="Number of NFTs" />

        <button className="mt-5 py-4 px-10 rounded bg-[#4FBDBA] text-white hover:bg-[#35858B]"
          onClick={mint}>
          MINT
        </button>

        
        
        <h1>{feedback}</h1>

        <Link href="https://testnets.opensea.io/collection/tear">
            <a className="text-xl font-bold ">Click to view our Collection</a>
        </Link>

      </div>

    </div>
  )
}

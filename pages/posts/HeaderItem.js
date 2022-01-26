import Web3Modal from "web3modal"
import { ethers , BigNumber} from 'ethers';
import { useEffect, useState } from 'react'

function HeaderItem(){

    const [user , setUser] = useState();

    async function ConnectWallet(){

        if(!user)
        {
            const web3Modal = new Web3Modal();
            const connection = await web3Modal.connect();
        
            const provider = new ethers.providers.Web3Provider(connection)
            const signer = await provider.getSigner();
            const signerAddress = await signer.getAddress();
            setUser(signerAddress);
        }

    }

    useEffect(() => {
        let ignore = false;
        if (!ignore)  ConnectWallet()
        return () => { ignore = true; }
        },[]);
    
    return(
        
        <div className="flex flex-col items-center cursor-pointer group"> 
            { user ? 
            <p className=" py-1 px-4 rounded bg-[#4FBDBA] text-white hover:bg-[#35858B]"> {user}</p> :
            <button className=" py-1 px-4 rounded bg-[#4FBDBA] text-white hover:bg-[#35858B]"
            onClick={ConnectWallet}>
             
            </button> 
        }
        </div>
    )
}

export default HeaderItem;
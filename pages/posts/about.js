import Header from './Header';

function About(){

    return (
        <div>
          <div className="">
            <Header />
          </div>
         
          <div className="grid flex-grow tracking-widest place-items-center"> 
            <p1 className="mt-20 text-3xl text-center "> Only 500 NFTs in this collection.</p1>  
            <p className="mt-20 text-2xl text-center "> These NFTs are generated completely on-chain and are rendered in realtime. </p>          
            <p1 className="m-2 text-3xl text-center "> Mint FAST!!!!</p1>
            <h1> Cost = 0.02 ETH per NFT</h1>
            <h3> Max minting limit : 2 </h3>
          </div>
    
        </div>
      )
}

export default About;
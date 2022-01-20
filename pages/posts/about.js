import Header from './Header';

function About(){

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
    
        </div>
      )
}

export default About;
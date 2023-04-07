import React from 'react';
import '../Styles/Firstexample.css';

function FirstExample(){
   return(
     <>
      <div className='all'>
       <br/>
       <h3 className='title'>Types Of Blockchain</h3>
       <p className='paragraph'>There are three types of blockchain :</p>
       <ul className='ul'>
          <li>Permissionless Blockchain</li>                    
          <li>Permissioned Blockchain</li>                    
          <li>Corporate Blockchain</li>                    
       </ul>
       <br/>
       <h3 className='title'>Permissionless Blockchain : </h3>
       <p className='paragraph'>
       A permissionless blockchain is a type of blockchain network that allows anyone to become a part of the network and to contribute to 
its upkeep. In other words, a permissionless blockchain is a decentralized ledger that is open to the public. The vast majority of 
cryptocurrencies, including Bitcoin, are powered by permissionless blockchain networks.Permissionless blockchains are transparent, allowing
users to access all information except private keys. Users have access to view all transactions in the network. Because blockchain networks
must incentivize users to trust the network, transparency is necessary.Most permissionless blockchains do not ask users to provide any
personal information when creating an address. Permissionless networks tend to be fully decentralized. This blockchain model is based on a
“majority” consensus protocol, meaning that a change to the blockchain requires a “consensus” among more than 50% of the users.
      </p>
      <br/>
      <br/>
      <br/>
      <h3 className='title'>Permissioned Blockhain:</h3>
      <p className='paragraph'>
      Permissioned blockchains, also known as private blockchains.
In a permissioned blockchain network, one needs permission to become part of the network. The owner of the network dictates who can or 
cannot join the network. Unlike permissionless blockchain networks, permissioned blockchains are not governed on consensus-based protocols.
Decisions are made on a central, pre-defined level by members of the network. Permissioned blockchains can have varying degrees of 
decentralization. Permissioned blockchains can be partially decentralized or fully centralized. Permissioned blockchains do not have to
provide transparency.They can be transparent if they choose to, but most are not intended to be.
     </p>
     <br/>
     <br/>
     <br/>
     <h3 className='title'>Corporate Blockchain:</h3>
     <p className='paragraph'>
     The corporate blockchain is a form of blockchain technology that is friendly to businesses. Here’s the corporate blockchain: It’s private.
It’s mostly decentralised, but it’s partially centralised. It doesn’t always have tokens. It’s a secure database for data management. It is,
mostly, decentralised. The blockchain is not owned by one person. It’s more secure than traditional databases. It’s still tamper-proof, so
you can trace any changes. The corporate blockchain still ultimately benefits from many of blockchain’s strengths.
     </p>
      </div>
     </>                         
   )
}

export default FirstExample;
import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from 'web3modal'
import { useRouter } from 'next/router'

import {
  marketplaceAddress
} from '../config'

import NFTMarketplace from '../contracts/NFTMarketplace.json'

export default function MyAssets() {
  const [nfts, setNfts] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')
  const router = useRouter()
  useEffect(() => {
    loadNFTs()
  }, [])
  async function loadNFTs() {
    const web3Modal = new Web3Modal({
      network: "mainnet",
      cacheProvider: true,
    })
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()

    const marketplaceContract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, signer)
    const data = await marketplaceContract.fetchMyNFTs()

    const items = await Promise.all(data.map(async i => {
      const tokenURI = await marketplaceContract.tokenURI(i.tokenId)
      const meta = await axios.get(tokenURI)
      let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
      let item = {
        price,
        tokenId: i.tokenId.toNumber(),
        seller: i.seller,
        owner: i.owner,
        image: meta.data.image,
        name: meta.data.name,
        tokenURI
      }
      return item
    }))
    setNfts(items)
    setLoadingState('loaded') 
  }
  function listNFT(nft) {
    console.log('nft:', nft)
    router.push(`/resell-nft?id=${nft.tokenId}&tokenURI=${nft.tokenURI}`)
  }
  if (loadingState === 'loaded' && !nfts.length) return (<h1 className="py-10 px-20 text-3xl">No NFTs owned</h1>)
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {nfts.map((nft, i) => (
            <a key={i} onClick={() => listNFT(nft)} className="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-yellow-300 hover:ring-yellow-500">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={nft.image}
                  alt={nft.name}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <div className="flex justify-between">
              <h3 className="mt-4 text-sm text-gray-700">{nft.name}</h3>
              <h3 className="mt-4 text-sm text-gray-900">{nft.price} BNB</h3>
              </div>
              <button className="w-full rounded-md p-2 font-bold text-white bg-yellow-700" onClick={() => listNFT(nft)}>Listing</button>
            </a>
          ))}
        </div>

      </div>
    </div>
  )
}
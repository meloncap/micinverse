import Image from "next/image"

const dataHowto = [
    { icon: '/wallet.svg', alt: 'Set up your wallet', title: 'Set up your wallet', description: 'Set wallet and change RPC/Network to BSC Network, because on the first phase only BSC Network we support.' },
    { icon: '/collection.svg', alt: 'Create your collection', title: 'Create your collection', description: 'This feature is not available right now but we still building our amazing UI for artist and collector.' },
    { icon: '/nft.svg', alt: 'Add your NFTs', title: 'Add your NFTs', description: 'Upload your work , add a title and description or share your contract so we can build one page special for your collection.' },
    { icon: '/sale.svg', alt: 'List them for sale', title: 'List them for sale', description: 'For now we only support with fixed-price listings. Set price you want to sell your NFTs, and we help you sell them!' },
]

export default function Howto() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Create and sell your NFTs</h1>
                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-yellow-700 inline-flex"></div>
                    </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    {dataHowto.map((f) => (
                        <div key={f.icon} className="p-4 md:w-1/4 flex flex-col text-center items-center">
                            <div className="w-20 h-20 inline-flex items-center justify-center  text-yellow-700 mb-5 flex-shrink-0">
                                <Image width="100" height="100" src={f.icon} alt={f.alt} />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{f.title}</h2>
                                <p className="leading-relaxed text-base">{f.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
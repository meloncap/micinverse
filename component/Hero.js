export default function Hero() {
    return (
            <div className="container mx-auto flex flex-col items-center py-3 sm:py-10">
                <div className="w-full sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
                        The Freedom to Create
                        <span className="text-yellow-700"> Art & Collectible </span>
                        NFT You Want
                    </h1>
                    <p class="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">Unique artwork or Profile Picture will drive sales. Mint and Sell your beautiful art and collectible for a small fee on the BSC network.</p>
                </div>
                <div className="flex justify-center items-center">
                    <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-700 bg-yellow-700 transition duration-150 ease-in-out hover:bg-yellow-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-yellow-700 py-2 sm:py-4 text-sm" disabled>Explore</button>
                    <button className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-700 bg-transparent transition duration-150 ease-in-out hover:border-yellow-600 lg:text-xl lg:font-bold  hover:text-yellow-600 rounded border border-yellow-700 text-yellow-700 px-4 sm:px-10 py-2 sm:py-4 text-sm"><a href="/create-nft">Sell Art</a></button>
                </div>
            </div>
    )
}
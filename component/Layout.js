import Head from 'next/head'
import Navbar from './Navbar'

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <meta name="theme-color" content="#7700ee" />
                <title>Micinverse | P2P NFT Marketplace on BCC Network</title>
                <meta
                    name="description"
                    content="P2P NFT Marketplace #1 on BCC Network, Mint, Sell, Buy and Resell NFT Assets with low fee."
                />


                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://micinverse.vercel.app" />
                <meta property="og:title" content="MICINVERSE" />
                <meta
                    property="og:description"
                    content="P2P NFT Marketplace #1 on BSC Network, Mint, Sell, Buy and Resell NFT Assets with low fee."
                />
                <meta
                    property="og:image"
                    content="https://micinverse.vercel.app/micinverse.png"
                />


                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://micinverse.vercel.app" />
                <meta property="twitter:title" content="MICINVERSE" />
                <meta
                    property="twitter:description"
                    content="P2P NFT Marketplace #1 on BSC Network, Mint, Sell, Buy and Resell NFT Assets with low fee."
                />
                <meta
                    property="twitter:image"
                    content="https://micinverse.vercel.app/micinverse.png"
                />
            </Head>
            <div className="min-h-full">
                <Navbar>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cat" className="w-10 h-10 fill-red-700" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M290.59 192c-20.18 0-106.82 1.98-162.59 85.95V192c0-52.94-43.06-96-96-96-17.67 0-32 14.33-32 32s14.33 32 32 32c17.64 0 32 14.36 32 32v256c0 35.3 28.7 64 64 64h176c8.84 0 16-7.16 16-16v-16c0-17.67-14.33-32-32-32h-32l128-96v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V289.86c-10.29 2.67-20.89 4.54-32 4.54-61.81 0-113.52-44.05-125.41-102.4zM448 96h-64l-64-64v134.4c0 53.02 42.98 96 96 96s96-42.98 96-96V32l-64 64zm-72 80c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16zm80 0c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16z"></path>
                    </svg>
                </Navbar>
                <main>
                    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                        {children}
                    </div>
                </main>
            </div>
        </>
    )
}
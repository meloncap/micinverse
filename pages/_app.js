import '../styles/globals.css'
import Layout from '../component/Layout'
import Footer from '../component/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </>

  )
}

export default MyApp
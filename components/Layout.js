import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import Head from 'next/head'

const Layout = ({children}) => {
    return (
        <>
            <Head>
            
            </Head>
            <Navbar/>
            {children}
            <Footer/>
            
            
        </>
    )
}

export default Layout;
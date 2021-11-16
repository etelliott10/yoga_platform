import '../styles/globals.css'
import Layout from '/components/Layout'
import 'materialize-css/dist/css/materialize.min.css';
function MyApp({ Component, pageProps }) {
  return (
   <Layout> 
        <Component {...pageProps} />    
    </Layout>
  )
}

export default MyApp

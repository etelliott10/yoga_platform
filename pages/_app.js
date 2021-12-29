import '../styles/globals.css'
import Layout from '/components/Layout'
import 'materialize-css/dist/css/materialize.min.css';
import { AuthProvider } from "../context/auth"


function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout> 
        <Component {...pageProps} />    
      </Layout>
    </AuthProvider>

  )
}

export default MyApp

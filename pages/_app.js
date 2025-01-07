import TopNav from '@/components/TopNav'
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../public/css/styles.css'
import { Provider } from '../context'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider>
        <ToastContainer position='top-center' />
        <TopNav />
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

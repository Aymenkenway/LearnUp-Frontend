import TopNav from '@/components/TopNav'
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import '../public/css/styles.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <TopNav />
      <Component {...pageProps} />
    </>
  )
}

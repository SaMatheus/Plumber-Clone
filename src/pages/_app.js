import '../styles/globals.css'

// CONTEXT
import { UrlProvider } from '../context/UrlContext'

function MyApp({ Component, pageProps }) {
  return (
    <UrlProvider>
      <Component {...pageProps} />
    </UrlProvider>
  )
}

export default MyApp

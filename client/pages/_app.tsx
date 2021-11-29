import React from 'react'
import { wrapper } from '../redux/store'

import '../sass/pages/styles.scss'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)

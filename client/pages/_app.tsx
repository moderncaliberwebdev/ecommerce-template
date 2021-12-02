import React from 'react'
import { wrapper } from '../redux/store'
import { UserProvider } from '@auth0/nextjs-auth0';

import '../sass/pages/styles.scss'

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default wrapper.withRedux(MyApp)

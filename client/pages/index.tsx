import { useState } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { useUser } from '@auth0/nextjs-auth0';
import axios from 'axios'

import { userExists } from '../redux/actions/userActions';

import styles from '../sass/pages/_home.module.scss'

import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Home({ title }) {
  const dispatch = useDispatch()

//   const name = useSelector((state: RootStateOrAny) => state.main.name)
  
// //.main.name
//   const getNewName = (newNameParam) => {
//     dispatch(setInfo(newNameParam))
//   }

//   const [newName, setName] = useState('')

  const { user, error, isLoading } = useUser();

  if (user) {
    const userId = user.sub.split('|')[1]
    dispatch(userExists({user, userId}))
  }

  return (
    <div>
      <Nav />
      <img src='/banner.png' alt="Banner" className={styles.banner}/>
      <div className={styles.options}>
      <img src='/alphalete.jpg' alt="Banner" className={styles.banner}/>
        <div className={styles.options__button_cont}>
          <button className={styles.options__button}>SHOP WOMEN'S</button>
          <button className={styles.options__button}>SHOP MEN'S</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

// export async function getStaticProps() {
//   const { data } = await axios.get(`http://localhost:3333/api`)

//   return {
//     props: {
//       title: data.title,
//     },
//   }
// }

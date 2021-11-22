import { useState } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import { setInfo } from '../redux/actions/main'

import styles from '../sass/pages/_home.module.scss'

export default function Home({ title }) {
  const dispatch = useDispatch()

  const name = useSelector((state: RootStateOrAny) => state.main.name)
  
//.main.name
  const getNewName = (newNameParam) => {
    dispatch(setInfo(newNameParam))
  }

  const [newName, setName] = useState('')
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{title}</h1>
      <p>Enter a name {name}:</p>
      <input
        type='text'
        value={newName}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => getNewName(newName)}>Submit</button>
    </div>
  )
}

export async function getStaticProps() {
  const { data } = await axios.get(`http://localhost:3333/api`)

  return {
    props: {
      title: data.title,
    },
  }
}

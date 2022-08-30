import axios from 'axios'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [nickname, setNickname] = useState('')

  useEffect(() => {
    (async () => {
      const { data: { nickname } } = axios.get('http://localhost:8000/users/me', { withCredentials: true })
        .then(res => {
          setIsLoading(false)
          setNickname(nickname)
        }
      )
    })();
  }, [])

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome, {nickname || 'Anonymous!'}!
        </h1>
        <p className={styles.description}>
          You are logged in!
        </p>
      </main>
    </div>
  )
}

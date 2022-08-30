import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [isFailed, setIsFailed] = useState(false)
  const [nickname, setNickname] = useState('')

  useEffect(() => {
    (async () => {
      try {
        const { data: { nickname } } = await axios.get('http://0.0.0.0:8000/users/me', { withCredentials: true })
        setNickname(nickname)
        setIsLoading(false)
      } catch (err) {
          if (err.response.status === 403) {
            window.location.href = '/login'
          }
          else {
            setIsFailed(true)
            setIsLoading(false)
          }
      }
    })();
  }, [])

  if (isLoading) {
    return <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Loading...
        </h1>
      </main>
    </div>
  }

  if (isFailed) {
    return <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Loading Failed.
        </h1>
      </main>
    </div>
  }

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

import styles from '../styles/Home.module.css'

export default function Home() {
  const username = 'Username!'
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome, {username || 'Anonymous!'}!
        </h1>
        <p className={styles.description}>
          You are logged in!
        </p>
      </main>
    </div>
  )
}

import styles from '../styles/Home.module.css'

export default function Login() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          You are not logged in!
        </h1>
        <a href="http://localhost:8000" className={styles.card}>
          Log in  →
        </a>
      </main>
    </div>
  )
}

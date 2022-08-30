import styles from '../styles/Home.module.css'

export default function Login() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          You are not logged in!
        </h1>
        <a href="http://0.0.0.0:8000/login" className={styles.card}>
          Log in  →
        </a>
      </main>
    </div>
  )
}

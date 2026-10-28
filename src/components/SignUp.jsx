import flower from '../assets/blossom-flower.svg'
import styles from './SignUp.module.css'

function SignUp() {
  return (
    <main className={styles.page}>
      <section className={styles.left} aria-hidden="true" />
      <section className={styles.right}>
        <img className={styles.flower} src={flower} alt="Pink and yellow flowers" />
      </section>
    </main>
  )
}

export default SignUp

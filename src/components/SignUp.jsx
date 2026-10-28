import flower from '../assets/blossom-flower.svg'
import googleLogo from '../assets/icons-google-logo.svg'
import appleLogo from '../assets/icons-apple-logo.svg'
import { Input } from './ui/input.jsx'
import styles from './SignUp.module.css'

function SignUp() {
  return (
    <main className={styles.page}>
      <section className={styles.left}>
        <div className={styles.content}>
          <h1 className={styles.title}>Get Started Now</h1>
          <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
            <div className={styles.field}>
              <label htmlFor="signup-name">Name</label>
              <Input
                className={styles.input}
                id="signup-name"
                name="name"
                type="text"
                placeholder="Enter your name"
                autoComplete="name"
                required />
            </div>

            <div className={styles.field}>
              <label htmlFor="signup-email">Email address</label>
              <Input
                className={styles.input}
                id="signup-email"
                name="email"
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
                required />
            </div>

            <div className={styles.field}>
              <label htmlFor="signup-password">Password</label>
              <Input
                className={styles.input}
                id="signup-password"
                name="password"
                type="password"
                placeholder="Enter your password"
                autoComplete="new-password"
                required />
            </div>

            <label className={styles.agreement}>
              <input 
                name="agreement" 
                type="checkbox" 
                required />
              <span>I agree to the <span className={styles.terms}>terms &amp; policy</span></span>
            </label>
            <button className={styles.signupButton} type="submit">Signup</button>
          </form>
          <div className={styles.bottomSection}>
            <div className={styles.divider}><span>Or</span></div>
            <div className={styles.socialButtons}>
              <button className={styles.socialButton} type="button">
                <img src={googleLogo} alt="" />
                <span>Sign in with Google</span>
              </button>
              <button className={styles.socialButton} type="button">
                <img src={appleLogo} alt="" />
                <span>Sign in with Apple</span>
              </button>
            </div>
            <p className={styles.accountPrompt}>
              Have an account? <span className={styles.signInText}>Sign In</span>
            </p>
          </div>
        </div>
      </section>
      <section className={styles.right}>
        <img className={styles.flower} src={flower} alt="Pink and yellow flowers" />
      </section>
    </main>
  )
}

export default SignUp

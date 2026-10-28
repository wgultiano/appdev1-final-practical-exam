import flower from '../assets/blossom-flower.svg'
import googleLogo from '../assets/icons-google-logo.svg'
import appleLogo from '../assets/icons-apple-logo.svg'
import { Input } from './ui/input.jsx'
import styles from './Login.module.css'

function Login() {
  return (
    <main className={styles.page}>
      <section className={styles.left}>
        <div className={styles.content}>
          <h1 className={styles.title}>Welcome back!</h1>
          <p className={styles.subtitle}>Enter your Credentials to access your account</p>
          <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
            <div className={styles.field}>
              <label htmlFor="login-email">Email address</label>
              <Input
                className={styles.input}
                id="login-email"
                name="email"
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
                required />
            </div>

            <div className={styles.field}>
              <div className={styles.passwordHeading}>
                <label htmlFor="login-password">Password</label>
                <a className={styles.forgotPassword} href="/forgot-password">forgot password</a>
              </div>
              <Input
                className={styles.input}
                id="login-password"
                name="password"
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                required />
            </div>

            <label className={styles.agreement}>
              <input
                name="remember"
                type="checkbox" />
              <span>Remember for 30 days</span>
            </label>
            <button className={styles.loginButton} type="submit">Login</button>
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
              Don’t have an account? <span className={styles.signUpText}>Sign Up</span>
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

export default Login

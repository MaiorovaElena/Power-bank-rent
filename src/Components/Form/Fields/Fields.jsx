import styles from "./Fields.module.css";

export default function Fields() {
  return (
    <>
      <div>
        <input
          className={styles.input}
          type="text"
          placeholder="Name*"
          required
        />
      </div>
      <div>
        <input
          className={styles.input}
          type="text"
          placeholder="Phone*"
          required
        />
      </div>
      <div>
        <input
          className={styles.input}
          type="text"
          placeholder="Email*"
          required
        />
      </div>
      <div className={styles.checkboxContainer}>
        <input type="checkbox" id="checkbox" name="terms" required />
        <label htmlFor="checkbox">
          By signing up you agree to our{" "}
          <a className={styles.link} href="#">
            Terms and conditions and Privacy policy
            <span className={styles.span}>*</span>
          </a>
        </label>
      </div>
    </>
  );
}

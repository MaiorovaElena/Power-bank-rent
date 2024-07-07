import styles from "./Fields.module.css";
// import { useState } from "react";
// import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
// import TermsAndConditions from "../TermsAndConditions/TermsAndConditions";

export default function Fields() {
  // const [showModal, setShowModal] = useState(false);
  // const [agreeToTerms, setAgreeToTerms] = useState(false);

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
          type="tel"
          placeholder="Phone*"
          required
        />
      </div>
      <div>
        <input
          className={styles.input}
          type="email"
          placeholder="Email*"
          required
        />
      </div>
      <div className={styles.checkboxContainer}>
        <input
          className={styles.checkbox}
          type="checkbox"
          id="checkbox"
          name="terms"
          required
        />
        <label className={styles.terms} htmlFor="checkbox">
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

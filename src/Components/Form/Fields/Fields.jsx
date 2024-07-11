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
        <label htmlFor="name"></label>
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="Name*"
          required
        />
      </div>
      <div>
        <label htmlFor="tel"></label>
        <input
          className={styles.input}
          type="tel"
          name="tel"
          placeholder="Phone*"
          required
        />
      </div>
      <div>
        <label htmlFor="email"></label>
        <input
          className={styles.input}
          id="email"
          type="email"
          name="email"
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

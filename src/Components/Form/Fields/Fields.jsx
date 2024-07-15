import FormButton from "../FormButton/FormButton";
import styles from "./Fields.module.css";
import { useState, useEffect } from "react";

// import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
// import TermsAndConditions from "../TermsAndConditions/TermsAndConditions";

export default function Fields() {
  // const [showModal, setShowModal] = useState(false);
  // const [agreeToTerms, setAgreeToTerms] = useState(false);

  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [nameDirty, setNameDirty] = useState(false);
  const [telDirty, setTelDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [checked, setChecked] = useState(false);
  const [nameError, setNameError] = useState("Name can't be blank");
  const [telError, setTelError] = useState("Phone number can't be blank");
  const [emailError, setEmailError] = useState("Email can't be blank");
  const [fieldTouched, setFieldTouched] = useState(false);
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (nameError || telError || emailError || !checked) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, telError, emailError, fieldTouched, checked]);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "name":
        setNameDirty(true);
        break;
      case "tel":
        setTelDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
    }
  };

  const nameHandler = (e) => {
    setName(e.target.value);
    const nameReg = /^[^0-9@#$%^&*]+$/;
    if (!nameReg.test(String(e.target.value).toLowerCase())) {
      setNameError("Incorrect name");
    } else {
      setNameError("");
    }
  };

  const telHandler = (e) => {
    setTel(e.target.value);
    const telReg = /^[0-9-()+\s]+$/;
    if (!telReg.test(String(e.target.value).toLowerCase())) {
      setTelError("Incorrect phone");
    } else {
      setTelError("");
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const emailReg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailReg.test(String(e.target.value).toLowerCase())) {
      setEmailError("Incorrect email");
    } else {
      setEmailError("");
    }
  };

  const checkboxHandler = () => {
    setFieldTouched(true);
    setChecked(!checked);
  };

  return (
    <>
      <div>
        {nameDirty && nameError && (
          <div className={styles.error}>{nameError}</div>
        )}
        <label htmlFor="name"></label>
        <input
          className={styles.input}
          onBlur={(e) => blurHandler(e)}
          onChange={(e) => nameHandler(e)}
          type="text"
          name="name"
          placeholder="Name*"
          value={name}
          required
        />
      </div>
      <div>
        {telDirty && telError && <div className={styles.error}>{telError}</div>}
        <label htmlFor="tel"></label>
        <input
          className={styles.input}
          onBlur={(e) => blurHandler(e)}
          onChange={(e) => telHandler(e)}
          type="tel"
          name="tel"
          placeholder="Phone*"
          value={tel}
          required
        />
      </div>
      <div>
        {emailDirty && emailError && (
          <div className={styles.error}>{emailError}</div>
        )}
        <label htmlFor="email"></label>
        <input
          className={styles.input}
          onBlur={(e) => blurHandler(e)}
          onChange={(e) => emailHandler(e)}
          type="email"
          name="email"
          placeholder="Email*"
          value={email}
          required
        />
      </div>
      <div className={styles.checkboxContainer}>
        {!checked && fieldTouched && (
          <div className={styles.error}>
            Please confirm agreement to terms and conditions
          </div>
        )}
        <input
          className={styles.checkbox}
          onChange={checkboxHandler}
          type="checkbox"
          checked={checked}
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
      <FormButton disabled={!formValid} />
    </>
  );
}

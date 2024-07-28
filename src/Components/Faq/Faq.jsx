import styles from "./Faq.module.css";
import { useState } from "react";
import FaqItem from "./FaqItem";

const questions = [
  {
    q: "how-to-rent",
    a: "you-can",
  },
  {
    q: "what-specified-period",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  },
  {
    q: "what-plans",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  },
  {
    q: "what-charges",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  },
  {
    q: "what-payments",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  },
  {
    q: "what-banks",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  },
  {
    q: "what-devices",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  },
  {
    q: "what-gets-hot",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  },
];

export default function Faq({ faqRef, i18n={i18n} }) {
  const [openId, setId] = useState(null);

  return (
    <div ref={faqRef} className={styles.faqBlock}>
      <h3 className={styles.title}>FAQ</h3>
      <div className={styles.container}>
        <ul className={styles.faq}>
          {questions.map((item, id) => {
            return (
              <FaqItem
                onClick={() => (id === openId ? setId(null) : setId(id))}
                item={item}
                isOpen={id === openId}
                key={id}
                i18n={i18n}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

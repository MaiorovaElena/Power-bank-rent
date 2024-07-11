import styles from "./Faq.module.css";
import { useState } from "react";
import FaqItem from "./FaqItem";

const questions = [
  {
    q: "How to rent a power bank?",
    a: "You can arrange a rental through our mobile application. Simply register, select your nearest rental station and follow the on-screen instructions.",
  },
  {
    q: "What to do if you didn’t manage to return the power bank within the specified period?",
    a: "eeee",
  },
  { q: "Are there season tickets or long term plans?", a: "eeee" },
  {
    q: "How do you pay: by rental time or by the number of charges?",
    a: "eeee",
  },
  {
    q: "What payment methods are accepted (cash, cards, mobile payments)?",
    a: "eeee",
  },
  { q: "What is the capacity of power banks?", a: "eeee" },
  {
    q: "Are power banks suitable for charging various devices (smartphones, tablets, laptops)?",
    a: "eeee",
  },
  { q: "What to do if the power bank stops working or gets hot?", a: "eeee" },
];

export default function Faq() {
  const [openId, setId] = useState(null);

  return (
    <div>
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
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

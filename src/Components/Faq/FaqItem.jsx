import styles from "./FaqItem.module.css";
import arrowUp from "../../assets/faq/Arrow.svg";
import arrowDown from "../../assets/faq/Arrowdown.svg";
import { useRef, useState } from "react";

export default function FaqItem({ item, onClick, isOpen }) {
  const itemRef = useRef(null);
  const [arrowIcon, setArrowIcon] = useState(isOpen ? arrowUp : arrowDown);

  const toggleArrowIcon = () => {
    setArrowIcon(isOpen ? arrowDown : arrowUp);
  };

  return (
    <li className={styles.listItem}>
      <button
        className={isOpen ? styles.questionOpened : styles.question}
        onClick={() => {
          onClick();
          toggleArrowIcon();
        }}
      >
        {item.q}
        <img src={arrowIcon} alt="arrow" className={styles.arrowIcon} />
      </button>
      <div
        className={styles.collapse}
        style={
          isOpen ? { height: itemRef.current.scrollHeight } : { height: "0px" }
        }
      >
        <div className={styles.answer} ref={itemRef}>
          {item.a}
        </div>
      </div>
    </li>
  );
}

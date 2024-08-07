import styles from "./FaqItem.module.css";
import arrowUp from "../../assets/faq/Arrow.svg";
import arrowDown from "../../assets/faq/Arrowdown.svg";
import { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function FaqItem({ item, onClick, isOpen, i18n }) {
  const itemRef = useRef(null);
  const [arrowIcon, setArrowIcon] = useState(isOpen ? arrowUp : arrowDown);
  const isMobile = useMediaQuery({ maxWidth: 599 });

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
        {i18n.t(item.q)}
        <img
          src={arrowIcon}
          alt="Arrow"
          className={
            isOpen && isMobile ? styles.arrowIconMobile : styles.arrowIcon
          }
        />
      </button>
      <div
        className={styles.collapse}
        style={
          isOpen ? { height: itemRef.current.scrollHeight } : { height: "0px" }
        }
      >
        <div className={styles.answer} ref={itemRef}>
        {i18n.t(item.a)}
        </div>
      </div>
    </li>
  );
}

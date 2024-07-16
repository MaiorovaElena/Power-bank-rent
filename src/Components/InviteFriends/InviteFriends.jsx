import { useState, useEffect } from "react";
import st from "./InviteFriends.module.css";
import AppButton from "../Common/Buttons/AppButton.jsx";
import GoogleButton from "../Common/Buttons/GoogleButton.jsx";
import useIntersectionObserver from "../Common/hooks/useIntersectionObserver.jsx";
import rightArrow from "../../assets/inviteFriends/right-arrow.svg";
import leftArrow from "../../assets/inviteFriends/left-arrow.svg";

const InviteFriends = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  const startAnimation = () => {
    setIsVisible(true);
  };

  const elementRef = useIntersectionObserver(startAnimation, {
    threshold: 0.5,
  });

  useEffect(() => {
    if (isVisible) {
      const rightArrowTimeout = setTimeout(() => setShowRightArrow(true), 2900);
      const leftArrowTimeout = setTimeout(() => setShowLeftArrow(true), 9100);

      return () => {
        clearTimeout(rightArrowTimeout);
        clearTimeout(leftArrowTimeout);
      };
    }
  }, [isVisible]);

  return (
    <section className={st.container} ref={elementRef}>
      <h3 className={st.title}>Invite friends</h3>
      <div className={st.textWrapper}>
        <div className={st.paragraphWrapper}>
          <p
            className={`${st.paragraph} ${st.item1} ${
              isVisible ? st.animate : ""
            }`}
          >
            <span className={st.violetText}>Send a link</span> to the app
          </p>
          <p
            className={`${st.paragraph} ${st.item2} ${
              isVisible ? st.animate : ""
            }`}
          >
            to a friend
          </p>
        </div>
        <div className={st.paragraphWrapper}>
          <p
            className={`${st.paragraph} ${st.item3} ${
              isVisible ? st.animate : ""
            }`}
          >
            after <span className={st.violetText}>his renting it</span>
          </p>
          <p
            className={`${st.paragraph} ${st.item4} ${
              isVisible ? st.animate : ""
            }`}
          >
            {" "}
            for the first time
          </p>
        </div>
        <div className={st.paragraphWrapper}>
          <p
            className={`${st.paragraph} ${st.item5} ${
              isVisible ? st.animate : ""
            }`}
          >
            receive a one-day
          </p>
          <p
            className={`${st.paragraph} ${st.item6} ${
              isVisible ? st.animate : ""
            }`}
          >
            rental as a<span className={st.violetText}> gift</span>
          </p>
        </div>
      </div>
      <div className={st.buttonWrapper}>
        <GoogleButton />
        <AppButton />
      </div>
      <img
        src={rightArrow}
        className={`${st.rightArrow} ${showRightArrow ? st.show : ""}`}
        alt="right arrow"
      />
      <img
        src={leftArrow}
        className={`${st.leftArrow} ${showLeftArrow ? st.show : ""}`}
        alt="left arrow"
      />
    </section>
  );
};

export default InviteFriends;

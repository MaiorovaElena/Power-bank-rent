import { useState, useEffect } from "react";
import st from "./InviteFriends.module.css";
import AppButton from "../Common/Buttons/AppButton.jsx";
import GoogleButton from "../Common/Buttons/GoogleButton.jsx";
import useIntersectionObserver from "./hooks/useIntersectionObserver.jsx";
import rightArrow from "../../assets/inviteFriends/right-arrow.svg";
import leftArrow from "../../assets/inviteFriends/left-arrow.svg";

const InviteFriends = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [elementsVisible, setElementsVisible] = useState({
    paragraph1: false,
    rightArrow: false,
    paragraph2: false,
    leftArrow: false,
    paragraph3: false,
  });

  const startAnimation = () => {
    setIsVisible(true);
  };

  const elementRef = useIntersectionObserver(startAnimation, {
    threshold: 0.3,
  });

  useEffect(() => {
    if (isVisible) {
      const timeouts = [];

      timeouts.push(
        setTimeout(
          () => setElementsVisible((prev) => ({ ...prev, paragraph1: true })),
          0
        )
      );
      timeouts.push(
        setTimeout(
          () => setElementsVisible((prev) => ({ ...prev, rightArrow: true })),
          300
        )
      );
      timeouts.push(
        setTimeout(
          () => setElementsVisible((prev) => ({ ...prev, paragraph2: true })),
          500
        )
      );
      timeouts.push(
        setTimeout(
          () => setElementsVisible((prev) => ({ ...prev, leftArrow: true })),
          700
        )
      );
      timeouts.push(
        setTimeout(
          () => setElementsVisible((prev) => ({ ...prev, paragraph3: true })),
          900
        )
      );

      return () => {
        timeouts.forEach(clearTimeout);
      };
    }
  }, [isVisible]);

  return (
    <section className={st.container} ref={elementRef}>
      <h3 className={st.title}>Invite friends</h3>
      <div className={st.textWrapper}>
        <p
          className={`${st.paragraph} ${
            elementsVisible.paragraph1 ? st.show : ""
          }`}
        >
          <span className={st.violetText}>Send a link</span> to the app to a
          friend
        </p>
        <img
          src={rightArrow}
          className={`${st.rightArrow} ${
            elementsVisible.rightArrow ? st.show : ""
          }`}
          alt="right arrow"
        />
        <p
          className={`${st.paragraph} ${
            elementsVisible.paragraph2 ? st.show : ""
          }`}
        >
          after <span className={st.violetText}>his renting it</span> for the
          first time
        </p>
        <img
          src={leftArrow}
          className={`${st.leftArrow} ${
            elementsVisible.leftArrow ? st.show : ""
          }`}
          alt="left arrow"
        />
        <p
          className={`${st.paragraph} ${
            elementsVisible.paragraph3 ? st.show : ""
          }`}
        >
          receive a one-day rental as a{" "}
          <span className={st.violetText}>gift</span>
        </p>
      </div>
      <div className={st.buttonWrapper}>
        <GoogleButton />
        <AppButton />
      </div>
    </section>
  );
};

export default InviteFriends;

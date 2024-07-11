import { useState } from "react";
import st from "./InviteFriends.module.css";
import AppButton from "../Common/Buttons/AppButton.jsx";
import GoogleButton from "../Common/Buttons/GoogleButton.jsx";
import useIntersectionObserver from "./hooks/useIntersectionObserver.jsx";

const InviteFriends = () => {
  const [isVisible, setIsVisible] = useState(false);

  const startAnimation = () => {
    setIsVisible(true);
  };

  const elementRef = useIntersectionObserver(startAnimation, {
    threshold: 0.5,
  });

  return (
    <section id="inviteFriends" className={st.container} ref={elementRef}>
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
        <div className={st.buttonWrapper}>
          <GoogleButton />
          <AppButton />
        </div>
      </div>
    </section>
  );
};

export default InviteFriends;

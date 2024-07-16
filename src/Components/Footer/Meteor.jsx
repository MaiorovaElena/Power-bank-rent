import React, { useState, useEffect } from "react";
import useIntersectionObserver from "../Common/hooks/useIntersectionObserver";
import st from "./Meteor.module.css";
import logo from "../../assets/footer/meteorLogo.svg";

export default function Meteor({ onAnimationEnd }) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleIntersection = () => {
    setIsAnimating(true);
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
        onAnimationEnd();
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isAnimating, onAnimationEnd]);

  const elementRef = useIntersectionObserver(handleIntersection, {
    threshold: 0.3,
  });

  return (
    <div className={st.container} ref={elementRef}>
      <div className={`${st.meteorContainer} ${isAnimating ? st.animate : ""}`}>
        <img className={st.meteor} src={logo} alt="meteor" />
      </div>
    </div>
  );
}

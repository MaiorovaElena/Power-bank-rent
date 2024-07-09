import React from "react";
import st from "./Footer.module.css"; // импортируем стили Footer
import logo from "../../assets/footer/meteorLogo.svg";
import telegramIcon from "../../assets/footer/telegramIcon.png";
import viberIcon from "../../assets/footer/viberIcon.png";

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={st.footer}>
      <div className={st.wrapper}>
        <h1 className={st.title}>Meteor</h1>
        <img className={st.logo} src={logo} alt="logo Meteor" />
      </div>
      <nav className={st.nav}>
        <ul className={st.navList}>
          <li className={st.navItem}>
            <a
              className={st.navLink}
              href="#benefits"
              onClick={() => scrollToSection("benefits")}
            >
              Benefits
            </a>
          </li>
          <li className={st.navItem}>
            <a
              className={st.navLink}
              href="#howToRent"
              onClick={() => scrollToSection("howToRent")}
            >
              How to rent
            </a>
          </li>
          <li className={st.navItem}>
            <a
              className={st.navLink}
              href="#price"
              onClick={() => scrollToSection("price")}
            >
              Price
            </a>
          </li>
          <li className={st.navItem}>
            <a
              className={st.navLink}
              href="#faq"
              onClick={() => scrollToSection("faq")}
            >
              FAQ
            </a>
          </li>
        </ul>
      </nav>

      <div className={st.contacts}>
        <a className={st.phone} href="tel:+011XXXXXXXX">
          0 11 XXX XXXX
        </a>
        <a className={st.email} href="mailto:pochta@gmail.com">
          pochta@gmail.com
        </a>
        <div className={st.icons}>
          <a
            href="https://t.me/YourTelegramUsername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={st.telegramIcon}
              src={telegramIcon}
              alt="Telegram Icon"
            />
          </a>
          <a
            href="viber://chat?number=%2B011XXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={st.viberIcon} src={viberIcon} alt="Viber Icon" />
          </a>
        </div>
      </div>
      <div className={st.logoMobileWrapper}>
        <img className={st.logoMobile} src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Footer;

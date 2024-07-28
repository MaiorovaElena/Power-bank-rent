import { useState } from "react";
import st from "./Footer.module.css";
import logo from "../../assets/footer/logo-footer.png";
import telegramIcon from "../../assets/footer/telegramIcon.png";
import viberIcon from "../../assets/footer/viberIcon.png";

export default function Footer({
  howToRentScroll,
  benefitsScroll,
  pricesScroll,
  faqScroll,
  i18n
}) {
  const [classActiveMenu, setClassActiveMenu] = useState(null);

  function clickMenuList(event) {
    event.preventDefault();

    if (classActiveMenu) {
      classActiveMenu.classList.remove(st.active);
    }
    const clickedElement = event.currentTarget;
    clickedElement.classList.add(st.active);
    setClassActiveMenu(clickedElement);
  }

  return (
    <footer className={st.container}>
      <div className={st.wrapper}>
        <h1 className={st.title}>Meteor</h1>
        <img className={st.logo} src={logo} alt="logo Meteor" />
      </div>
      <nav>
        <ul className={st.navList}>
          <li className={st.navItem} onClick={benefitsScroll}>
            <a href="" className={st.navLink} onClick={clickMenuList}>
            {i18n.t("benefits")}
            </a>
          </li>
          <li className={st.navItem} onClick={howToRentScroll}>
            <a href="" className={st.navLink} onClick={clickMenuList}>
            {i18n.t("howToRent")}
            </a>
          </li>
          <li className={st.navItem} onClick={pricesScroll}>
            <a href="" className={st.navLink} onClick={clickMenuList}>
            {i18n.t("price")}
            </a>
          </li>
          <li className={st.navItem} onClick={faqScroll}>
            <a href="" className={st.navLink} onClick={clickMenuList}>
            {i18n.t("faq")}
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
      <img className={st.logoMobile} src={logo} alt="logo" />
    </footer>
  );
}

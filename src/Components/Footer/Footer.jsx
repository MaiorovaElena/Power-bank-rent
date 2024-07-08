import st from "./Footer.module.css";
import logo from "../../assets/footer/meteorLogo.svg";
import telegramIcon from "../../assets/footer/telegramIcon.png";
import viberIcon from "../../assets/footer/viberIcon.png";

const Footer = () => {
  return (
    <div className={st.footer}>
      <div className={st.wrapper}>
        <h1 className={st.title}>Meteor</h1>
        <img className={st.logo} src={logo} alt="logoImg" />
      </div>
      <nav className={st.nav}>
        <a className={st.navLink} href="#benefits">
          Benefits
        </a>
        <a className={st.navLink} href="#howToRent">
          How to rent
        </a>
        <a className={st.navLink} href="#price">
          Price
        </a>
        <a className={st.navLink} href="#faq">
          FAQ
        </a>
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
            <img src={telegramIcon} alt="Telegram Icon" />
          </a>
          <a
            href="viber://chat?number=%2B011XXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={viberIcon} alt="Viber Icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

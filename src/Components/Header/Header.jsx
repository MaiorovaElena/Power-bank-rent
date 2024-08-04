import st from './Header.module.css';
import logoImg from '../../assets/header/meteoriteGraphics.svg'
import { useState } from 'react';
import btnOpen from "../../assets/header/open-menu.svg";
import BurgerMenu from './BurgerMenu/BurgerMenu';

export default function Header({ howToRentScroll, benefitsScroll, homeScroll, pricesScroll, faqScroll, changeLanguage, t, i18n }) {
  const [classActive, setClassActive] = useState(null);
  const [classActiveMenu, setClassActiveMenu] = useState(null);

  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  function closeMenu(event) {
    const clickedElement = event.currentTarget;
    clickedElement.classList.remove(st.openMenu);
    setOpenMobileMenu(false);
  }

  function openMenu(event) {
    const clickedElement = event.currentTarget;
    clickedElement.classList.add(st.openMenu);
    setOpenMobileMenu(true);
  }


  function clickMenuList(event) {
    event.preventDefault();

    if (classActiveMenu) {
      classActiveMenu.classList.remove(st.active);
    }
    const clickedElement = event.currentTarget;
    clickedElement.classList.add(st.active);
    setClassActiveMenu(clickedElement);
  }


  function handleItemClick(event) {

    const clickedElement = event.currentTarget;

    if (classActive) {
      classActive.classList.remove(st.active);
    }
    clickedElement.classList.add(st.active);

    setClassActive(clickedElement);
  }




  return (
    <div className={st.header}>
      <div className={st.container}>
        <div className={st.blokText}>
          <div className={st.title} onClick={homeScroll}>
            <h1 className={st.titleText}>Meteor</h1>
          </div>
          <div className={st.mobileText}>
            <p className={st.textPowerBank}>{t("rentA")}<span className={st.span}>{t("powerBank")}</span> {t("cup-of-coffee")}</p>
          </div>
          <nav className={st.menu}>
            <ul className={st.menuList}>
              <li className={st.menuLi} onClick={benefitsScroll}><a href="" className={`${st.menuLink} ${classActiveMenu === 1 ? st.active : ''}`} onClick={clickMenuList}>{t("benefits")}</a></li>
              <li className={st.menuLi} onClick={howToRentScroll}><a href="" className={`${st.menuLink} ${classActiveMenu === 1 ? st.active : ''}`} onClick={clickMenuList}>{t("howToRent")}</a></li>
              <li className={st.menuLi} onClick={pricesScroll}><a href="" className={`${st.menuLink} ${classActiveMenu === 1 ? st.active : ''}`} onClick={clickMenuList}>{t("price")}</a></li>
              <li className={st.menuLi} onClick={faqScroll}><a href="" className={`${st.menuLink} ${classActiveMenu === 1 ? st.active : ''}`} onClick={clickMenuList}>{t("faq")}</a></li>
            </ul>
          </nav>


          <div className={st.language}>
            <div className={st.open}>
              <button className={st.btnOpen} onClick={openMenu}><img className={st.imgOpen} src={btnOpen} alt="image open" /></button>

              <div className={st.titleMob} onClick={homeScroll}>
                <h1 className={st.titleText}>Meteor</h1>
              </div>
            </div>
            <div className={st.languageBlock}>
              <button className={st.langBtn} onClick={() => changeLanguage("en")}>
                <p className={`${st.languageEn} ${classActive === 1 ? st.active : ''}`} onClick={handleItemClick}>EN</p>
              </button>
              <p className={st.slash}>/</p>
              <button className={st.langBtn} onClick={() => changeLanguage("srb")}>
                <p className={`${st.languageSrb} ${classActive === 1 ? st.active : ''}`} onClick={handleItemClick}>SRB</p>
              </button>
            </div>
          </div>

        </div>
        <div className={st.logo} >
          <img src={logoImg} className={st.logoImg} />
        </div>

        <BurgerMenu
          openMobileMenu={openMobileMenu}
          closeMenu={closeMenu}
          howToRentScroll={howToRentScroll}
          benefitsScroll={benefitsScroll}
          homeScroll={homeScroll}
          pricesScroll={pricesScroll}
          faqScroll={faqScroll}
          i18n={i18n}
        />
      </div>
    </div>
  )
}

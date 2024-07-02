import st from './Header.module.css';
import logo from '../../assets/logo.svg';
import { useState } from 'react';
import btnOpen from "../../assets/header/open-menu.svg";
import BurgerMenu from './BurgerMenu/BurgerMenu';

export default function Header({scrollToBlock, exeScroll, homeScroll}) {
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

    // Убираем класс active у предыдущего активного элемента
    if (classActive) {
      classActive.classList.remove(st.active);
    }

    // Добавляем класс active к текущему элементу
    clickedElement.classList.add(st.active);

    // Обновляем состояние, чтобы хранить текущий активный элемент
    setClassActive(clickedElement);
  }


  return (
    <div className={st.header}>
      <div className={st.container}>
        <div className={st.blokText}>
          <div className={st.title}>
            <h1 className={st.titleText}>Meteor</h1>
          </div>
          <div className={st.mobileText}>
            <p className={st.textPowerBank}>Rent a <span className={st.span}>power bank</span> for the price of a cup of coffee.</p>
          </div>
          <div className={st.textList}>
            <nav className={st.menu}>
              <ul className={st.menuList}>
                <li className={st.menuLi} onClick={exeScroll}><a href="" className={`${st.menuLink} ${classActiveMenu === 1 ? st.active : ''}`} onClick={clickMenuList}>benefits</a></li>
                <li className={st.menuLi} onClick={scrollToBlock}><a href="" className={`${st.menuLink} ${classActiveMenu === 1 ? st.active : ''}`} onClick={clickMenuList}>how to rent</a></li>
                <li className={st.menuLi}><a href="" className={`${st.menuLink} ${classActiveMenu === 1 ? st.active : ''}`} onClick={clickMenuList}>price</a></li>
                <li className={st.menuLi} ><a href="" className={`${st.menuLink} ${classActiveMenu === 1 ? st.active : ''}`} onClick={clickMenuList}>faq</a></li>
              </ul>
            </nav>
            <div className={st.language}>
              <div className={st.open}>
                <button className={st.btnOpen} onClick={openMenu}><img className={st.imgOpen} src={btnOpen} alt="image open" /></button>
              </div>
              <div className={st.languageBlock}>
                <p className={`${st.languageEn} ${classActive === 1 ? st.active : ''}`} onClick={handleItemClick}>EN</p>
                <p className={st.slash}>/</p>
                <p className={`${st.languageSrb} ${classActive === 1 ? st.active : ''}`} onClick={handleItemClick}>SRB</p>
              </div>
            </div>
          </div>

        </div>
        <div className={st.logo} onClick={homeScroll}>
          <img src={logo} className={st.logoImg} />
        </div>

        <BurgerMenu setOpenMobileMenu={setOpenMobileMenu} openMobileMenu={openMobileMenu} closeMenu={closeMenu} scrollToBlock={scrollToBlock}/>
      </div>
    </div>
  )
}

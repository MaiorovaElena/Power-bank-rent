import st from './BurgerMenu.module.css';
import close from '../../../assets/header/close.png'

export default function BurgerMenu({ openMobileMenu, closeMenu, howToRentScroll, homeScroll, benefitsScroll, pricesScroll}) {
  return (
    <div className={`${st.burgerMenu} ${openMobileMenu === true ? st.openMenu :''}`}>
        <div className={st.x}>
            <button className={st.xBtn} onClick={closeMenu}><img src={close} className={st.btnClose} alt="close" /></button>
        </div>
        <div className={st.titleMobile} onClick={closeMenu}>
          <h2 className={st.titleMobileText} onClick={homeScroll}>meteor</h2>
        </div>
        <nav className={st.menu} onClick={closeMenu}>
              <ul className={st.menuList}>
                <li className={st.menuLi}><button className={st.menuLink} onClick={benefitsScroll}>benefits</button></li>
                <li className={st.menuLi}><button className={st.menuLink} onClick={howToRentScroll}>how to rent</button></li>
                <li className={st.menuLi}><button className={st.menuLink} onClick={pricesScroll}>price</button></li>
                <li className={st.menuLi} ><button className={st.menuLink} >faq</button></li>
              </ul>
        </nav>
    </div>
  )
}

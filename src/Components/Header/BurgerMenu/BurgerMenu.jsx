import st from './BurgerMenu.module.css';
import close from '../../../assets/header/close.png'

export default function BurgerMenu({setOpenMobileMenu, openMobileMenu, closeMenu, scrollToBlock}) {
  return (
    <div className={`${st.burgerMenu} ${openMobileMenu === true ? st.openMenu :''}`}>
        <div className={st.x}>
            <button className={st.xBtn} onClick={closeMenu}><img src={close} className={st.btnClose} alt="close" /></button>
        </div>
        <div className={st.titleMobile}>
          <h2 className={st.titleMobileText}>meteor</h2>
        </div>
        <nav className={st.menu}>
              <ul className={st.menuList}>
                <li className={st.menuLi}><button className={st.menuLink} >benefits</button></li>
                <li className={st.menuLi} onClick={scrollToBlock}><button className={st.menuLink}>how to rent</button></li>
                <li className={st.menuLi}><button className={st.menuLink} >price</button></li>
                <li className={st.menuLi} ><button className={st.menuLink} >faq</button></li>
              </ul>
        </nav>
    </div>
  )
}

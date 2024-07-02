import st from './BurgerMenu.module.css';

export default function BurgerMenu({setOpenMobileMenu, openMobileMenu, closeMenu, scrollToBlock}) {
  return (
    <div className={`${st.burgerMenu} ${openMobileMenu === true ? st.openMenu :''}`}>
        <div className={st.x}>
            <button className={st.xBtn} onClick={closeMenu}>X</button>
        </div>
        <nav className={st.menu}>
              <ul className={st.menuList}>
                <li className={st.menuLi}><a href="" className={st.menuLink} >benefits</a></li>
                <li className={st.menuLi} onClick={scrollToBlock}><a href="" className={st.menuLink}>how to rent</a></li>
                <li className={st.menuLi}><a href="" className={st.menuLink} >price</a></li>
                <li className={st.menuLi} ><a href="" className={st.menuLink} >faq</a></li>
              </ul>
        </nav>
    </div>
  )
}

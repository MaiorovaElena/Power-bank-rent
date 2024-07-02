import st from './BurgerMenu.module.css';

export default function BurgerMenu() {
  return (
    <div>
        <nav className={st.menu}>
              <ul className={st.menuList}>
                <li className={st.menuLi}><a href="" className={st.menuLink} >benefits</a></li>
                <li className={st.menuLi}><a href="" className={st.menuLink}>how to rent</a></li>
                <li className={st.menuLi}><a href="" className={st.menuLink} >price</a></li>
                <li className={st.menuLi} ><a href="" className={st.menuLink} >faq</a></li>
              </ul>
            </nav>
    </div>
  )
}

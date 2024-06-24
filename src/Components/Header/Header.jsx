import st from './Header.module.css'
import logo from '../../assets/logo.svg'

export default function Header() {
  return (
    <div className={st.header}>
      <div className={st.blokText}>
        <div className={st.title}>
          <h1 className={st.titleText}>Meteor</h1>
        </div>
        <nav className={st.menu}>
          <ul className={st.menuList}>
            <li className={st.menuLi}>benefits</li>
            <li className={st.menuLi}>how to rent</li>
            <li className={st.menuLi}>price</li>
            <li className={st.menuLi}>faq</li>
          </ul>
        </nav>
      </div>
      <div className={st.rightBlock}>
        <div className={st.language}>
          <p className={st.languageEn}>EN</p>
          <p>/</p>
          <p className={st.languageSrb}>SRB</p>
        </div>
        <div className={st.logo}>
          <a href="#"><img src={logo} className={st.logoImg} /></a>
        </div>
      </div>
    </div>
  )
}

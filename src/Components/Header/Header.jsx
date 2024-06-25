import st from './Header.module.css';
import logo from '../../assets/logo.svg';
// import { useState } from 'react';
// import { NavLink } from 'react-router-dom';

export default function Header() {
  // const [classActive, setClassActive] = useState(false)
  return (
    <div className={st.header}>
      <div className={st.blokText}>
        <div className={st.title}>
          <h1 className={st.titleText}><a href="" className={st.menuLink}>Meteor</a></h1>
        </div>
        <div className={st.textList}>
          <nav className={st.menu}>
            <ul className={st.menuList}>
              <li className={st.menuLi}><a href="" className={`${st.menuLink} ${st.active}`}>benefits</a></li>
              <li className={st.menuLi}><a href="" className={st.menuLink}>how to rent</a></li>
              <li className={st.menuLi}><a href="" className={st.menuLink}>price</a></li>
              <li className={st.menuLi}><a href="" className={st.menuLink}>faq</a></li>
            </ul>
          </nav>
          <div className={st.language}>
            <p className={st.languageEn}>EN</p>
            <p className={st.slash}>/</p>
            <p className={`${st.languageSrb} ${st.active}`}>SRB</p>
          </div>
        </div>

      </div>
      <div className={st.logo}>
        <a href="#" className={st.logoLink}><img src={logo} className={st.logoImg} /></a>
      </div>
    </div>
  )
}

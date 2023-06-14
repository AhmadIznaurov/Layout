import  React from 'react';
import s from './Header.module.css';
import logo from '../img/logo.png'

const Header = () => {
    return (
        <div className={s.wrapper}>
            <header className={s.header}>
                <div className={s.logo}>
                    <img src={logo} />
                </div>
                <ul className={s.header_nav}>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Blogs</li>
                </ul>
                <button className={s.header_button}>GIFT FINDER</button>
            </header>
        </div>

    )
}

export default  Header;


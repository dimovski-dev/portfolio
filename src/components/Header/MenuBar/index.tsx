"use client"

import Link from "next/link"

import style from './styles.module.css'
import { usePathname } from "next/navigation";

export const MenuBar = () => {
    const pathname = usePathname();
    return (
        <nav className={style.navbarWrapper}>
            <ul className={style.navbarList}>
                <li className={style.navbarItem}><Link className={pathname === '/' ? style.navbarLinkActive : style.navbarLink} href="/">About</Link></li>
                <li className={style.navbarItem}><Link className={pathname === '/skills' ? style.navbarLinkActive : style.navbarLink} href="/skills">Skills</Link></li>
            </ul>
        </nav>
    )
}
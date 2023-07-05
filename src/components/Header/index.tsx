import { MenuBar } from "@components/Header/MenuBar/index"

import style from './styles.module.css'

export const Header = () => {
    return (
        <header className="content-wrapper">
            <div className={style.headerWrapper}>
                <section>
                    <h1 className={style.title}>Dmytro Kazantsev | 0xdimovski ⚡️ </h1>
                </section>
                <section>
                    <MenuBar />
                </section>
            </div>
        </header>
    )
}
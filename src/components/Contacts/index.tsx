import { ContactsData } from "@shared/interfaces/ContactData.intefaces"
import { useMemo } from "react"
import { ContactItem } from "./ContactItem"

import style from './styles.module.css'


export const Contacts = () => {

    const contacts: ContactsData[] = useMemo(() => {
        return (
            [
                {
                    title: "Instagram",
                    link: "https://www.instagram.com/0xdimovski/",
                    linkAlias: "@0xdimovski"
                },
                {
                    title: "Github",
                    link: "https://github.com/dimovski-dev",
                    linkAlias: "@dimovski-dev"
                },
                {
                    title: "Linkedin",
                    link: "https://www.linkedin.com/in/dimovskii/",
                    linkAlias: "@dimovskii"
                },
                {
                    title: "Email",
                    link: "kwenkazantsevv@gmail.com",
                    linkAlias: "kwenkazantsevv@gmail.com"
                }
            ]
        )
    }, [])

    return (
        <section className={style.contactsWrapper}>
            {
                contacts.map((contact: ContactsData, index: number) => <ContactItem key={index} contact={contact}/>)
            }
        </section>
    )
}
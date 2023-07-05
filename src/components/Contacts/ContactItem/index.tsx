import { ContactsData } from "@shared/interfaces/ContactData.intefaces"

import style from './styles.module.css'
import Link from "next/link"
interface ContactItemProps {
    contact: ContactsData
}

export const ContactItem = ({contact}: ContactItemProps) => {
    const url = contact.title === "Email" ? `mailto:${contact.link}` : contact.link
    return  (
        <div className={style.contactItem}>
            <span className={style.contactTitle}>{contact.title}: </span> <Link target="_blank" className={style.contactLink} href={url}>{contact.linkAlias}</Link>
        </div>
    )
}
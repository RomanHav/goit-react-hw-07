import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactlist}>
      {filteredContacts.map((contact) => (
        <li className={css.contactpart} key={contact.id}>
          <Contact info={contact} />
        </li>
      ))}
    </ul>
  );
}

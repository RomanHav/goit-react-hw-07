import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList() {
  const contact = useSelector(selectContacts);
  const filterContacts = useSelector(selectNameFilter);

  const filtration = contact.filter((contact) =>
    contact.name.toLowerCase().includes(filterContacts.toLowerCase())
  );

  return (
    <ul className={css.contactlist}>
      {filtration.map((contact) => (
        <li className={css.contactpart} key={contact.id}>
          <Contact info={contact} />
        </li>
      ))}
    </ul>
  );
}

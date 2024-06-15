import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ info: { id, name, number } }) {
  const dispatch = useDispatch();

  const contactDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <div className={css.contactblock}>
      <div className={css.infoblock}>
        <p className={css.info}>{name}</p>
        <p className={css.info}>{number}</p>
      </div>
      <div className={css.btnblock}>
        <button onClick={contactDelete} className={css.deletebtn}>
          Delete
        </button>
      </div>
    </div>
  );
}

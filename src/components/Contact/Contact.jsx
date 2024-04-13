import { FaPhoneAlt, FaUser } from "react-icons/fa";
import css from './Contact.module.css'

export default function Contact({ contact: {id, name, number}, onDelete }) {
  return (
    <div className={css.container}>
      <div>
        <p>
          <FaUser /> {name}
        </p>
        <p>
          <FaPhoneAlt /> {number}
        </p>
      </div>
      <button className={css.btnDelete} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}



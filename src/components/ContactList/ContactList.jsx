import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContactsFilter } from "../../redux/contactsSlice";
import css from './ContactList.module.css'
const ContactList = () => {
  const filter = useSelector(selectContactsFilter);

  return (
    <ul className={css.container}>
      {filter.map((contact) => (
        <li className={css.li} key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

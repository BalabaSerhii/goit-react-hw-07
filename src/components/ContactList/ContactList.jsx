import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContactsFilter } from "../../redux/contactsSlice";

const ContactList = () => {
  const filter = useSelector(selectContactsFilter);

  return (
    <ul>
      {filter.map((contact) => (
        <li key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

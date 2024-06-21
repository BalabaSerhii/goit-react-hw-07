import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import { selectError, selectIsLoading } from "../../redux/contactsSlice";

function App() {
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className="title">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;

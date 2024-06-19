import ContactList from '../ContactList/ContactList';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';



function App() {

  return (
    <div className='title'>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  )
}

export default App;
import Form from '../components/FormContacts/FormContacts';
import Filter from '../components/FilterName/FilterName';
import PhoneList from '../components/PhonebookList/PhonebookList';
import s from './App.module.css';


export function App() {
     
    return (
      <div className={s.conteiner}>
        <h1>Phonebook</h1>
     <Form />
     <h2>Contacts</h2>
     <Filter/>
     <PhoneList/>
    </div>
    );
  }

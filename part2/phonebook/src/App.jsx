import './styles/App.css'
import { use, useState } from "react"
import Header from './componets/Header'
import Register from './componets/Register'
import Serch from './componets/Serch'
import Phonebook from './componets/Phonebook'

function App() {
    const[phoneBook, setPhoneBook] = useState([])
    const [filteredContacts, setFilter] = useState([])


  return (
    <>
    <Header title='PhoneBook'/>
    <Serch phoneBook={phoneBook} setBusqueda={setFilter}/>
    <Header title='Register'/>
    <Register phoneBook={phoneBook} setPhoneBook ={setPhoneBook}/>
    <Phonebook phoneBook={filteredContacts.length > 0 ? filteredContacts : phoneBook}/>

    </>
  )
}

export default App

import './styles/App.css'
import axios from 'axios'
import {useState, useEffect } from "react"
import Header from './componets/Header'
import Register from './componets/Register'
import Serch from './componets/Serch'
import Phonebook from './componets/Phonebook'
import services from './services/contacts'

function App() {
    const[phoneBook, setPhoneBook] = useState([])
    const [filteredContacts, setFilter] = useState([])

    useEffect(()=>{
      const response = services.getAll()
      response.then(contacts => setPhoneBook(contacts))

    },[])
    
    

  return (
    <>

    <Header title='PhoneBook'/>
    <Serch phoneBook={phoneBook} setBusqueda={setFilter}/>
    <Header title='Register'/>
    <Register phoneBook={phoneBook} setPhoneBook ={setPhoneBook}/>
    <Phonebook phoneBook={filteredContacts.length > 0 ? filteredContacts : phoneBook} setPhoneBook={setPhoneBook}/> 
  
    </>
  )
}

export default App

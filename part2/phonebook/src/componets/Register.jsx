import { use, useState } from "react"
import Phonebook from "./Phonebook"
import Header from './Header'
import Person from "./Person"



function Register({phoneBook, setPhoneBook}) {
    const [person,setPerson] = useState('')
    const[phone, setPhone]= useState('')


    const changeName = (event) =>{
        const newPerson= event.target.value
        setPerson(newPerson)
    }
    
    const changePhone = (event) =>{
        const newPhone= event.target.value
        setPhone(newPhone)
    }

    const handelRegister =(event)=>{
        event.preventDefault()
        if (phoneBook.some(contact => contact.name.toLowerCase() === person.toLowerCase())){
            window.alert('IS ALREADY ADDED TO PHONEBOOK')
            setPerson('')
            setPhone('')
        } else{
            const id = phoneBook.length + 1 
            setPhoneBook([...phoneBook,{
                name:person, 
                phone:phone,
                important: Math.random() < 0.5, 
                id: id
            }]) 
            setPerson('')
            setPhone('')
        }
    }

    return(
        <>
            <form  className='formulario' onSubmit={handelRegister}>
                <input type="text"  placeholder="Nombre"  onChange={changeName} value={person}/>
                <input type="tel"  placeholder="Telefono" onChange={changePhone} value={phone}/>
                <button type= "submit" >Add</button>
            </form>
        </>
    )
}



export default Register

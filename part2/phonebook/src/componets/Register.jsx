import { useState, useEffect} from "react"
import axios from "axios"
import  services from "../services/contacts"



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
                if (window.confirm(`${person} is alredy add to phonebook, remplace the old number with a new one? `)){
                    const updateContact = phoneBook.filter(contact =>contact.name.toLowerCase() == person.toLowerCase())

                    const indexUpdate = updateContact[0].id
                    services.update(indexUpdate,phone,person, setPhoneBook)
                        setPerson('')
                        setPhone('')   
                    }
            
            }else {
                services.create(person,phone,phoneBook)
                .then(newContact => {
                        setPhoneBook(phoneBook.concat(newContact))
                        })
                .catch(error=> window.alert(error.response?.data?.error || 'Undefine Error'))
            }
                setPerson('')
                setPhone('')    
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

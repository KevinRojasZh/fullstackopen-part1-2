import Person from "./Person"

function Phonebook({phoneBook, setPhoneBook}) {
    
    return(
    <>

        <div className="containerPhoneBook">
            {phoneBook.map((person)=>{
                return <Person name={person.name} phone={person.number} key={person.id} id={person.id} setPhoneBook={setPhoneBook}/>})}
        </div>

        
    </>
    ) 
}

export default Phonebook 
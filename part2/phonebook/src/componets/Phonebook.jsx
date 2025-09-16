import Person from "./Person"

function Phonebook({phoneBook}) {
    return(
    <>
        <div className="containerPhoneBook">
            {phoneBook.map((person)=>{
                return <Person name={person.name} phone= {person.phone} key={person.id}/>})}

        </div>

        
    </>
    ) 
}

export default Phonebook 
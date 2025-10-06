import axios from "axios"
import services from '../services/contacts'




function Person({name, phone,id,setPhoneBook}) {

const handelDelete =event =>{
    const id = event.target.dataset.userId
    services.eliminate(id,setPhoneBook)
}
// const handelUpdate = event =>{
//     const id = event.target.dataset.userId
//     services.update(id,setPhoneBook)
// }

return (
    <>
        <p> {name} Phone:{phone}</p>

        <div className="options-contact">
        <button data-user-id={id} onClick={handelDelete}>Delete</button>
        {/* <button data-user-id={id} onClick={handelUpdate}>Modificate</button> */}



        </div>
    </>
)}

export default Person

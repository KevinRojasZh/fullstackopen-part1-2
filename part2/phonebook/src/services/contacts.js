import axios from "axios";
const baseUrl = import.meta.env.VITE_BACKEND_URL

const getAll =()=>{
        const request = axios.get(baseUrl)
        return request.then(respons => respons.data) 
}

// const  eliminate= async (id, setPhoneBook) =>{
//     if (window.confirm("Are you sure want DELEATE this contact? ")) {
//         //Guardo en variable  para hacer un fututo Undo 
//         const lastEliminated = await axios.delete(`${baseUrl}/${id}`)
//         console.log(lastEliminated)
//         const contactos = await getAll()
//         console.log(typeof(contactos))
//         console.log(contactos)
//         setPhoneBook(contactos)
            
//     }
// }

const eliminate = async (id, setPhoneBook) => {
    if (window.confirm("Are you sure want DELETE this contact?")) {
        try {
            await axios.delete(`${baseUrl}/${id}`)
            const contactos = await getAll()
            setPhoneBook(contactos)
        } catch (error) {
            window.alert(error.response?.data?.error || 'Error deleting contact')
        }
    }
}






// const update = (id,phone, name, setPhoneBook) =>{
//     const dataUpdate = {
//         "name": name,
//         "number":phone,
//     }
//     return axios.put(`${baseUrl}/${id}`, dataUpdate)
//     .then(()=> getAll())
//     .then((resolve => setPhoneBook(resolve))
//     )
//     .catch(
//         error => window.alert(error.response.data.error)
//     )
// }

const update = async (id, phone, name, setPhoneBook) => {
    const dataUpdate = { name, number: phone }
    try {
        await axios.put(`${baseUrl}/${id}`, dataUpdate)
        const contactos = await getAll()
        setPhoneBook(contactos)
    } catch (error) {
        window.alert(error.response?.data?.error || 'Error updating contact')
    }
}

const create = (name,phone,phoneBook) =>{

    const newContact = {
        name:name, 
        number:phone,
        important: Math.random() < 0.5, 
        }

    const request = axios.post(baseUrl,newContact)
    console.log(request)
    return request.then(promise =>promise.data)
    
}


export default {create, getAll, eliminate,update}
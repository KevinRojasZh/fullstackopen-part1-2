import { useState } from "react"




function Serch({phoneBook, setBusqueda}) {
    const [serch,setSerch] = useState('')

    const serchContact= (event)=>{
        const serchPerson = event.target.value
        setSerch(serchPerson)
    }

    const handleSerch = (event) =>{
        event.preventDefault()
        const filter = phoneBook.filter(contacto => contacto.name.toLowerCase().includes(serch.toLowerCase()) )
        setBusqueda(filter) 
        setSerch('')
    }

    return(
        <>
            <form className="formSerch" onSubmit={handleSerch}>

                <input type="serch" 
                className="formSerch"
                placeholder="Search..."
                onChange={serchContact} 
                value={serch}
                />  

                <button type="submit">Search</button>
            </form>
        </>
    )
}



export default Serch

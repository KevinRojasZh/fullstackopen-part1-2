import { useState, } from "react"
import ListCountries from './ListCountries'
import { useNavigate} from "react-router-dom";



function Home({listCountries, setSelected}){
    const [countryToSerch, setContrySearch] = useState('')

    const [listSerch, setListSerch] = useState([])
    
    const navigate = useNavigate()

    const inputChange = (event)=>{
        const serchCountry = event.target.value
        setContrySearch(serchCountry)
    }

    const handelSerchCountry = () => {
        console.log('HOLA')
        debugger;
        const listSerched =  listCountries.filter(country => country.name.common.toLowerCase().includes(countryToSerch.toLowerCase()))
        

        if(listSerched.length === 1){
            setSelected(listSerched)
            navigate('/more')

        }else if(listSerched.length > 10){
            const message = document.getElementById('messege-error')
            message.innerText= 'Too many matches,specify another filter'
        }else if (listSerched.length === 0){
            return <p>None match</p>;

        }else{ 
            setListSerch(listSerched)
        }
    }

    return(
        <>
        <div>
            <input type="text"  placeholder="Serach country" onChange={inputChange} value={countryToSerch}/>
            <button onClick={handelSerchCountry}>Serach</button>
            <p id="messege-error"></p>
            <ListCountries list={listSerch} setSelected={setSelected}/>


            
        </div>
        </>
    )

}

export default Home
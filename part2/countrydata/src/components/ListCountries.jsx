import services from '../services/countries'
import { useNavigate} from 'react-router-dom'


function ListCountries ({list, setSelected} ){
    const navigate = useNavigate()

    const handelShow = async (event)=>{
        const idSelected = event.target.id
        const countrySelected = idSelected.replaceAll(' ','%')
        const infoCountry = await services.getCountry(countrySelected)
        setSelected([infoCountry])
        navigate('more/')
        

    }

    return(
        <>
        <ul>
            {list.map(country =>{
                return <li key={country.name.common}>{country.name.common} <button onClick={handelShow}  id={country.name.common}> show </button></li>
            })}


        </ul>
        </>
    )

}

export default ListCountries
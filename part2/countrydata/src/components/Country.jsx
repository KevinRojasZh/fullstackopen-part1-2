import { useNavigate } from "react-router-dom"


const Country = ({data}) =>{
    if (!data) return <p>No country selected</p>;

    const navigate = useNavigate()
    const handelBack = ()=>{
        navigate('/')

    }

    
    return(
        <> 
        {data.map(country =>{
            return  <div key={country.idd}>
                        <h1 id ={country.name.common}>{country.name.common}</h1>
                        <p>Capital: {country.capital}</p>
                        <p>Area: {country.area} </p>
                        <h2>Languages</h2>
                        <ul>{
                            Object.values(country.languages).map((lang, index)=>{
                            return <li key={index}>{lang}</li>
                                })
                            }
                        </ul>
                        <img src={country.flags.png} alt={country.flags.alt} />
                    </div>
                })
        }
        <button onClick={handelBack}>Back</button>
        </>
    )

}

export default Country
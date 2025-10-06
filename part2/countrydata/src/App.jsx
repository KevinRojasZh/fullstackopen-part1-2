import { useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import services from './services/countries'
import Home from './components/Home';
import Country from './components/Country'


import './styles/App.css'


function App() {
  const [listCountries, setListCountries ] = useState([])
  const [selected, setSelected] = useState([])


  useEffect(()=>{
    const countries = services.getAll()
    countries.then(resolve => setListCountries(resolve))
  },[])


  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home listCountries={listCountries} setSelected={setSelected}/>}/>
        <Route path={'more/'} element={<Country data={selected}/>}/>


      </Routes>
    </BrowserRouter>
  )
}

export default App

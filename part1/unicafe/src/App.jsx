import { useState } from 'react'
import './styles/App.css'
import Button from './components/Button'
import Title from './components/Title'
import Display from './components/Display'
import Statistics from './components/Statistics'

function App() {
const [good, setGood]= useState(0)
const [neutral, setNeutral]= useState(0)
const [bad, setBad]= useState(0)


const goodOption = () => setGood(good + 1 )
const neutralOption = () => setNeutral(neutral+ 1 )
const badOption = () => setBad(bad + 1 )
const reset = () => {
  setGood(0)
  setNeutral(0)
  setBad(0)
}


  return (
    <>
      <Title text='Give Feedback'/>
      <Button handelClick={goodOption} text='Good'/>
      <Button handelClick={neutralOption} text='Neutral'/>
      <Button handelClick={badOption} text='Bad'/>  
      <Title text='Statistics'/>
      <Display good={good} neutral={neutral} bad={bad}/>
      <Statistics nGood={good} nBad={bad} nNeutral={neutral}/>
      <Button handelClick={reset} text='Reset'className='reset' />

    </>
  )
}

export default App

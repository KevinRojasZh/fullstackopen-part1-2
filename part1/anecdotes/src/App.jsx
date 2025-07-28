import { useState } from 'react'
import './styles/App.css'
import Title from './componets/Title'
import Button from './componets/Button'


function App() {


  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  // FUNCTION FOR FIND ONE ALEATORY NUMBER WHITH ONE MAX 
  function GetRandomInt(max){
    return Math.floor((Math.random()* max ))
  }
  // SERCH THE MAX VALUE 
  const nElemnts = anecdotes.length
  // INITIAL STATE WHIT THE FUNCTION GET RANDOM INT 
  const [selected, setSelected] = useState(GetRandomInt(nElemnts))

  const [like, setLike] = useState(
    Array(nElemnts).fill(0)
  )
  // ARROW FUNCTION GET BACK NEW INDEX FOR SHOW A NEW ANECDOTE 
  const newSelected = () => {
  const randomNumber = GetRandomInt(nElemnts)
  setSelected(randomNumber)
  }

  const [popular, setPopular] = useState(0)

  const mostPopular= (array) => {
    const maximo = Math.max(...array)
    const index = array.indexOf(maximo)
    setPopular(index)
  }
  
  const voted = () => {
    const copy =[...like]
    copy[selected] += 1 
    setLike(copy)
    mostPopular(copy)
  }

  return (
    <>
      <Title text='Anecdote of the day'/>
      <p>{anecdotes[selected]}</p>
      <div className='container-buttons'>
        <Button text='Nex anecdote' onClick={newSelected}/>
        <Button text= 'Vote' onClick={voted}/>
      </div>
      <Title text ='The most popolar anecdote'/>
      <p>{anecdotes[popular]}</p>

    </>
  )
}

export default App

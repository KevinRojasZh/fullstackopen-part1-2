import './styles/App.css'
import Header from './components/Header.jsx';
import Content from './components/Content.jsx';
import Total from './components/Total.jsx';

function App() {
  const course = {
    name: 'Full Stack Open 2024',
    parts:[
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      }, 
      {
        name: 'State of a component',
        exercises: 14,
      }
    ]
  }
  return (
    <>
    <Header course={course}/>
    <Content course={course} />
    <Total course={course} />
    </>
)}

export default App

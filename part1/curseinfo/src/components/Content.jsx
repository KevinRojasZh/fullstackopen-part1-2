import Parts from "./Parts"

function Content({course}) {
    console.log('hola')
return (
    <>
    <Parts name= {course.parts[0].name} exercises= {course.parts[0].exercises}/>
    <Parts name= {course.parts[1].name} exercises= {course.parts[1].exercises}/>
    <Parts name= {course.parts[2].name} exercises= {course.parts[2].exercises}/>
    
    </> 
)}

export default Content

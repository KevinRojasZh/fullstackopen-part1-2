
import Parts from "./Parts"

function Content({course}) {
    return(
        <div>
            {course.parts.map((curso)=>{
                return <Parts name={curso.name} exercises= {curso.exercises} key={curso.id}/>})}

        </div>
    )
}


export default Content

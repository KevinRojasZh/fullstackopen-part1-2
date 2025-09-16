function Course({courses}) {

    //COMPONENTES
    function Header({course}) {
        return (
            <>
            <h1>{course}</h1>
            </> 
        )}

    function Content({course}) {
    return(
        <div>
            {course.parts.map((curso)=>{
                return <Parts name={curso.name} exercises= {curso.exercises} key={curso.id}/>})}

        </div>
    )
}

    function Parts({name, exercises}) {
        return (
            <>
            <p > {name} {exercises}</p>
            </> 
        )}

    function Total({course}) {
        const parts = [...course.parts]
        return (
            <>
                <p>Total of exercises {
                    
                    parts.reduce((sum, obj)=> {
                    return sum + (obj.exercises)
                },0)

                }</p>
            </> 
)}




return(
    <>
        <Header course={courses.name}/> 
        <Content course={courses}/>
        <Total course={courses}/>  
        
    </>
)
}

export default Course


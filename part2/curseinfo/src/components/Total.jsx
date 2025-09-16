
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

export default Total

function Display (props) {
    if (props.bad === 0 && props.neutral === 0 && props.good === 0 ){

        return(
            <p>No feedback given</p>
        
        )
    } 
    return(
        
        <>
            <div className="display">
                <p>Good: {props.good}</p>
                <p>Neutral: {props.neutral}</p>
                <p>Bad: {props.bad}</p>
                <p>All: {props.good + props.neutral + props.bad}</p>    
            </div>
            </>
            
    )

}

export default Display

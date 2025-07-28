function GetRandomInt(max){
    return Math.floor((Math.random()* max - 1 ))
}

function Anecdote({anecdotes}) {
    const nElemnts = anecdotes.length
    const randomNumber = GetRandomInt(nElemnts);


    return(
        <p>{anecdotes[randomNumber]}</p>

    );
}

export default Anecdote;
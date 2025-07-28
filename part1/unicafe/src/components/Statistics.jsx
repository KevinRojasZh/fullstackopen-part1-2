function Statistics({nGood, nNeutral, nBad, }) {
    const total = ( nBad + nNeutral + nGood)
    const averange = (nGood - nBad) /  total
    const positive = (nGood / total) * 100

    if (nGood == 0 &&  nBad===0 && nNeutral===0 ){
        return(
            <>
            </>
        )
    }
    return(
        <div className="Statistics">
            <p>Average: {averange.toFixed(2)}</p>
            <p>Positive: {positive.toFixed(2)}%</p>
        </div>

    );
}

export default Statistics
function Button({handelClick, text, className}){

    return(
        <button onClick={handelClick} className={className}>{text}</button>
    )

}

export default Button 
function TextInput({labelFor,labelName,id,size,placeHolder}) {

    return (
        <p>
            <label htmlFor={labelFor}>{labelName}</label>
            <input type="text" id={id} name={id} size={size} placeholder={placeHolder} />
            <span id="warning"></span>
        </p>
    )
}

export default TextInput
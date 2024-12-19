const TextAreaField = (props) => {
    const data = props.data

    const style = {
        resize: "none",
        height: "100px"
    }

    return (
        <>
            <div className={`${props.pt ? props.pt : ""} ${props.width ? props.width : "w-[100%]"}`}>
                <p className="text-[10px]">{props.fieldName}</p>
                <textarea style={style} className={`w-[100%] text-[12px] border-[1px] border-[#000000] p-[5px] w-[100%]`}/>
            </div>
        </>
    )
}

export default TextAreaField;
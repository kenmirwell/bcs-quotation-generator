const TextField = (props) => {
    const data = props.data

    return (
        <>
            <div className={`${props.pt ? props.pt : ""} ${props.width ? props.width : "w-[100%]"}`}>
                <p className="text-[10px]">{props.fieldName}</p>
                <input className={`text-[12px] border-[1px] border-[#000000] p-[5px] w-[100%]`}/>
            </div>
        </>
    )
}

export default TextField;
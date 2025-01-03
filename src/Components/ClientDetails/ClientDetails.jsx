import React from "react";

const ClientDetails = (props) => {
    
    return (
        <>
            <div className={`pt-[10px] w-[100%] ${props.width ? props.width : "w-[100%]"}`}>
                <p className="text-[10px]">{props.fieldName}</p>
                <input type="date" className={`text-[12px] border-[1px] border-[#000000] p-[5px] w-[100%]`}/>
            </div>
        </>
    )
}

export default ClientDetails;
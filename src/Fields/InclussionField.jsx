import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'

const InclussionField = (props) => {
    const data = props ? props : null;

    const fieldData = useSelector((state) => state.breakdownField);
    
    return (
        <div className={`${props.pt ? props.pt : ""} ${props.width ? props.width : "w-[100%]"} h-[100%] flex flex-col`}>
            <p className="text-[10px]">{props.fieldName}</p>
            <input className={`text-[12px] border-[1px] border-[#000000] p-[5px] w-[100%]`}/>
            <div className={`text-[12px] border-[1px] border-t-[0px] border-[#000000] p-[5px] w-[100%] h-[100%]`}>
                <span className="text-[10px]">No inclussions found</span>
            </div>
        </div>
    )
}

export default InclussionField;
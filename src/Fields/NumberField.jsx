import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setFieldsData } from '../Redux/Slice/breakdownFieldSlice'

const NumberField = (props) => {
    const dispatch = useDispatch();
    const data = props.data

    const handleChange = (e) => {
        dispatch(
            setFieldsData({
                title: props.fieldName,
                value: e.target.value, 
                key: props.fieldKey,
            })
        );
    } 
    
    return (
        <>
            <div className={`${props.pt ? props.pt : ""} ${props.width ? props.width : "w-[100%]"}`}>
                <p className="text-[10px]">{props.fieldName}</p>
                <input 
                    type={"number"} 
                    min={props.min ? props.min : null} 
                    placeholder={props.placeholder ? props.placeholder : ""} 
                    onChange={handleChange} 
                    className={`text-[12px] border-[1px] border-[#000000] p-[5px] w-[100%]`}
                />
            </div>
        </>
    )
}

export default NumberField;
import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setFieldsData } from '../Redux/Slice/breakdownFieldSlice'

const AutofillField = (props) => {
    const dispatch = useDispatch();
    const data = props.data

    useEffect(() => {
        if (data) {
            dispatch(
                setFieldsData({
                    title: props.fieldName,
                    value: data, 
                    key: props.fieldKey,
                })
            );
        }
    }, [data, dispatch])

    return (
        <>
            <div className={`${props.pt ? props.pt : ""} ${props.width ? props.width : "w-[100%]"}`}>
                <p className="text-[10px]">{props.fieldName}</p>
                <div className={`text-[12px] border-[1px] border-[#000000] p-[5px] w-[100%]`}>{data ? data : "0.00"}</div>
            </div>
        </>
    )
}

export default AutofillField;
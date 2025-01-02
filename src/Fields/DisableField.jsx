import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setFieldsData } from '../Redux/Slice/breakdownFieldSlice'
import SelectionPopup from '../Popup/SelectionPopup';

const DisableField = (props) => {
    const [priorityStatus, setPriorityStatus] = useState(false);

    const handlePriorityError = () => {
        setPriorityStatus(true)
    }

    return (
        <div className={`${props.pt ? props.pt : ""} ${props.width ? props.width : "w-[100%]"} relative flex`}>
            <div className="w-[100%]">
                <div className="flex justify-between">
                    <p className="text-[10px]">{props.fieldName}</p>
                    {priorityStatus &&
                        <p className="text-[#ff002b] text-[10px]">Please select a package</p>
                    }
                </div>
                <div onClick={handlePriorityError} className={`text-[12px] border-[1px] border-[#000000] p-[5px] w-[100%]`}>Select Package Type</div>
            </div>
        </div>
    )
}

export default DisableField;
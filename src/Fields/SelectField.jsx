import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setData, setFieldsData } from '../Redux/Slice/breakdownFieldSlice'
import SelectionPopup from '../Modal/SelectionPopup';

const SelectField = (props) => {
    const dispatch = useDispatch();

    const data = props.data;
    const [modalStatus, setModalStatus] = useState(false);

    const handleSelect = ({title, value, key}) => {
        dispatch( 
            setFieldsData(
                {
                    title: title,
                    value: value,
                    key: key
                }
            )
        )
    }

    const handleModal = () => {
        setModalStatus(!modalStatus)
    }

    return (
        <div className={`${props.pt ? props.pt : ""} ${props.width ? props.width : "w-[100%]"} relative flex`}>
            {modalStatus &&
                <SelectionPopup
                    data={data}
                    handleSelect={(e) => handleSelect(e)}
                    fieldKey={props.fieldKey}
                />
            }
            <div className="w-[100%]">
                <p className="text-[10px]">{props.fieldName}</p>
                <div onClick={handleModal} className={`text-[12px] border-[1px] border-[#000000] p-[5px] w-[100%]`}>{props.value ? props.value : "Select Package"}</div>
            </div>
        </div>
    )
}

export default SelectField;
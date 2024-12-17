import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setData } from '../Redux/Slice/breakdownFieldSlice'

const SelectField = (props) => {
    const dispatch = useDispatch();

    const data = props;
    const [modalStatus, setModalStatus] = useState(false);

    const handleSelect = ({title, value}) => {
        dispatch( setData(
            {
                title: title,
                value: value
            }
        ))
    }

    const handleModal = () => {
        setModalStatus(!modalStatus)
    }

    return (
        <div className={`${props.pt ? props.pt : ""} ${props.width ? props.width : "w-[100%]"} relative flex`}>
            {modalStatus &&
                <div className={`z-[9] flex flex-col top-[52px] text-[12px] bg-[#ffffff] border-[1px] border-[#000000] py-[6px] px-[5px] w-[100%] absolute`}>
                    {
                        data.data.map((i, index) => (
                            <span onClick={() => handleSelect({title: i.title, value: i.value})} key={index} value={i.value}>{i.title}</span>
                        ))
                    }
                </div>
            }
            <div className="w-[100%]">
                <p className="text-[10px]">{props.fieldName}</p>
                <div onClick={handleModal} className={`text-[12px] border-[1px] border-[#000000] p-[5px] w-[100%]`}>{props.value ? props.value : "Select Package"}</div>
            </div>
        </div>
    )
}

export default SelectField;
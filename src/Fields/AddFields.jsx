import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'

const AddField = (props) => {
    const [modalStatus, setModalStatus] = useState(false);

    const handleModal = () => {
        setModalStatus(!modalStatus)
    }

    const data = props;

    const fieldData = useSelector((state) => state.breakdownField);

    return (
        <div className="relative flex">
            {modalStatus &&
                <div className={`flex flex-col top-[52px] text-[12px] bg-[#ffffff] border-[1px] border-[#000000] py-[6px] px-[5px] w-[100%] absolute`}>
                    {
                        data.data.map((i, index) => (
                            <span key={index} value={i.value}>{i.title}</span>
                        ))
                    }
                </div>
            }
            <div className={`${props.pt ? props.pt : ""} ${props.width ? props.width : "w-[100%]"}`}>
                <p className="text-[10px]">{props.fieldName}</p>
                <div onClick={handleModal} className={`text-[12px] border-[1px] border-[#000000] p-[5px] w-[100%]`}>Select Add-ons</div>
            </div>
        </div>
    )
}

export default AddField;
import TextField from "../../../Fields/TextField";
import DateField from "../../../Fields/DateField";
import SelectField from "../../../Fields/SelectField";
import AddOns from "../Data/AddOnsData";
import {ServicesData} from "../Data/ServicesData"
import AddField from "../../../Fields/AddFields";
import { useSelector, useDispatch } from 'react-redux'

const Breakdown = (props) => {

    const fieldData = useSelector((state) => state.breakdownField);
    const packageType =  ServicesData.data.find(i => i.value === fieldData.breakdownItem.value )

    console.log("packageType", packageType)

    return (
        <div className="shadow mt-[5px] mx-[5px]">
            <div id={props.index} key={`breakdown_item_${props.index}`} className="px-[20px] flex flex-col justify-between py-[20px]">
                <div className="flex justify-between gap-[10px]">
                    <div className="flex gap-[10px] w-[100%]">
                        <SelectField
                            fieldName={"Package"}
                            width={"w-[100%]"}
                            data={ServicesData.data}
                            value={fieldData.breakdownItem.title}
                        />
                        <SelectField
                            fieldName={"Package Type"}
                            width={"w-[100%]"}
                            data={packageType && packageType.type}
                        />
                    </div>
                    <div className="flex gap-[10px] w-[100%]">
                        <TextField 
                            fieldName={"Amount"}
                        />
                        <TextField 
                            fieldName={"Total Price"}
                        />
                    </div>
                </div>
                <div className="flex w-[100%] gap-[10px]">
                    <div className="flex gap-[10px] pt-[5px] text-[10px] justify-end">
                        <button className="w-[100%] text-[#ffffff] py-[5px] px-[10px] bg-[#a30a24] w-[100%] hover:bg-[#e57011]">See Inclussions</button>
                    </div>
                    <div className="w-[100%]">
                        <AddField
                            fieldName={"Additional Services"}
                            pt={"pt-[5px]"}
                            data={AddOns}
                        />
                    </div>
                    <div className="w-[100%]">
                        <TextField 
                            fieldName={"Remarks"}
                            pt={"pt-[5px]"}
                        />
                    </div>
                    <div className="flex gap-[10px] w-[50%] pt-[18px] text-[12px] justify-end">
                        <button onClick={props.handleAdditem} className="text-[#ffffff] py-[5px] px-[10px] bg-[#a30a24]">Add</button>
                        <button onClick={(e, index={props}) => props.handleRemoveitem(props.index)} className="text-[#ffffff] py-[5px] px-[10px] bg-[#a30a24]">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Breakdown;
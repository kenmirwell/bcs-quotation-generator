import React, {useState} from 'react'
import TextField from "../../../Fields/TextField";
import DateField from "../../../Fields/DateField";
import SelectField from "../../../Fields/SelectField";
import AddOns from "../Data/AddOnsData";
import {ServicesData} from "../Data/ServicesData"
import AddField from "../../../Fields/AddFields";
import { useSelector, useDispatch } from 'react-redux'
import DisableField from "../../../Fields/DisableField";
import AutofillField from "../../../Fields/AutofillField";
import TextAreaField from "../../../Fields/TextAreaField";
import InclussionField from "../../../Fields/InclussionField";
import RegularAddonsEdit from "./RegularAddonsEdit/RegularAddonsEdit";

const RegularPackageEdit = (props) => {

    const fieldData = useSelector((state) => state.breakdownField);
    const packageValue = fieldData.breakdownItem.package.value
    const typeValue = fieldData.breakdownItem.type.value
    const packageType =  ServicesData.data.find(i => i.value === packageValue )
    const packageTypedetails = packageType ? packageType.type.find(i => i.value === typeValue) : null 

    return (
        <div className="p-[50px] flex flex-col justify-between gap-[20px]">
            <div className="p-[20px] flex flex-col justify-between gap-[20px] shadow">
                <div className="flex gap-[10px] justify-end">
                    <button className="p-[10px] text-[12px] bg-[#a30a24] text-[#ffffff] w-[100px]">Cancel</button>
                    <button className="p-[10px] text-[12px] bg-[#a30a24] text-[#ffffff] w-[100px]">Save</button>
                </div>
                <div className="flex gap-[20px]">
                    <SelectField
                        fieldName={"Package"}
                        fieldKey={"package"}
                        width={"w-[100%]"}
                        data={ServicesData.data}
                        value={fieldData.breakdownItem.package.title}
                    />
                    <div className="w-[100%]">
                        <p className="w-[100%]">Total Package Price: <span className="w-[100%]">0.00</span></p>
                    </div>
                </div>
                <div className="flex justify-between gap-[10px]">
                    <div className="flex flex-col gap-[10px] w-[100%]">
                        {packageType ?
                            <SelectField
                                fieldName={"Package Type"}
                                fieldKey={"type"}
                                width={"w-[100%]"}
                                data={packageType && packageType.type}
                                value={fieldData.breakdownItem.type && fieldData.breakdownItem.type.title}
                            /> :
                            <DisableField
                                fieldName={"Package Type"}   
                                width={"w-[100%]"}
                            />
                        }
                        <div className="flex gap-[10px]">
                            <AutofillField 
                                fieldName={"Package Price"}
                                data={packageTypedetails && packageTypedetails.price}
                            />
                            <TextField 
                                fieldName={"Number of client"}
                            />
                        </div>
                        <div className="flex gap-[10px]">
                            <TextField 
                                fieldName={"Discount for"}
                            />
                            <TextField 
                                fieldName={"Discount Amount"}
                            />
                        </div>
                        <AutofillField 
                            fieldName={"Total Amount"}
                        />
                    </div>
                    <div className="w-[100%]">
                        <InclussionField
                            fieldName={"Inclussions"}
                        />
                    </div>
                </div>
                <div className="flex w-[100%] gap-[10px]">
                    <TextAreaField
                            fieldName={"Remarks"}
                    />
                    {/* <div className="w-[100%]">
                        <AddField
                            fieldName={"Additional Services"}
                            pt={"pt-[5px]"}
                            data={AddOns}
                        />
                    </div> */}
                    {/* <div className="w-[100%]">
                        <TextField 
                            fieldName={"Remarks"}
                            pt={"pt-[5px]"}
                            height={"100px"}
                        />
                    </div> */}
                    {/* <div className="flex gap-[10px] w-[50%] pt-[18px] text-[12px] justify-end"> */}
                        {/* <button onClick={props.handleAdditem} className="text-[#ffffff] py-[5px] px-[10px] bg-[#a30a24]">Add</button> */}
                        {/* <button onClick={(e, index={props}) => props.handleRemoveitem(props.index)} className="text-[#ffffff] py-[5px] px-[10px] bg-[#a30a24]">Remove</button> */}
                    {/* </div> */}
                </div>
            </div>
            <div>
                <RegularAddonsEdit
                    addOns={AddOns}
                />
            </div>
        </div>
    )
}

export default RegularPackageEdit;
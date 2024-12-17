import React, {useState} from "react";
import Breakdown from "./BreakDown/BreakdownItem";
import TextField from "../../Fields/TextField";
import DateField from "../../Fields/DateField";

const StudioQuote = () => {
    const [breakDownitems, setBreakdownitems] = useState([
        {
            index: 0,
            name: "",
        }
    ]);
    let itemId = 0;

    const handleAdditem = (index) => {

        breakDownitems.map(i)
        setBreakdownitems([
            ...breakDownitems,
            {
                index: index
            }
        ])
    }

    const handleRemoveitem = (index) => {
        // setBreakdownitems([
        //     breakDownitems.filter(items =>
        //         index !== items.index
        //     )
        // ])

        const newList =  breakDownitems.filter(items =>
            index !== items.index
        )
    }

    return (
        <>
            <div className="mt-[20px]">
                <div className="p-[10px] bg-[#a30a24] text-[#ffffff] text-[12px]">
                    <div className="flex justify-between">
                        <h6>Project Details and Breakdown</h6>
                        <div>
                            <p>Total Amount: O.OO Php</p>
                        </div>
                    </div>
                </div>
                {
                    breakDownitems.map((items, index) => (
                        <Breakdown
                            index={index}
                            handleAdditem={() => handleAdditem(index)}
                            handleRemoveitem={(index) => handleRemoveitem(index)}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default StudioQuote;
import React, {useState} from 'react'
import RegularAddonsField from './RegularAddonsField/RegularAddonsField';

const RegularAddonsEdit = (props) => {

    const [breakDownitems, setBreakdownitems] = useState([
        {
            index: 0,
            name: "",
        }
    ]);
    let itemId = 0;

    const handleAdditem = () => {

        setBreakdownitems([
            ...breakDownitems,
            {
                index: "sample"
            }
        ])
    }

    const handleRemoveitem = (index) => {
        const newList =  breakDownitems.filter(items =>
            index !== items.index
        )
    }

    console.log("breakdownItems", breakDownitems)

    return (
        <div className="flex flex-col gap-[10px]">
            {
                breakDownitems.map((items, index) => (
                    <div key={index}>
                        <RegularAddonsField
                            addOns={props.addOns}
                        />
                    </div>
                ))
            }
            <div className="flex justify-end">
                <button onClick={() => handleAdditem()} className="text-[10px] py-[5px] px-[10px] bg-[#000000] text-[#ffffff]">Add Services</button>
            </div>
        </div>
    )
}

export default RegularAddonsEdit;
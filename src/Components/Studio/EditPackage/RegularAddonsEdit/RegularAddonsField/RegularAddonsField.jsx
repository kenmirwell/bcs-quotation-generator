import AddField from "../../../../../Fields/AddFields"
import AutofillField from "../../../../../Fields/AutofillField";
import TextField from "../../../../../Fields/TextField";
import SelectField from "../../../../../Fields/SelectField";

const RegularAddonsField = (props) => {
    return (
        <div className="flex gap-[10px] py-[10px] px-[20px] shadow">
            <div className="w-[100%] flex flex-col gap-[10px]">
                <div className="flex gap-[10px]">
                    <SelectField
                        fieldName={"Additional Services"}
                        data={props.addOns}
                        width={"w-[100%]"}
                    />
                    <TextField 
                        fieldName={"Number of client"}
                    />
                </div>
                <div className="w-[100%] flex gap-[10px]">
                    <AutofillField 
                        fieldName={"Service Price"}
                        // data={packageTypedetails && packageTypedetails.price}
                    />
                    <AutofillField 
                        fieldName={"Total Amount"}
                    />
                </div>
            </div>
            <div className="w-[100%] flex flex-col gap-[10px]">
                <TextField 
                    fieldName={"Inclussions"}
                />
                <TextField 
                    fieldName={"Remarks"}
                />
            </div>
            <div className="flex justify-center items-start w-[30px]">
                <div className="pt-[10px] cursor-pointer">
                    <svg width="100%" height="100%" viewBox="0 0 700 701" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M75 151H25C18.3696 151 12.0107 148.366 7.32233 143.678C2.63392 138.989 0 132.631 0 126C0 119.37 2.63392 113.011 7.32233 108.323C12.0107 103.634 18.3696 101 25 101H225V25.9502C225 19.3198 227.634 12.9609 232.322 8.27253C237.011 3.58412 243.37 0.950195 250 0.950195H450C456.63 0.950195 462.989 3.58412 467.678 8.27253C472.366 12.9609 475 19.3198 475 25.9502V101H675C681.63 101 687.989 103.634 692.678 108.323C697.366 113.011 700 119.37 700 126C700 132.631 697.366 138.989 692.678 143.678C687.989 148.366 681.63 151 675 151H625V676C625 682.631 622.366 688.99 617.678 693.678C612.989 698.366 606.63 701 600 701H100C93.3696 701 87.0107 698.366 82.3223 693.678C77.6339 688.99 75 682.631 75 676V151ZM425 101V51.0002H275V101H425ZM125 651H575V151H125V651ZM275 551C268.37 551 262.011 548.366 257.322 543.678C252.634 538.99 250 532.631 250 526V276C250 269.37 252.634 263.011 257.322 258.323C262.011 253.634 268.37 251 275 251C281.63 251 287.989 253.634 292.678 258.323C297.366 263.011 300 269.37 300 276V526C300 532.631 297.366 538.99 292.678 543.678C287.989 548.366 281.63 551 275 551ZM425 551C418.37 551 412.011 548.366 407.322 543.678C402.634 538.99 400 532.631 400 526V276C400 269.37 402.634 263.011 407.322 258.323C412.011 253.634 418.37 251 425 251C431.63 251 437.989 253.634 442.678 258.323C447.366 263.011 450 269.37 450 276V526C450 532.631 447.366 538.99 442.678 543.678C437.989 548.366 431.63 551 425 551Z" fill="black"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default RegularAddonsField;
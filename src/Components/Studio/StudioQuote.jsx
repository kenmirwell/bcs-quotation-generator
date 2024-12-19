import React, {useState} from "react";
import RegularPackageEdit from "./EditPackage/RegularPackageEdit";
import EditPackageModal from "../../Modal/EditpackageModal";
import TextField from "../../Fields/TextField";
import DateField from "../../Fields/DateField";

const StudioQuote = () => {
    const [modalStatus, setModalStatus] = useState(false)

    return (
        <>
            {modalStatus &&
                <EditPackageModal
                    package={
                        <RegularPackageEdit
                            // index={index}
                            handleAdditem={(e) => handleAdditem()}
                            handleRemoveitem={(index) => handleRemoveitem(index)}
                        />
                    }
                    setModal={() => setModalStatus()}
                />
            }
            <div className="mt-[10px]">
                <div className="flex gap-[10px] justify-end">
                    <button className="text-[12px] p-[10px] bg-[#a30a24] text-[#ffffff]">Add Client Details</button>
                    <button onClick={() => setModalStatus(!modalStatus)} className="text-[12px] p-[10px] bg-[#a30a24] text-[#ffffff]">Add Package</button>
                </div>
                <div className="mt-[10px] p-[10px] bg-[#a30a24] text-[#ffffff] text-[12px]">
                    <div className="flex justify-between">
                        <h6>Project Details and Breakdown</h6>
                        <div>
                            <p>Total Amount: O.OO Php</p>
                        </div>
                    </div>
                </div>
                <div className="shadow mt-[5px] mx-[5px]">
                    <div className="px-[20px] flex flex-col justify-between py-[20px]">
                        <p className="text-[12px]">No package found</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudioQuote;
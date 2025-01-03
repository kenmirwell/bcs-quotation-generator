const SelectionPopup = ({data, handleSelect, fieldKey}) => {
    const key = fieldKey;

    return (
        <>
            <div className={`z-[9] flex flex-col top-[52px] text-[12px] bg-[#ffffff] border-[1px] border-[#000000] py-[6px] px-[5px] w-[100%] absolute`}>
                {
                    data.map((i, index) => (
                        <span 
                            key={index} value={i.value}
                            className="bg-[#ffffff] hover:bg-[#a30a24] px-[10px] text-[#000000] hover:text-[#ffffff]" 
                            onClick={() => handleSelect(
                                {
                                    title: i.title, 
                                    value: i.value, 
                                    key: key, 
                                })} 
                        >
                            {i.title}
                        </span>
                    ))
                }
            </div>
        </>
    )
}

export default SelectionPopup;
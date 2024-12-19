

const EditPackageModal = (props) => {
    const studioPackage = props.package

    return (
        <div className="flex justify-center">
            <div className="absolute w-[80%] bg-[#ffffff] z-[99] h-[700px] overflow-y-scroll">
                {studioPackage}
            </div>
            <div onClick={props.setModal} className="w-[100%] h-[100vh] bg-[#000000] opacity-[.2] absolute top-[0px] z-[9]"></div>
        </div>
    )
}

export default EditPackageModal
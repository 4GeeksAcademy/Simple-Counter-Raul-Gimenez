import React from "react";

const BgCounter = ({bgColor, children, borderColor}) => {
    return (
        <div className={`bg-${bgColor} border border-${borderColor} rounded-pill p-5 container align-self-center row w-100`}>
            {children}
        </div>
    )
}

export default BgCounter;
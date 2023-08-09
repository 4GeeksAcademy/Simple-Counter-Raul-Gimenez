import React from "react";

const CounterCard = ({children, borderColor}) => {
   return (
       <div className={`card border border-${borderColor} bg-black fs-1 text-white col m-3`}>
         <div className="card-body text-center">
            {children}
         </div>
       </div>
    ) 
}

export default CounterCard;
import React from 'react';

const Navigation=({onRouteChange,route})=>{
    if(route==="home"){
        return (
            <div>
                <div onClick={()=>onRouteChange("Signout")} className='tc br3 pa3 f3 white text-shadow-5 link pointer text' style={{display:"flex",justifyContent:"flex-end"}}>{"Sign Out"}</div>
            </div>
        )
    }
    else{
        return(
            <div className='flex justify-end'>
                <div onClick={()=>onRouteChange("Register")} className='tc br3 pa3 f3 white text-shadow-5 link pointer text' style={{display:"flex",justifyContent:"flex-end"}}>{"Register"}</div>
                <div onClick={()=>onRouteChange("Signin")} className='tc br3 pa3 f3 white text-shadow-5 link pointer text' style={{display:"flex",justifyContent:"flex-end"}}>{"Sign In"}</div>
            </div>
        )
    }

}

export default Navigation;
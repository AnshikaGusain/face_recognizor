import React from 'react';
import "./FaceRecognition.css"
const FaceRecognition=({ImageUrl,box})=>{
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id="inputimage" src={ImageUrl} alt="" width="500px" height="auto"/>
                <div className="bounding-box" style={{top:box.top,bottom:box.bottom,left:box.left, right:box.right}}></div>
            </div>
        </div>
    )
}

export default FaceRecognition;
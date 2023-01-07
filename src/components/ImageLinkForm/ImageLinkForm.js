import React from 'react';
import "./ImageLinkForm.css";
const ImageLinkForm=({onInputChange,onButtonSubmit})=>{
    return (
        <div>
            <p className='white text f4'>This is Smart Recognizer which will recognize faces in your pictures.</p>
            <div className='pa0 center'>
                <div className="pa3 form center shadow-3">
                    <input className="w-70 br3 pa1 text-dark" type="text" placeholder='type url' onChange={onInputChange}/>
                    <button className='br3 pa1 f4 bg-black white grow w-30' onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;
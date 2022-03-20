import React from 'react';

const Rank=({name,entries})=>{
    return (
        <div className="f4 black">
            <div>
                {`${name}, your entry count in face recognition is...`}
            </div>
            <div>
                {entries}
            </div>
        </div>
    )
}

export default Rank;
import React, { useState } from 'react';

export default function IncDecCounter () {
    const [num, setNum] = useState(3);

    console.log(num, setNum);

    const incNum = () => {
        if (num < 10) {
            setNum(Number(num) + 1);
        }
    };
    const decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    }
    const handleChange = (e) => {
        setNum(e.target.value);
    }

    return (
        <>

            <div className="w-[92px] flex items-center justify-center bg-gray-200">
                {/* <div className="input-group-prepend"> */}
                <button className=" text-white bg-indigo-500 pl-3 pr-4 rounded hover:bg-indigo-900" type="button" onClick={decNum}>-</button>
                {/* </div> */}
                <input type="text" className="w-[122px] flex pl-3 pr-1 bg-gray-200" value={num} onChange={handleChange} />
                {/* <div className="input-group-prepend"> */}
                <button className=" text-white bg-indigo-500 pl-3 pr-4 rounded hover:bg-indigo-900" type="button" onClick={incNum}>+</button>
                {/* </div> */}

            </div>


        </>
    );
}


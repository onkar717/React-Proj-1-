import React, { useState } from "react";

const Profilefunctionalcompo = (props) => {
    const [count , setcounts] = useState(0)
    return (
        <div>
            <h1>Hello WOrld Form Functional Component </h1>
            <h1>{props.name}</h1>
            <h1>Count: {count}</h1>
            <button onClick={() => setcounts(1)}>Count</button>
        </div>
    )
}

export default Profilefunctionalcompo;
import React, { useEffect, useState } from 'react';
import Funuser from './Video_n031_1'
function Fun() {
    const [data, setData] = useState(10);
    const [count, setCount] = useState(50);

    return (
        <div>
            <Funuser count ={count} data={data} />
            <button onClick={()=>setCount(count+1)}>Update count</button>
            <button onClick={()=>setData(data+1)}>Update data</button>
        </div>
    )

}
export default Fun;
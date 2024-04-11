import React from 'react'
function Toggle () {
    const [status, setStatus] = React.useState(true)
    return(
        <div>
            {
                status ? <h1>hello ji kese ho</h1>: null
            }
{/* <button type="button" onClick={()=>setStatus(false)}>Hide</button>
<button type="button" onClick={()=>setStatus(true)}>Show</button> */}

           <button onClick={()=>setStatus(!status)}>Toggle</button> 
        </div>
    );
}

export default Toggle;
import React from 'react'

const Username = (props) => {
    console.warn(props)

    const {data} = props
  return (
      <div> 
         <h2>Username component</h2>
          <h3>name:{data.firstname}</h3>
          <h3>surname:{data.lastname}</h3>
          <h3>age:{data.age}</h3>

      </div>
      
  )
}

export default Username
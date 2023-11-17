import React, { useState } from 'react'


function InputField(props) {

  return (
    <>
      <div className='container'>
        <label>
          {props.name}: <input type="text" name="category" onChange={(event) => {props.onType(event.target.value)}} value={props.value} placeholder={'Enter the ' + props.name} />
        </label>

      </div>

    </>
  )
}

export default InputField
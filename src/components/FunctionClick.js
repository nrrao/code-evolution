import React from 'react'

function FunctionClick() {
  function handleFunctionClick(){
    console.log('button clicked');
  }
  return (
    <div>
      <button onClick={handleFunctionClick} >Click</button>
    </div>
  )
}

export default FunctionClick

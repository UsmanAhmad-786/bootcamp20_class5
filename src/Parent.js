import React from 'react'
import Child from './Contextchild.js'
import Child2 from './ReducerChild.js'


const Parent = (props) => {

  return (
    <div>
      <Child />
      <br />
      <Child2 />

    </div>
  )
}
export default Parent;
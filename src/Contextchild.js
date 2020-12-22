import React,{useContext} from 'react'
import CountContext from './CountContext'



const Child=(props)=>{

let countvalue= useContext(CountContext)
console.log(countvalue)
    return(
        <div>
        
        <h3>The value of Counter using Context is:{countvalue[0]}</h3>
        <button onClick={()=>{countvalue[1](++countvalue[0])}}>Increment Context</button>
       
        </div>
    );
}
export default Child;
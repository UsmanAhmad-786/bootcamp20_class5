import React,{useReducer} from 'react';
import CountReducer from './CountReducer'

const Child2=()=>{
    let [state, dispatch]= useReducer(CountReducer,1);
    console.log(state)
return(
    <div>
        <h3>The value of Counter using Reducer is:{state}</h3>
        <button onClick={()=>dispatch('Increment')}>Increment Reducer</button>

    </div>
);

}
export default Child2;
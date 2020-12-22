import React from 'react'
 


const CountReducer =(state , action)=>{
    switch(action){
        case 'Increment':
        return state+1; 
    }
    //similarly we can decrement

}
export default CountReducer;
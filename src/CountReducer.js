 

const CountReducer =(state , action)=>{
    switch(action){
        case 'Increment':
            return state+1; 
        default:
            throw new Error()
    }
    //similarly we can decrement

}
export default CountReducer;
import React,{useReducer} from 'react'

  const intialState =0;

  const reducer =(state,action)=>{
      console.log(state,action);
      if(action.type === 'INCREMENT'){
          return state+1;
      }
       if(action.type ==='DECREMENT'){
          return state-1;
      }
      return state;
}


const Reducers = () => {
 const [state,dispatch] = useReducer(reducer,intialState);
    
  return (
    <>
     <div>
      <p>{state}</p>
      <button onClick={()=>{dispatch({type:"Increment"})}}></button>
      <button onClick={()=>{dispatch({type:"Decrement"})}}></button>
      </div> 
    </>
  )
}

export default Reducers

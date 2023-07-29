import React, { useEffect,useState} from 'react'

const NewApi = () => {
    const [users,getUsers] =useState([]);
const setUsers= async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/photos/");
    getUsers(await response.json());
}

    useEffect(()=>{
        setUsers();
    })
  return (
    <>
   <div className='container'>


    
{
    users.map((curElem)=>{
        return(
            <>
                <div className='title'>
                    {
                        curElem.title
                    }
                </div>
                <div className='data'>{curElem.name}</div>
            </>
        )
    })
}
   </div>
    </>
  )
}

export default NewApi

import React, { useEffect,useState } from 'react'

const Practise = () => {

    const [users,getUsers]= useState([]);
    const setUsers = async () =>{
        const response =  await fetch ("https://fakestoreapi.com/products");
        getUsers(await (response.json()));
    
    }
    useEffect(()=>{
        setUsers();
    },[])
const filterItems =(itemCateg)=>{
    const updatedItems = users.filter((curElem)=>{
        return curElem.category===itemCateg;
    })
    getUsers(updatedItems);
}

  return (
    <>
   <h2 className='product-card'>Product Card</h2>
   <button onClick={(()=>filterItems("men's clothing"))}>men's clothing</button>
   <button onClick={(()=>filterItems("jewelery"))}>jewelery</button>
   <button onClick={(()=>filterItems("electronics"))}>electronics</button>
   <button onClick={(()=>{setUsers()})}>All</button>
    <div className="container">
        <div className='main'> 
        {
users.map((currElem)=>{
return (
  <div>
    

<div class="card">
  <img src={currElem.image} alt="Denim Jeans"/>
  <h1>{currElem.title}</h1>
  <p className="price">{currElem.price}</p>
  <p>{currElem.description}</p>
  <p><button>Add to Cart</button></p>
</div>

    </div>
)
})
        }
      </div>
         </div>
    </>
  )
}

export default Practise

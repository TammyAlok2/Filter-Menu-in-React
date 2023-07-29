import React , {useEffect, useState} from 'react'
import Menu from './Menu.js'


const Filter = () => {
const [items, setItems]=useState(Menu);

const filterItems=(itemCateg)=>{
const updatedItem = Menu.filter((curElem)=>{
    return curElem.category===itemCateg;
})
setItems(updatedItem);
}
const allCatValues =  (new Set (
   ... Menu.map((curElem)=>{
        return curElem.category;
    }))
)
const [catItems,setCatitems] = useState(allCatValues);

const catMenu =()=>{
    return (
        <div>
{
    catItems.map((curElem)=>{
        return (<button onClick={(()=>filterItems(curElem))}>{curElem}</button>)

    })
}
</div>
    )
}

  return (
    <>
   
<h1>all the products </h1>
{
<catMenu/>
    }

{
  
    items.map((curElem)=>{
     const {id,name,category,description}=curElem;
        return(
            <>
             <div className='name'>{curElem.name} </div>
    <div className="description">{curElem.category}</div>
    <div className="price">{curElem.price} </div>
            </>
        )
    })
}
   

    </>
  )
}

export default Filter

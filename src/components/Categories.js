import React from 'react'

import { useState } from 'react'
const Categories = ({menuList,filter}) => {
  const [category, setCategory] = useState([])


  let categoryButtons = ["All",...new Set(menuList.map((menu)=>menu.category))]

  
  return (
    <div className="buttons">


{categoryButtons.map((categoryButton)=><button key ={categoryButton} onClick = {()=>filter(categoryButton)}>{categoryButton}</button>)}


    </div>
  )
}

export default Categories
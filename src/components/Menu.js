import React from 'react'
import "./Menu.css"
const Menu = ({menuList}) => {
   let {id,category,price,img,title,desc} = menuList

  return (
    
    <div className='card'>
     <img id ="menu_img" src={img}/>
       <section className='card_content'>
        <div className='menu_details'>
            <h4 id='title'>{title}</h4>
            <span id='price'>${price}</span>
        </div>
        <p id='desc'>{desc}</p>
        </section>

     
    </div>
      
  )
}

export default Menu
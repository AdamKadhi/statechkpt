import React from 'react'
import ProductCard from './ProductCard'

const ProductList = () => {
    let products=[
        {
            image:"https://www.tunisianet.com.tn/155465-large/casque-micro-gaming-spirit-of-gamer-pro-h8-led-rgb.jpg",
            name:"Casque",
            price:120
        },
        {
            image:"https://www.tunisianet.com.tn/273010-large/souris-gaming-spirit-of-gamer-pro-m1.jpg",
            name:"Souris",
            price:70
        },
        {
            image:"https://www.technopro-online.com/35256-large_default/prix-clavier-mecanique-gaming-rgb-mk750-cooler-master-tunisie.jpg",
            name:"Clavier",
            price:150
        }
    ]
  return (
    <div className='productslist'>
      {products.map(el=><ProductCard el={el} />)}
    </div>
  )
}

export default ProductList

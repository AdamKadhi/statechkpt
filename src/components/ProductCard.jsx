import React, { useState } from 'react'
import Modal from './Modal'

const ProductCard = ({el}) => {
    const [show, setshow] = useState(false)
  return (
    <div className='card'>
      <img onClick={()=>setshow(true)} src={el.image} alt="" />
      {show?<Modal el={el} setshow={setshow} />:null}
    </div>
  )
}


export default ProductCard

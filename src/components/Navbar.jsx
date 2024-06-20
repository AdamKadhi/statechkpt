import React from 'react'

const Navbar = ({setpage}) => {
  return (
    <div className='nav'>
      <h1>LOGO</h1>
      <ul>
        <li onClick={()=>setpage(0)}>About</li>
        <li onClick={()=>setpage(1)} >Contact</li>
        <li onClick={()=>setpage(2)} >Product List</li>
      </ul>
    </div>
  )
}

export default Navbar

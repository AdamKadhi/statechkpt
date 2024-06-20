import React, { useState } from 'react'

const Modal = ({setshow,el}) => {
    const [edit, setedit] = useState("hhhh")
    const [showbutton, setshowbutton] = useState(true)
  return (
    <div className='modal'>

        <div className="box_modal">
            <button onClick={()=>setshow(false)}>X</button>
            <h1>{edit}</h1>

            <h2>{el.price}</h2>
            <button onClick={()=>setshowbutton(false)}>Hide</button>
            <button onClick={()=>setshowbutton(true)} >Unhide</button>
            {showbutton?<button>Hello</button>:null}
            
        </div>
    </div>
  )
}

export default Modal

import React,{useContext} from 'react'
import './list.css'

export const List = ({name}) => {
 
const handleclick=()=>{
  setValue(name)
}
  return (
    <div className='element' onClick={()=>handleclick()}>{name}</div>
  )
}


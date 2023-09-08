import React,{useContext} from 'react'
import './list.css'

export const List = ({name}) => {
  
  return (
    <div>
          <a href={'https://www.google.com/search?q='+name}><div className='element'>{name}</div></a>
    </div>
  )
}


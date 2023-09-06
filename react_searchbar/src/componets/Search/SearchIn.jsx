import React from 'react'
import './SearchIn.css'
import {FaSearch} from 'react-icons/fa';
export const SearchIn = (props) => {
  const color=props.colour
  return (
    <div className='input_wrap'>
        <FaSearch id='search_icon' style={{color:color}}/>
        <input type='text' placeholder='You Can Start Here'></input>
    </div>
  )
}

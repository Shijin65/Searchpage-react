import React,{useState} from 'react'
import './SearchIn.css'
import {FaSearch} from 'react-icons/fa';


export const SearchIn = (props) => {
  const [text,settext]=useState("");
  const color=props.colour
// console.log(text)
const fetchdata =(value)=>{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((responce)=>responce.json())
  .then((json)=>{
    console.log(json)
  } )}

const handlechange = (value) => {
  settext(value)
  fetchdata(value)
}
 
  return (
    <div className='input_wrap'>
        <FaSearch id='search_icon' style={{color:color}}/>
        <input type='text' placeholder='You Can Start Here'
        value={text}
        onChange={(e)=> handlechange(e.target.value)}></input>
        
    </div>
  )
}

import React,{useState} from 'react'
import './SearchIn.css'
import {FaSearch} from 'react-icons/fa';


export const SearchIn = ({colour,setdata}) => {
  const [text,settext]=useState("");
  
const fetchdata =(value)=>{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((responce)=>responce.json())
  .then((json)=>{
    const result = json.filter((user) => {
      return (
        value &&
        user && 
        user.name && 
        user.name.includes(value)
        );
    });
  setdata(result)
  } );

}

const handlechange = (value) => {
  settext(value)
  fetchdata(value)
}

  
  return (
    <div className='input_wrap'>
      <input type='text' placeholder='You Can Start Here'
        value={text}
        onChange={(e)=> handlechange(e.target.value)}></input>
      <a href={'https://www.google.com/search?q='+text}><FaSearch id='search_icon' style={{color:{colour}}} /></a>
        
    </div>
  )
}

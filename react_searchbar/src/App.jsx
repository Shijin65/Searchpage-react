import { useState,useEffect } from 'react'

import './App.css'
import { SearchIn } from './componets/Search/SearchIn';

function App() { 
  var x = Math. floor(Math. random() * 256);
  var y = Math. floor(Math. random() * 256);
  var z = Math. floor(Math. random() * 256);
  var colour = "rgb(" + x + "," + y + "," + z + ")";
  console.log(colour)

  return (
   <div className='App' style={{backgroundColor:colour}} >
    <h1>Search Bar Using API</h1>
    <div className='searchbar_container'>
        <SearchIn colour={colour}/>
        <div>Suggestion</div>
    </div>
   </div>
  )
}

export default App

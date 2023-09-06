import { useState } from 'react'
import './App.css'
import { SearchIn } from './componets/Search/SearchIn';
import { Suggestion } from './componets/suggesion/Suggestion';

function App() { 
  const [data,setdata]=useState([])

  console.log(data)
  var x = Math. floor(Math. random() * 256);
  var y = Math. floor(Math. random() * 256);
  var z = Math. floor(Math. random() * 256);
  var colour = "rgb(" + x + "," + y + "," + z + ")";
  

  return (
   <div className='App' style={{backgroundColor:colour}} >
    <h1>Search Bar Using API</h1>
    <div className='searchbar_container'>
        <SearchIn colour={colour} setdata={setdata}/>
        <Suggestion data={data}/>
    </div>
   </div>
  )
}

export default App

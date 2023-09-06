import React from 'react'
import './suggestion.css'
import { List } from '../Suggest/List'
export const Suggestion = ({data}) => {
  return (
    <div className='text_wrap'>
      {
        data.map((data ,id) =>{
        return <div key={id}><List name={data.name} /></div>})
      }
        
    </div>
  )
}

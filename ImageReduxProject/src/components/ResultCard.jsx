import React from 'react'
import { useDispatch } from 'react-redux'
import {addCollection, addedToast} from "../redux/features/collectionSlice"
const ResultCard = ({item}) => {
  const dispatch = useDispatch()
  const addToCollection=(item)=>{

    dispatch(addCollection(item))
    dispatch(addedToast())
  }


  return (
    <div className='min-h-full relative w-80 h-80 bg-white rounded-xl overflow-hidden'>
        
      <a target="_blank" href= {item.url}>
         {item.type=='photo'?<img className='h-full w-full object-cover ob' src={item.src} alt=''/>:''}
        {item.type=='video'?<video className='h-full w-full object-cover ob' autoPlay loop muted src={item.src}></video>:''}
        
       </a>
        <div id='bottom' className=' flex justify-between gap-3 items-center w-full px-6 py-5 text-white absolute bottom-0'>
          <h2 className='text-xl font-semibold capitalize h-14 overflow-hidden'>{item.title}</h2>
          <button
          onClick={()=>{
            addToCollection(item)
          }}
          className='bg-indigo-600 cursor-pointer active:scale-95 text-white rounded px-3 py-2 font-medium'  >Save</button>
        
        </div>

    </div>
  )
}

export default ResultCard
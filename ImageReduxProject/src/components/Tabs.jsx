import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'

const Tabs = () => {

    const tabs = ['photos','videos']
    const dispatch = useDispatch()
    const activeTab = useSelector((state)=>
        state.search.activeTab
    )
  return (
    <div className='flex justify-center gap-10 p-10 bg-gray-900'>
        {tabs.map( (elem,idx) =>{
            return <button className={`${(activeTab==elem ?'bg-green-600 ':'bg-gray-600 ') } cursor-pointer active:scale-95 transition px-5 py-2 rounded uppercase`}
             key={idx}
             onClick={()=>{
                dispatch(setActiveTabs(elem))
             }}
             >{elem}</button>
        })}



    </div>
  )
}

export default Tabs
import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCollection, removeToast } from '../redux/features/collectionSlice'

const CollectionsCard = ({items}) => {

    const dispatch = useDispatch()

    const removeFromCollection=(items)=>{
        dispatch(removeCollection(items.id))
        dispatch(removeToast())
    }



    return (
        <div className='min-h-full relative w-80 h-80 bg-white rounded-xl overflow-hidden'>

            <a target="_blank" href={items.url}>
                {items.type == 'photo' ? <img className='h-full w-full object-cover ob' src={items.src} alt='' /> : ''}
                {items.type == 'video' ? <video className='h-full w-full object-cover ob' autoPlay loop muted src={items.src}></video> : ''}

            </a>
            <div id='bottom' className=' flex justify-between gap-3 items-center w-full px-6 py-5 text-white absolute bottom-0'>
                <h2 className='text-xl font-semibold capitalize h-14 overflow-hidden'>{items.title}</h2>
                <button
                    onClick={() => {
                       removeFromCollection(items)
                    }}
                    className='bg-indigo-600 cursor-pointer active:scale-95 text-white rounded px-3 py-2 font-medium'  >Remove</button>

            </div>

        </div>
    )
}

export default CollectionsCard
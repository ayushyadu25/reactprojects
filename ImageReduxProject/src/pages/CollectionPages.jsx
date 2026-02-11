import { useDispatch, useSelector } from "react-redux"
import CollectionsCard from "../components/CollectionsCard"
import { Link } from "react-router-dom"
import { clearCollection } from "../redux/features/collectionSlice"


const CollectionPages = () => {

  const collection = useSelector(state => state.collection.items)
  const dispatch = useDispatch()
  const clearAll = () => {
    dispatch(clearCollection())
  }

  return (

    <div className="flex flex-col bg-gray-900 min-h-screen">
      <div className="flex  gap-2 bg-gray-900">
        <button className="text-2xl p-2 m-5 ml-10 bg-blue-900 active:scale-95 w-28 rounded text-center"><Link to='/' >Back</Link></button>
        <button
          onClick={() => {
            clearAll()
          }}
          className="text-2xl p-2 m-5 bg-red-900 active:scale-95 w-48 rounded text-center ml-280">Clear Collection</button>
      </div>

      <div className="flex justify-start w-full flex-wrap gap-6 overflow-auto px-10 bg-gray-900 ">
        {collection.length > 0 ?
          collection.map((items, idx) => {
            return <div key={idx}>

              <CollectionsCard items={items} />
            </div>
          }) : <div className="text-4xl p-20 m-20 text-center pl-[430px]" >Your Collection is Empty</div>
        }
      </div>
    </div>
  )
}

export default CollectionPages;
import { Route,Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CollectionPages from "./pages/CollectionPages"
import { ToastContainer } from "react-toastify"


const App = () => {


  return (

    <div className='h-screen text-white w-full bg-gray-950'>
      
      <Routes>
        <Route path="/" element={<HomePage/>}   />
        <Route path="/collection" element={<CollectionPages/>}   />
      </Routes>

      <ToastContainer/>
      
     
    </div>



  )
}

export default App
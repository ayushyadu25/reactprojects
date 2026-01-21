import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [topic, setTopic] = useState('')
  const [details, setDetails] = useState('')
  const [notes, setNotes] = useState([])
  const [darkMode, setDarkMode] = useState(false)
  console.log(darkMode);
  const addData = (e) => {
    e.preventDefault()
    setNotes([...notes, { topic, details }])
    setTopic('')
    setDetails('')
    topicRef.current.focus()
  }
  const deleteItem = (indexToDelete) => () => {
    setNotes(notes.filter((_, index) => index !== indexToDelete))
  }
  const topicRef = useRef(null)


  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addData(e);
    }
  }

  return (
    <div className="h-full bg-gray-100 flex items-center justify-center  " style={darkMode ? { backgroundColor: '#1f2937' } : { backgroundColor: '#f3f4f6' }}  >
      <div className="w-full h-full max-w-6xl bg-white rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        <div className=" p-8 border-r">
         <div className="flex items-center justify-between mb-6">
  <span className="text-3xl font-semibold text-gray-800">
    Add Notes
  </span>

  <div className="flex items-center gap-3">
   <label class="relative inline-flex items-center cursor-pointer">
<input
  type="checkbox"
  checked={darkMode}
  onChange={() => setDarkMode(!darkMode)}
  className="sr-only peer"
/>

<div class="w-9 h-5 bg-gray-200 hover:bg-gray-300 peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600 hover:peer-checked:bg-indigo-700"></div>
</label>

    <span className="text-sm text-gray-700">
      {darkMode ? 'Dark Mode' : 'Light Mode'}
    </span>
  </div>
</div>


          <form onSubmit={addData} className="flex flex-col gap-4">
            <input
              ref={topicRef}
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              type="text"
              placeholder="Topic"
              className="border border-gray-300 rounded-lg px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            <textarea
              onKeyDown={handleKeyDown}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Enter details"
              rows="5"
              className="border border-gray-300 rounded-lg px-4 py-2 text-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>

            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-200">
              Add Note
            </button>
          </form>
        </div>

        <div className="p-8 bg-gray-50 overflow-y-auto">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            Your Notes
          </h2>

          <div className="flex flex-col gap-4 ">
            {notes.map((note, index) => (
              <div
                key={index}
                className="flex-col gap-3  border-gray-200 rounded-lg  shadow-sm hover:shadow-md transition p-4 "
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2 ">
                  {note.topic}
                </h3>
                <p className="text-gray-600">
                  {note.details}
                </p>
                <button onClick={deleteItem(index)} className="mt-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded-lg transition duration-200">Delete</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;

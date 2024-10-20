import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordref = useRef(null)
  const copyPasswordTClipBoard = useCallback(()=> {
    passwordref.current?.select();
    passwordref.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
  },[password])

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*(){}[]`~"
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])
  useEffect(()=> {
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])


  return (
    
 
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-600 bg-gray-900 pb-3 ">
      <h1  className='text-white p-3 text-center'>Password Generator</h1>
     <div className='rounded-lg overflow-hidden p-3 mb-4 flex shadow'> <input type="text" value={password} className='outline-none p-3 w-full py-1 px-3' placeholder='Password' readOnly ref={passwordref} />
     <button onClick={copyPasswordTClipBoard} className='outline-none bg-blue-700 text-white px-3 py=0.5 shrink-0'>
      copy
     </button>
     </div>
     <div className="p-3 flex text-sm gap-x-2">
      <div className="flex items-center gap-x-1">
        <input type="range" min={6} max={100} value={length} className='cursor-pointer'  onChange={(e)=> {setLength(e.target.value)}} /> 
      
        <label>Length: {length}</label>
      </div>
      <div className="flex_ item-center gap-x-1">
        
        
            <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={()=> {
              setNumberAllowed((prev)=> !prev)
            }} />
            <label htmlFor="numberInput">Numbers</label>
        
      </div>
      <div className="flex_ item-center gap-x-1">
        
        
        <input type="checkbox" defaultChecked={charAllowed} id='CharacterInput' onChange={()=> {
          setCharAllowed((prev)=> !prev)
        }} />
        <label htmlFor="characterInput">Characters</label>
    
  </div>
     </div>
    </div>
    
   
  )
}

export default App

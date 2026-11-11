import { useEffect, useState } from 'react'
import { createContext } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Nav from './Componet/Nav'
import Home from './Pages/Home'
import Product from './Pages/Product'
import AppRoute from './Componet/AppRoute'
export const context = createContext()
function App() {
  const [count, setCount] = useState(0)
  const [store,setStore] = useState([])
  // useEffect(function(){
  //   localStorage.setItem('storing',JSON.stringify(store))
  // },[store])

  return (
    <>
      <context.Provider value={{store,setStore}}>
        <Nav></Nav>
        <AppRoute></AppRoute>
      </context.Provider>
    </>
  )
}

export default App

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
  useEffect(function(){
    if(store.length>0){
      localStorage.setItem('storing',JSON.stringify(store))
    }
  },[store])
  useEffect(function(){
    const getting = JSON.parse(localStorage.getItem('storing'))
    if(getting){
      setStore(getting)
    }else{
      setStore([])
    }
    console.log('useefect store',store)
    console.log('getting',getting)
  },[])
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

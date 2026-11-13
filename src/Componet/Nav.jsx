import { useEffect, useState } from "react"
import { data, useLocation, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { context } from "../App"
export default function Nav(){
    const navigate = useNavigate()
    const [show,setShow] = useState(false)
    const location = useLocation()
    const {store,setStore,search,setSearch,setStoreSearch,storeSearch} = useContext(context)
    const [pathnameStore,setPathnameStore] = useState([])
    function showing(){
        if(show === false){
            setShow(true)
        }else{
            setShow(false)
        }
    }
    function handleProduct(e){
        navigate('/product',{state:e})
        setSearch()
    }
    function handleHome(){
        navigate('/')
    }
    // function handleProduct(){
    //     navigate('/Product')
    // }
    function handleCart(){
        navigate('/Cart')
    }
    function findProduct(e){
        const value = e.target.value.toUpperCase()
        setSearch(value)
        // console.log('data',value) 
    }
    useEffect(function(){
        const {pathname} = location
        setPathnameStore(location)
    },[location])
    return(
        // <div>
            <div className="nav-container">
                <div className="navigation-banner">
                <div className="nav">
                    <div className="nav-logo">
                        <h1>Sky Garden</h1>
                    </div>
                    <ul>
                        <li onClick={handleHome}>Home</li>
                        <li>About</li>
                        {/* <li onClick={handleProduct}>Product</li> */}
                        {/* <li>Cart</li> */}
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <div className="navigation-wrapper">
                <div className="navigation">
                    <div className="logo">
                        <h1>Sky Garden</h1>
                        <button>CATEGORIES</button>
                        <input type="text" placeholder="Search For Products,Categores or Shop" onChange={findProduct}/>
                        {search && pathnameStore !== '/product' ?                         
                            <div className="suggestions">
                                <ul>
                                    {storeSearch.map(function(res,index){
                                        return(
                                            <li key={index} onClick={function(){
                                                handleProduct(res.product)
                                            }}>{res.categorie}</li>
                                        )
                                    })}
                                </ul>
                        </div>:""}
                    </div>
                    <div className="links">
                        <ul>
                            <li>Login</li>
                            <li onClick={handleCart}>Cart <span>{store.length}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="smaller-device">
                <div className="smaller-logo">
                    <h1>Sky Garden</h1>
                </div>
                <div className="smaller-links">
                    <h2>Login</h2>
                    <h2 onClick={showing}>Links</h2>
                    {show === true ?                     
                        <div className="block">
                            <ul>
                                <li onClick={handleHome}>Home</li>
                                <li>About</li>
                                {/* <li onClick={handleProduct}>Product</li> */}
                                <li onClick={handleCart}>Cart</li>
                                {/* <li>Cart</li> */}
                                <li>Contact</li>
                            </ul>
                        </div>:
                    ""}
                </div>
            </div>
            </div>
            // </div>
    )
}
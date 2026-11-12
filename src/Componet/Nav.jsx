import { useState } from "react"
import { useNavigate } from "react-router-dom"
export default function Nav(){
    const navigate = useNavigate()
    const [show,setShow] = useState(false)
    function showing(){
        if(show === false){
            setShow(true)
        }else{
            setShow(false)
        }
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
                        <input type="text" placeholder="Search For Products,Categores or Shop" />
                    </div>
                    <div className="links">
                        <ul>
                            <li>Login</li>
                            <li onClick={handleCart}>Cart</li>
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
                    {show === true ?                     <div className="block">
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
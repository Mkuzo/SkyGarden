import { useNavigate } from "react-router-dom"

export default function Nav(){
    const navigate = useNavigate()
    function handleHome(){
        navigate('/')
    }
    function handleProduct(){
        navigate('/Product')
    }
    function handleCart(){
        navigate('/Cart')
    }
    return(
        <div>
            <div className="navigation-banner">
                <div className="nav">
                    <div className="nav-logo">
                        <h1>Sky Garden</h1>
                    </div>
                    <ul>
                        <li onClick={handleHome}>Home</li>
                        <li>About</li>
                        <li onClick={handleProduct}>Product</li>
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
        </div>
    )
}
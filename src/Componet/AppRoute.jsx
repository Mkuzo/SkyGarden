import { Route,Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Product from "../Pages/Product"
import Cart from "../Pages/Cart"
export default function AppRoute(){
    return(
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/Product" element={<Product></Product>}></Route>
            <Route path="/Cart" element={<Cart></Cart>}></Route>
        </Routes>
    )
}
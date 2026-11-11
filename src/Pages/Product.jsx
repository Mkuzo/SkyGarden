import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
import image5 from '../assets/image5.jpg'
import image6 from '../assets/image6.jpg'
import image7 from '../assets/image7.jpg'
import image8 from '../assets/image8.jpg'
import image9 from '../assets/image9.jpg'
import image10 from '../assets/image10.jpg'
import image11 from '../assets/image11.jpg'
import image12 from '../assets/image12.jpg'
import image13 from '../assets/image13.jpg'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { context } from '../App'
export default function Product(){
    const {store,setStore} = useContext(context)
    // const data = [{id:1,}]
    const [data,setData] = useState([])
    const location = useLocation()
    function buy(e){
        if(store.length > 0){
           const secondSum = store.some(function(res){
            return(res.id === e.id)
           })
           if(secondSum === false){
            setStore(function(pre){
                return([...pre,e])
           })
           }else{
            alert('Already Exits')
           }
           console.log('e',e)
        //    setStore(secondSum)
        console.log("Second Sum",secondSum)
        }else{
            setStore([e])
        }
    }
    console.log('store',store)
    useEffect(function(){
        const {state} = location
        setData(state)
        console.log(location)
    },[])
    return(
        <div>
            <div className="product-container">
                {data.map(function(res){
                    return(
                        <div className="product-card" key={res.id}>
                            <div className="product-image">
                                <img src={res.image} alt="" />
                            </div>
                            <div className="product-text">
                                <h1>{res.name}</h1>
                                <p>Price: ${res.price}</p>
                                <button onClick={function(){
                                    buy(res)
                                }}>Buy</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
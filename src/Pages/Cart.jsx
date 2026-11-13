import { context } from "../App"
import { useContext, useEffect, useState } from "react"
export default function Cart(){
    const {store,setStore} = useContext(context)
    const [total,setTotal] = useState(0)
    function remove(e){
        if(store.length > 1){
           const item = store.filter(function(res){
                return(
                   res.id !== e.id
                )
            })
            console.log('mster item',item)
            setStore(item)
            console.log('stor store haha',store)
            // controll()
            // setStore()
        }else{
           setStore([])
           localStorage.removeItem('storing')
            // alert(store)
            alert("Empty")
        }
    }
    function add(){
        if(store.length > 0){
            let sum = 0
            store.map(function(res){
                sum += res.price
            })
            setTotal(sum)
        }else{
            setTotal(0)
        }
    }
    // function controll(){
    //     const storing = JSON.parse(localStorage.getItem('storing'))
    //     setStore(storing)
    // }
    // useEffect(function(){
    //     controll()
    // },[])
    useEffect(function(){
        add()
    },[store])
    return(
        <div>
            <div className="product-container">
                {store && store.map(function(res){
                    return(
                        <div className="product-card" key={res.id}>
                            <div className="product-image">
                                <img src={res.image} alt="" />
                            </div>
                            <div className="product-text">
                                <h1>{res.name}</h1>
                                <p>Price: ${res.price}</p>
                                <button onClick={function(){
                                    remove(res)
                                }}>Remove</button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <p id="p">Total: {total}</p>
        </div>
    )
}
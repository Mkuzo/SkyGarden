import nairobi from '../assets/nairobi.jpg'
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
import product2 from '../assets/product2.jpg'
import product3 from '../assets/product3.jpg'
import product4 from '../assets/product4.jpg'
import product5 from '../assets/product5.jpg'
import Product6 from '../assets/Product6.jpg'
import Product7 from '../assets/Product7.jpg'
import product8 from '../assets/product8.jpg'
import product9 from '../assets/product9.jpg'
import product10 from '../assets/product10.jpg'
import product11 from '../assets/product11.jpg'
import nairobi2 from '../assets/nairobi2.jpg'
import nairobi3 from '../assets/nairobi3.jpg'
import React from "react";
// import Slider from "react-slick";
import SliderModule from "react-slick";
const Slider = SliderModule.default || SliderModule;
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { context } from '../App'
import { useEffect,useState } from 'react'
// import nairobi from '../assets/nairobi.jpg'
export default function Home(){
    const {store,setStore,search,setSearch,setStoreSearch,storeSearch} = useContext(context)
    const navigate = useNavigate()
    function handleProduct(e){
        navigate('/Product',{state:e})
        console.log(e)
    }

// export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // auto:play
    autoplay: true,
    autoplaySpeed: 3000,
    // speed: 500,
  };
  const newArra = [
    {
        id:1,
        image: nairobi,
        text: "Same Day Delivery On Nairobi Order"
    },{
        id: 2,
        image: nairobi2,
        text: "Best Quality Items"
    },{
        id:3,
        image: nairobi3,
        text :"Get Your Best Quality Items"
    }
  ]
  
    const data  = [
        {   id:1,
            categorie:"Home & Funiture",
            image:image1,
            product:[{id:1,name:"Funiture",price:200,image:image1},{id:2,name:"Funiture2",price:400,image:product8},{id:3,name:"Funiture3",price:300,image:product9}]
        },
        {   id:2,
            image:image3,
            categorie:"Television",
            product:[{id:1,name:"Television", price:500,image:image3},{id:2,name:"Smart Television", price:300,image:product4},{id:3,name:"Samsung Television", price:700,image:product5}]
        },
        {   id:3,
            image: image2,
            categorie:"Phone Accessories",
            product:[{id:1,name:"Phone Accessories 2", price:300,image:image2},{id:2,name:"Phone Accessories 3", price:300,image:product11},{id:3,name:"Phone Accessories", price:300,image:product10}]
        },
        {   id:4,
            image:image4,
            categorie:"Laptops",
            product:[{id:1,name:"Laptops", price:500,image:image3}]
        },        
        {   id:5,
            image:image5,
            categorie:"Desktops",
            product:[{id:1,name:"Computer", price:500,image:image3}]
        },         
        {   id:6,
            image:image6,
            categorie:"Computer Accessories",
            product:[{id:1,name:"Computer Accesories", price:500,image:image3}]
        },        
         {   id:7,
            image:image7,
            categorie:"Cameras",
            product:[{id:1,name:"Cameras", price:500,image:image3}]
        }, 
        {   id:8,
            image:image8,
            categorie:"Duvets & Pillows",
            product:[{id:1,name:"Duvets & Pillows", price:500,image:product2},{id:2,name:"Duvets & Pillows", price:700,image:product3},{id:3,name:"Duvets & Pillows", price:500,image:image8}]
        }, 
        {   id:9,
            image:image9,
            categorie:"Jewellery",
            product:[{id:1,name:"Jewellery", price:600,image:image9},{id:2,name:"Jewellery 2", price:500,image:Product7},{id:3,name:"Jewellery 3", price:900,image:Product6}]
        }, 
        {   id:10,
            image:image10,
            categorie:"Video Games",
            product:[{id:1,name:"Video Game", price:500,image:image3}]
        }, 
        {   id:11,
            image:image11,
            categorie:"Sun Glasses",
            product:[{id:1,name:"Sun Galses", price:500,image:image3}]
        }, 
        // {   id:12,
        //     image:image12,
        //     categorie:"Sun Glasses",
        //     product:[{id:3,name:"Television", price:500,image:image3}]
        // }, 
        {   id:13,
            image:image13,
            categorie:"Large Appliances",
            product:[{id:1,name:"Large Appliances", price:500,image:image3}]
        }, 
    ]
    useEffect(function(){
        if(search){
            const searchItem = data.filter(function(res){
                return (res.categorie.includes(search))
            })
            setStoreSearch(searchItem)
            console.log('data',data)
            console.log('search',search)
            console.log('searched Item',searchItem)
        }
    },[search])
    return(
        <div>
             <Slider {...settings} className="slider">
                {newArra.map(function(product){
                    return(
                        <div className="banner" key={product.id}>
                            <img src={product.image} alt="" />
                            <div className="cover">
                                <div className="home-banner">
                                    <div className="home-text">
                                        <h1>{product.text}</h1>
                                        <button>Read Who We Are</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
        {/* <div></div> */}
             </Slider>
            <h1 className='h1'>Shop Categorie</h1>
            <div className="home-categorie">
                {data.map(function(res){
                    return(
                        <div className="categorie-card" key={res.id} onClick={function(){
                            handleProduct(res.product)
                        }}>
                            <div className="image-categorie">
                                <img src={res.image} alt="" />
                            </div>
                            <div className="text-categorie">
                                <h1>{res.categorie}</h1>
                            </div>
                        </div>  
                    )
                })}              
            </div>
        </div>
    )
}
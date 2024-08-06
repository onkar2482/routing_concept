
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, Outlet, useParams } from "react-router-dom"

export function Products(){

    const[products,setproducts]=useState([])

    let params=useParams() 

    useEffect(()=>{
       axios.get(`http://fakestoreapi.com/products/category/${params.category}`)
       .then(responce=>{
        setproducts(responce.data)
       })
    },[])
    return(
        <div>
         <div style={{display:"grid",gridTemplateColumns:"6fr 6fr"}}>
          <div>
         <h3>{params.category.toUpperCase()}-Products</h3>
          {
            products.map(product=>
               <Link key={product.id} to={`details/${product.id}`} style={{width:'50px'}}>
                <img key={product.id} src={product.image} width="50" height="50" style={{margin:'20px' ,display:'block'}}></img></Link>
            )
          }
         </div>
         <div>
         <Outlet>
            
            </Outlet>
            
         </div>
         
          

         </div> 
          <p>
            <Link to='/'>Back To Categories</Link>
          </p>
          
        </div>
    )
}
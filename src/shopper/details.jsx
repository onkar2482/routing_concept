import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export function Details(){



    let params=useParams()

    const[product,setproducts]=useState({id:0,price:0,image:'',category:''})
    useEffect(()=>{
        axios.get(`http://fakestoreapi.com/products/${params.id}`)
        .then(responce=>{
            setproducts(responce.data)
        })
    },[params.id])
    return(
        <div>
            <h3>Details</h3>
            <img src={product.image} width="200" height="200"/>
            <dl>
                <dt>Titile</dt>
                <dd>{product.title}</dd>
                <dt>Price</dt>
                <dd>{product.price}</dd>
            </dl>
            <p>
                <Link to={`/products/${product.category}`}>Back to Products</Link>
            </p>
        </div>
    )
}
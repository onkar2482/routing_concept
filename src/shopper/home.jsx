import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export function Home(){

    const [Categories,setcategories]=useState([])

    useEffect(()=>{
        axios.get(`http://fakestoreapi.com/products/categories`)
        .then(response=>
            setcategories(response.data)
        )

    },[])

    return(
        <div>
            <h2>
                <Link to={"login"}>Login</Link>
            </h2>
            <h2>Categories</h2>
            <ol>
                {
                    Categories.map(category=>
                        <li key={category}><Link to={`products/${category}`}>{category.toUpperCase()}</Link></li>
                    
                    )
                }
            </ol>
        </div>
    )
}
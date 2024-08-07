import { useEffect } from "react"
import { useParams, useSearchParams } from "react-router-dom"

export function Success(){
    let params=useParams()
    let search=useSearchParams()

    useEffect(()=>{
        for(var item of search[0].values()){
            console.log(item)
        }
    })
    return(
        <div>
            <h3>Login Success{params.uname}</h3>
        </div>
    )
}
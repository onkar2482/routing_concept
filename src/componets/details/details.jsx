import { useParams } from "react-router-dom"

export function Details(){

let params=useParams()
    return(
        <div>
            <h3>Details</h3>
            <p>
                Id:{params.id}<br/>
                Name:{params.name}<br/>
                Price:{params.price}<br/>
                Stock:{(params.stock===true)?"Available":"out of stock"}
            </p>
        </div>
    )
}
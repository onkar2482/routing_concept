import { useParams } from "react-router-dom"

export function Success(){
    let params=useParams()
    return(
        <div>
            <h3>Login Success{params.uname}</h3>
        </div>
    )
}
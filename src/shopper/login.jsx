import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function Login(){
  
    const[Username,setusername]=useState('')

    let navigate=useNavigate()

    function handleUserNameChange(e){
        setusername(e.target.value)
    }


    function handleloginclick(){
        if(Username==="admin"){
            navigate("/success")

        }else{
                navigate("/invalid")
        }

    }
    return(
        <div>
            <h3>Login</h3>
            User Name:<input type="text"  onChange={handleUserNameChange} placeholder="enter your user name"></input>
            <button onClick={handleloginclick}>Login</button>
        </div>
    )
}
import axios from "axios"

import { useFormik } from "formik"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export function TutorialRegister(){
    const[users,setusers]=useState([])
    const[userError,setUserError]=useState([])
    const[validclass,setvalidclass]=useState([])

    let navigate=useNavigate()

    const formik=useFormik({
        initialValues:{
            "UserId":'',
            "UserName":'',
            "Password":'',
            "Mobile":''
        },
        onSubmit:(user)=>{
            axios.post(`http://127.0.0.1:4040/registeruser`,user)
            alert("register successfully")
            navigate("/login")
            
        }
    })

    useEffect(()=>{
        axios.get(`http://127.0.0.1:4040/users`)
        .then(response=>{
            setusers(response.data);
        })
    },[])

    function VerifyUserId(e){
            for(var user of users){
                if(user.UserId===e.target.value){
                    setUserError("User is taken -try")
                    setvalidclass('text-danger')
                }else{
                    setUserError("user id available")
                    setvalidclass('text-success')
                }
            }
    }
  

    return(
        <div>
            <form className="w-25" onSubmit={formik.handleSubmit}>
            <h3>Tuturial Register</h3>
            <dl>
                <dt>UserId</dt>
                <dd><input type="text"name="UserId" onKeyUp={VerifyUserId} className="form-control" onChange={formik.handleChange}></input></dd>
                <dd className={validclass}>{userError}</dd>
                <dt>UserName</dt>
                <dd><input type="text" name="UserName" className="form-control" onChange={formik.handleChange}></input></dd>
                <dt>Password</dt>
                <dd><input type="Password" className="form-control" name="Password" onChange={formik.handleChange}></input></dd>
                <dt>Mobile</dt>
                <dd><input type="text" className="form-control" name="Mobile" onChange={formik.handleChange}></input></dd>
            </dl>
            <button className="btn btn-primary w-100">Register</button>
            <p>
                <Link to='/login'>Existing user ? Login</Link>
            </p>
            </form>
        </div>
    )
}
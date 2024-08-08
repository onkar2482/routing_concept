import axios from 'axios';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { date } from 'yup';

export function TutorialLogin() {
    let navigate = useNavigate();
    const [cookies,setcookies,removecookie]=useCookies(['uname']);


    const formik = useFormik({
        initialValues: {
            UserId: '',
            Password: ''
        },
        onSubmit: (user) => {
            axios.get(`http://127.0.0.1:4040/users`)
                .then(response => {
                    var userdetails = response.data.find(item => item.UserId === user.UserId);
                    if (userdetails && userdetails.UserId === user.UserId && userdetails.Password === user.Password) {
                        setcookies("uname",user.UserId,[{expires:new Date('2024-12-10')}]);
                        navigate("/videos");
                    } else {
                        navigate("/invalid");
                    }
                })
               
        }
    });

    useEffect(()=>{
       if(window.navigator.cookieEnabled){
        alert("You can Login")
       }else{
        alert("plz unable cookies")
       }
        if(cookies.uname==null){
          alert('please login')
        }else{
            navigate('/videos')
        }
    },[])

    return (
        <div>
            <form className="w-25" onSubmit={formik.handleSubmit}>
                <h3>User Login</h3>
                <dl>
                    <dt>UserId</dt>
                    <dd><input type="text" onChange={formik.handleChange} className="form-control" name="UserId" value={formik.values.UserId}></input></dd>
                    <dt>Password</dt>
                    <dd><input type="password" onChange={formik.handleChange} className="form-control" name="Password" value={formik.values.Password}></input></dd>
                </dl>
                <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
            <p>
                <Link to="/register">New User Register</Link>
            </p>
        </div>
    );
}

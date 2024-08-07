import { useEffect } from "react"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"

export function TutorialVideos(){
    const [cookies,setcookies,removecookie]=useCookies(['uname'])
    let navigate=useNavigate()

    useEffect(()=>{
        if(cookies.uname==null){
            navigate("/login")
        }
    })

    function handlesignout(){
        removecookie('uname')
        navigate("/login")
    }

    return(
        <div>
            <h3>Our Tuturial Video-{cookies.uname}<button onClick={handlesignout} className="btn btn-link">Sign Out</button></h3>
            <iframe width="400" height="300" src="https://youtu.be/bT70Qqgn-qY?si=RjdaLDJUbo1xh2VL"></iframe>
        </div>
    )
}
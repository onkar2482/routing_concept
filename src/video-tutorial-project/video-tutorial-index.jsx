import { BrowserRouter,Link,Route,Routes } from "react-router-dom";
import { TutorialHome } from "./video-tutorial-home";
import { TutorialLogin } from "./video-tutorial-login";
import { TutorialRegister } from "./video-tutorial-register";
import { TutorialVideos } from "./video-tutorial-videos";
import { TutorialInvalid } from "./video-tutorial-invalid";

export function TutorialIndex(){
    return(
        <div className="container-fluid">
          <BrowserRouter>
          <header className="bg-dark text-white p-2 text-center">
                <span className="h3">Online Tutorial videos </span>
            </header>
            <section className="row mt-4">
                <nav className="col-3">
                 <div className="btn btn-dark w-100 mb-2 mt-2 ">
                 <Link className="text-white text-decoration-none" to="/">Home</Link>
                 </div>

                 <div className="btn btn-dark w-100 mb-2 mt-2 ">                 
                    <Link className="text-white text-decoration-none" to="login">Login</Link>
                </div>

                <div className="btn btn-dark w-100 mb-2 mt-2 ">                 
                 <Link className="text-white text-decoration-none" to="register">Register</Link></div>

                 <div className="btn btn-dark w-100 mb-2 mt-2 ">                 
                 <Link className="text-white text-decoration-none" to="videos">Our Videos</Link></div>
                </nav>
                <main className="col-9">
                    <Routes>
                        <Route path="/" element={<TutorialHome></TutorialHome>}></Route>
                        <Route path="login" element={<TutorialLogin></TutorialLogin>}></Route>
                        <Route path="register" element={<TutorialRegister></TutorialRegister>}></Route>
                        <Route path="videos" element={<TutorialVideos></TutorialVideos>}></Route>
                        <Route path="invalid" element={<TutorialInvalid></TutorialInvalid>}></Route>

                    </Routes>

                </main>
            </section>
          </BrowserRouter>

        </div>
    )
}
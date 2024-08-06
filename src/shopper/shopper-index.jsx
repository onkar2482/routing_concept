import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { Products } from "./products";
import { Details } from "./details";
import { Login } from "./login";
import { Invalid } from "./invalid";
import { Success } from "./success";

export function ShopperIndex(){
    return(
        <div>
            <BrowserRouter>
            <header>
                <h1 align="center">Shopper Index</h1>
            </header>
            <Routes>
            <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<Products />}>
          <Route path="details/:id" element={<Details />} />
        </Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="success/:uname" element={<Success/>}></Route>
        <Route path="invalid" element={<Invalid/>}></Route>
               
            </Routes>
            </BrowserRouter>
        </div>
    )
}
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Login } from './componets/login/login';
import { Mobile } from './componets/mobiles/mobile';
import { Details } from './componets/details/details';

function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <header>
    <h1>shopper</h1>
      <nav>
     <Link to='/'>home</Link><span>|</span>
     <Link to='kids'>Kids</Link><span>|</span>
     <Link to='login'>login</Link><span>|</span>
     <Link to='mobile/iphone'>Iphone</Link><span>|</span>
     <Link to='mobile/realme'>Realme</Link><span>|</span>
     

     <Link to='*'>men</Link>

     <hr></hr>
      </nav>
    </header>
      <Routes>
      <Route  path='/' element={<><h2>Home</h2><p>Year and sale</p></>}></Route>
      <Route path='kids' element={<><h2>Kids Fashion</h2><p>30% off </p></>}></Route>
      <Route path='men' element={<><h2>This is men Fashion</h2><p>shoes shirt</p></>}></Route>
      <Route path='login' element={<Login></Login>}></Route>
      <Route path='mobile/:category' element={<Mobile></Mobile>}></Route>
      <Route path='details/:id/:name/:price/:stock' element={<Details></Details>}></Route>
     <Route path='*' element={<><h2>Not found</h2></>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

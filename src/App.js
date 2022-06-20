import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import './App.scss';
import './root.scss';

function App() {
  return (
    <div className="">
         <Header></Header>

         <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/ProductList" element= {<ProductList/>}></Route>
          <Route exact path="/products/:id" element= {<ProductDetails/>}/>
       
        </Routes>
        <Footer/>
         
    </div>
  );
}

export default App;

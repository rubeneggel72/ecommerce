import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BarNav from "./components/BarNav";
import 'font-awesome/css/font-awesome.min.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import BarTop from "./components/BarTop";
import Home from "./containers/Home";
import { CartProvider } from './context/UseCartContext'
import { WishProvider } from './context/UseWishContext'
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Default from "./components/Default";
import Cart from "./containers/Cart";
import HomeFilter from "./containers/HomeFilter";
import HomeFilterWish from "./containers/Wish";
import BuyConfirmation from "./containers/BuyConfirmation"
function App() {
  return (
    <div className="App">
      <CartProvider>
        <WishProvider>
          <BrowserRouter>
            <BarTop />
             <BarNav /> 
            <Switch>
              <Route exact path="/">{<Home />}</Route>
              <Route exact path="/filter/:filter">{<HomeFilter />}</Route>
              <Route exact path="/wishfilter">{<HomeFilterWish />}</Route>
              <Route exact path="/detail/:id"> {<ItemDetailContainer />}</Route>
              <Route exact path="/cart">{<Cart />}</Route>
              <Route exact path="/buyconfirmation">{<BuyConfirmation />}</Route>
              <Route>{<Default />}</Route>
            </Switch>
          </BrowserRouter>
        </WishProvider>
      </CartProvider>
    </div>
  )
}
export default App;

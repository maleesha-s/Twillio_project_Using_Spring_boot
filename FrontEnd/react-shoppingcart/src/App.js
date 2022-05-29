import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import IndexPageComponent from './components/index';
import SellerDashboard from './components/SellerDashComponent';
import SellerAddItem from './components/Additemcomponent';
import updateItem from './components/updateitemcomponent';

import ListOrdersComponent from './components/ListOrdersComponent';
import ListOrdersComponent2 from './components/ListOrderComponent2';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import BuyerDashboard from './components/BuyerDashboard';
import ViewItemsBuyer from './components/ViewItemsBuyer';
import AddOrderComponent from './components/AddOrderComponent';
import PaymentComponent from './components/PaymentComponent';
import otppage from './components/Otpcomponent';
import LoginComponent from './components/LoginComponent';
import SignupComponent from './components/SignupComponent';
import MobilePayment from './components/MobilePayment';

import AddDelivery from './components/CreateDeliveryComponent';
import ListDelivery from './components/ListDeliveryComponent';
import ViewDelivery from './components/ViewDeliveryByIdComponent';
import SelectDelivery from './components/SelectDeliveryOption';
function App() {
  return (
    <div>
      <Router>
        
          <HeaderComponent />
          
         
            <switch>
            <Route path = "/" exact component = {IndexPageComponent}></Route>
            <Route path = "/seller/:id" exact component = {SellerDashboard}></Route>
            <Route path = "/addItem/:id" exact component = {SellerAddItem}></Route>
            <Route path = "/updateItem/:id/:sellerid" exact component = {updateItem}></Route>
            <Route path = "/login" component = {LoginComponent}></Route>
            <Route path = "/Signup" component = {SignupComponent}></Route>
            
            </switch>
          
          <div className="container">
          <switch>
          
          <Route path = "/buyerdashboard" component = {BuyerDashboard}></Route>
            <Route path = "/OrderDetails" component = {ListOrdersComponent}></Route>
            <Route path = "/OrderDetails2/:id" component = {ListOrdersComponent2}></Route>
            <Route path = "/ItemDetails" component = {ViewItemsBuyer}></Route>
            <Route path = "/AddOrder/:id" component = {AddOrderComponent}></Route>
            <Route path = "/otppage" component = {otppage}></Route>
            <Route path = "/Payment" component = {PaymentComponent}></Route>
            <Route path = "/Mobile" component = {MobilePayment}></Route>
            <Route path = "/AddDelivery" component = {AddDelivery}></Route>
            <Route path = "/ListDelivery" component = {ListDelivery}></Route>
            <Route path = "/ViewDelivery" component = {ViewDelivery}></Route>
            <Route path = "/Option" component = {SelectDelivery}></Route>
          </switch>
          </div>
          <FooterComponent/>
        
      </Router>
    </div>
    
    

   
  );
}

export default App;

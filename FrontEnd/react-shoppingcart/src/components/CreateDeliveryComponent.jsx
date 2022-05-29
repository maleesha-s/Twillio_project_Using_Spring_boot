import React, { Component } from 'react';
import ShoppingCartServices from '../services/ShoppingCartServices';
import logo from '../images/logo.png'

class CreateDeliveryComponent extends Component {

    constructor(props){
        super(props)
    
        this.state = {
            orderId: '',
            customerId: '',
            deliveryAddress: ''
        }

        this.changeDeliveryAddressHandler= this.changeDeliveryAddressHandler.bind(this);
        this.changeCustomerIdHandler= this.changeCustomerIdHandler.bind(this);
        this.changeOrderIdHandler= this.changeOrderIdHandler.bind(this);
        this.saveDelivery = this.saveDelivery.bind(this);

    }
    //CREATE NEW DELIVERYI
    saveDelivery = (e) => {
        e.preventDefault();

        let delivery = {orderId: this.state.orderId, customerId: this.state.customerId, deliveryAddress: this.state.deliveryAddress};
        console.log('delivery => ' + JSON.stringify(delivery));

        ShoppingCartServices.AddDeliveryDetails(delivery).then(res =>{   
            this.props.history.push('/buyerdashboard');
        });
    } 
    //GO BACK TO BUYER DASHBOARD
    cancel(){
        this.props.history.push('/buyerdashboard');
    }

    changeOrderIdHandler = (event)=> {
        this.setState({orderId: event.target.value});
    }

    changeCustomerIdHandler = (event)=> {
        this.setState({customerId: event.target.value});
    }

    changeDeliveryAddressHandler = (event)=>{
        this.setState({deliveryAddress: event.target.value});
    }

    render() {
        return (
            <body>
                
            
            <div className="container">
                <div className="header">
                        <div className="menubar">
                            <nav className="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
                                <a className="navbar-brand mt-2" href="/"><img src={logo} alt="" /></a>
                                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarNav">
                                            <ul className="navbar-nav ml-auto">
                                            
                                            <li className="nav-item">
                                                <div className="nav-link disabled ml-5 mr-5"></div>
                                            </li>
                                            <li className="nav-item">
                                                <div className="nav-link disabled ml-5 mr-5"></div>
                                            </li>
                                            <li className="nav-item">
                                                <div className="nav-link disabled ml-5 mr-5"></div>
                                            </li>
                                            <li className="nav-item">
                                                <div className="nav-link disabled ml-5 mr-5"></div>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/">HOME</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/ListDelivery">DELIVERY</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/login">LOG OUT</a>
                                            </li>
                                
                                            </ul>
                                        </div>
                            </nav>
                        </div>
                    </div>
            </div>
            
            <div className="container mt-5">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center"> New Delivery</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Order Id</label>
                                    <input className="form-control" placeholder="order Id" name="orderId"
                                     value = {this.state.orderId} onChange={this.changeOrderIdHandler}/>                                    
                                </div>

                                <div className="form-group">
                                    <label>Customer Id</label>
                                    <input className="form-control" placeholder="customerId" name="customerId"
                                     value={this.state.customerId} onChange={this.changeCustomerIdHandler}/>                                    
                                </div>

                                <div className="form-group">
                                    <label>Shipping Address</label>
                                    <input className="form-control"  placeholder="Shipping addess" name="deliveryAddress"
                                     value={this.state.deliveryAddress} onChange={this.changeDeliveryAddressHandler}/>                                    
                                </div>

                                 <button className="btn btn-success" onClick={this.saveDelivery}>Save</button>
                                 <button className="btn btn-danger"  onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </body>
        );
    }
}

export default CreateDeliveryComponent;


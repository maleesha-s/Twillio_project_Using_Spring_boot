import React, { Component } from 'react';
import ShoppingCartServices from '../services/ShoppingCartServices';
import logo from '../images/logo.png';

class ListDeliveryComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            deliveries: []
        }
        
        this.addDelivery = this.addDelivery.bind(this);
    }
    //SEND DELIVERY ID TO VIWE MORE PAGE
    viewDelivery(id){
        this.props.history.push(`/ViewDelivery/${id}`);
    }
    //GET ALL THE DELIVERY DATA FROM DATABASE
    componentDidMount(){
        ShoppingCartServices.getDeliveryList().then((response)=> {this.setState({ deliveries: response.data });});
    }
    //DIRECT TO ADD NEW DELIVERY PAGE
    addDelivery(){
        this.props.history.push('/AddDelivery');
    }

    render() {
        return (
            <div>
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
                <h2 className="text-center mt-5">Delivery List</h2>

                <div className="row">
                    <button className="btn btn-primary" onClick={ this.addDelivery }>New Delivery</button>
                </div>

                 <div className="row">
                     <table className="table table-striped table-bordered">
                         <thead>
                             <tr>                            
                                 <th>Order Id</th>
                                 <th>Customer Id</th>
                                 <th>Delivery Address</th>
                                 <th>Action</th>
                             </tr>
                         </thead>
                         <tbody>
                             {
                                 this.state.deliveries.map(
                                     delivery => 
                                     <tr key = {delivery.id}>
                                         <td>{delivery.orderId}</td>
                                         <td>{delivery.customerId}</td>
                                         <td>{delivery.deliveryAddress}</td>
                                         <td>
                                             <button className="btn btn-info" onClick={()=> this.viewDelivery(delivery.id)}>Confirm Deliver</button>
                                         </td>
                                     </tr>
                                 )
                             }
                         </tbody>
                     </table>
                 </div>
            </div>
        );
    }
}

export default ListDeliveryComponent;
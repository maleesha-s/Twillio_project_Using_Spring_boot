import React, { Component } from 'react';
import ShoppingCartService from '../services/ShoppingCartServices';
import orderImage from '../images/orderprocess.png';
import shopping from '../images/shopping.gif';

class ListOrdersComponent extends Component {
    constructor(props){
        super(props)
            this.state = {
                shoppingcarts: []
            }
    }
    //GET ALL ORER DATA FROM DATABASE
    componentDidMount(){
        ShoppingCartService.getOrders().then((res) => {
            this.setState({ shoppingcarts: res.data});
        });
    }
    //DELETE ORDER DETAILS
    delete(id){
        ShoppingCartService.deleteOrderById(id).then(res=>{
            this.setState({shoppingcarts : this.state.shoppingcarts.filter(shoppingcart => shoppingcart.id !==id)});
        });
    }
    render() {
        return (
            <div>
                 <div className="header">
                        <div className="menubar">
                        <nav className="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
                                    <a className="navbar-brand" href="/">SELLER DASHBOARD</a>
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
                                            <a className="nav-link" href="/login">LOG OUT</a>
                                        </li>
                            
                                        </ul>
                                    </div>
                                    </nav>
                        </div>
                    </div>
                 <br/>
                <br/>
                <img src={shopping} alt="cur" className="img-responsive" height={400} width={1050}/>
                <br/><br/>
                <h2 className="text-center">Order Details</h2>
                <br/>
                <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Order ID</th>
                                    <th> Customer ID</th>
                                    <th> Items ID</th>
                                    <th> Quantity</th>
                                    <th> Price</th>
                                    <th> Total Price</th>
                                    <th> Actions</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.shoppingcarts.map(
                                        shoppingcart => 
                                        <tr key = {shoppingcart.id}>
                                            <td>{shoppingcart.id}</td>
                                             <td> {shoppingcart.customerID} </td>   
                                             <td> {shoppingcart.itemIDS}</td>
                                             <td> {shoppingcart.quantity}</td>
                                             <td> {shoppingcart.price}</td>
                                             <td> {shoppingcart.totalAmount}</td>
                                             <td>
                                             <button style={{marginLeft: "10px"}}  className="btn btn-success">Update</button>
                                             <button style={{marginLeft: "10px"}}  className="btn btn-danger"onClick={ () => this.delete(shoppingcart.id)}>Delete </button>
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

export default ListOrdersComponent;
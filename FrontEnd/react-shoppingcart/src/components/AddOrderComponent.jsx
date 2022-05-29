import React, { Component } from 'react';
import ShoppingCartServices from '../services/ShoppingCartServices';
import logo from '../images/logo.png';


class AddOrderComponent extends Component {
    constructor(props){
        super(props)
            this.state = {
                customerID: '',
                itemIDS: this.props.match.params.id,
                price: '',
                quantity: '',
                totalAmount: ''
                

            }
            this.changecustomerIDHandler = this.changecustomerIDHandler.bind(this);
            this.changeitemIDSHandler = this.changeitemIDSHandler.bind(this);
            this.changepriceHandler = this.changepriceHandler.bind(this);
            this.changequantityHandler = this.changequantityHandler.bind(this);
            this.changeTotalHandler = this.changeTotalHandler.bind(this);
            this.saveOrUpdateOrder = this.saveOrUpdateOrder.bind(this);

    }
    //GET ITEM ID AND PRINCE
    componentDidMount(){
        
        ShoppingCartServices.getItemById(this.state.itemIDS).then((res)=>{
            let item =res.data;
            this.setState({itemIDS: item.id,
               price: item.price
            
            });
        })
    }
    //SAVE OR ORDER DETAILS
    saveOrUpdateOrder = (e) =>{
        e.preventDefault();
        let shoppingcart = {customerID:this.state.customerID, itemIDS: this.state.itemIDS, price: this.state.price, quantity: this.state.quantity, totalAmount: this.state.totalAmount};
        console.log('shoppingcart => ' + JSON.stringify(shoppingcart));
        ShoppingCartServices.createOrder(shoppingcart).then(res =>{
            this.props.history.push('/Payment');
        });
    }
    changecustomerIDHandler = (event) => {
        this.setState({customerID: event.target.value});
    }
    changeitemIDSHandler = (event) => {
        this.setState({itemIDS: event.target.value});
    }
    changepriceHandler = (event) => {
        this.setState({price: event.target.value});
    }
    changequantityHandler = (event) => {
        this.setState({quantity: event.target.value});
    }
    changeTotalHandler = (event) => {
        this.setState({totalAmount: event.target.value});
    }
    

    cancel(){
        this.props.history.push('/buyerdashboard');
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
                 <br/>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    //this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        
                                        <div className = "form-group">
                                            <label> Customer ID </label>
                                            <input placeholder="Customer ID" name="customerID" className="form-control" 
                                                value={this.state.customerID} onChange={this.changecustomerIDHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Item ID </label>
                                            <input placeholder="Item ID " name="itemIDS" className="form-control" 
                                                value={this.state.itemIDS} onChange={this.changeitemIDSHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Item Price </label>
                                            <input placeholder="Item Price" name="price" className="form-control" 
                                                value={this.state.price} onChange={this.changepriceHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Quantity </label>
                                            <input placeholder="Quantity" type="number" name="quantity" className="form-control" 
                                                value={this.state.quantity} onChange={this.changequantityHandler}/>
                                        </div>
                                
                                        <div className = "form-group">
                                            <label> Total Price </label>
                                            <input placeholder="Total Quantity" name="totalAmount" className="form-control" 
                                                value={this.state.totalAmount=this.state.quantity*this.state.price} onChange={this.changeTotalHandler}/>
                                        </div>
                                        

                                        <div className="row justify-content-center">
                                        <button className="btn btn-success btn-lg btn-block" onClick={this.saveOrUpdateOrder} style={{marginLeft: "10px"}}>Save</button>
                                        
                                        <button className="btn btn-danger btn-lg btn-block" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                   </div>
                                    <br/><br/><br/><br/><br/><br/>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        );
    }
}

export default AddOrderComponent;
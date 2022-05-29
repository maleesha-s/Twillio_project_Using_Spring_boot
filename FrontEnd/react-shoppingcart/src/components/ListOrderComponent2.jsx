import React, { Component } from 'react';
import ShoppingCartService from '../services/ShoppingCartServices';
import orderImage from '../images/orderprocess.png';
import shopping from '../images/shopping.gif';

class ListOrdersComponent2 extends Component {
    constructor(props){
        super(props)
            this.state = {
                id:this.props.match.params.id,
                name: '',
                description: '',
                availability: '',
                amount: '',
                seller_ID: ''
            }
            this.changeItemNameHandler = this.changeItemNameHandler.bind(this);
            this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
            this.changeAvailableHandler =this.changeAvailableHandler.bind(this);
            this.changeAmountHandler = this.changeAmountHandler.bind(this);
            this.changeSellerIDHandler = this.changeSellerIDHandler.bind(this);
            

    }
    //GET ALL THE ORDER DETAILS FOR SPECIFIC ITEM
    componentDidMount(){
        
        ShoppingCartService.getItemById(this.state.id).then((res)=>{
            let item =res.data;
            this.setState({name: item.name,
                decription: item.description,
                seller_ID: item.seller_ID,
                availability: item.availability,
                amount: item.price
             });
             console.log(this.state.seller_ID);
        })
    }
    changeItemNameHandler = (event) =>{
        this.setState({name: event.target.value});
    }
    changeDescriptionHandler = (event) =>{
        this.setState({decription: event.target.value});
    }
    changeAvailableHandler = (event) =>{
        this.setState({availability: event.target.value});
    }
    changeSellerIDHandler = (event) =>{
        this.setState({seller_ID: event.target.value});
    }
    changeAmountHandler = (event) =>{
        this.setState({amount: event.target.value});
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
            <br></br><br></br>
            
            
            <h2 className="text-center">Shopping Cart</h2>
            
            
            <br/>
            <div className="container mt-5">
                        <div className="row">
                            
                            <div className="col-12">
                               
                                <div className="justify-contend-center mb-5">
                                    <div className="row">
                                    <div className="col-md-2"></div>
                                    <div className="col-md-8">
                                    <form className="form-container">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="form-group">
                                                            <label>Item name</label>
                                                            <input placeholder="Item name" name="name" className="form-control"
                                                            value={this.state.name} onChange={this.changeItemNameHandler} disabled/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="form-group">
                                                                <label>Description</label>
                                                                <input placeholder="Description" name="decription" className="form-control"
                                                                value={this.state.decription} onChange={this.changeDescriptionHandler} disabled/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="form-group">
                                                                <label>Available Qty.</label>
                                                                <input placeholder="qty" name="availability" className="form-control"
                                                                value={this.state.availability} onChange={this.changeAvailableHandler} disabled/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="form-group">
                                                                <label>Amount Rs.</label>
                                                                <input placeholder="Amount" name="amount" className="form-control"
                                                                value={this.state.amount} onChange={this.changeAmountHandler} disabled/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="form-group">
                                                                <label>Seller ID</label>
                                                                <input placeholder="Price" name="seller_ID" className="form-control"
                                                                value={this.state.seller_ID} onChange={this.changeSellerIDHandler} disabled/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                        </div>
                                        <div className="col-md-3"></div>
                                        </div>
                                    </div> 
                            </div>                     
                        </div>
           </div>

        </div>
        );
    }
}

export default ListOrdersComponent2;
import React, { Component } from 'react';
import ShoppingCartService from '../services/ShoppingCartServices';
import orderImage from '../images/orderprocess.png';
import shop from '../images/cart.jpg';
import images from '../images/user2.jpg';
import phone from '../images/phone.jpg'
import shoes from '../images/shoes.jpg'
import watch from '../images/watch.png'
import logo from '../images/logo.png';

class ViewItemsBuyer extends Component {
    constructor(props){
        super(props)
            this.state = {
                items: []
            }
            this.addOrder = this.addOrder.bind(this);
            this.buyItem = this.buyItem.bind(this);
    }
    //GET ALL DETAILS 
    componentDidMount(){
        ShoppingCartService.getItems1().then((res) => {
            this.setState({ items: res.data});
        });
    }

    addOrder(){
        this.props.history.push('/AddOrder');
    }
    buyItem(id){
        this.props.history.push('/AddOrder/'+ id);
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
                <br></br><br></br>
                <div className="row">
                
                <div className="col-lg-4 col-md-4 col-xs-4 thumb">
                            <a className="thumbnail" href="/OrderDetails">
                            <button type="button" class="btn btn-warning">Buy It Now!</button>
                            <br/><br/>
                                <img className="img-responsive" src={phone} height={300} width={300} alt=""/>
                                
                                
                             </a>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xs-4 thumb">
                        <a className="thumbnail" href="#">
                        <button type="button" class="btn btn-warning">Buy It Now!</button>
                        <br/><br/>
                            <img className="img-responsive" src={watch} height={300} width={300} alt=""/>
                            
                            
                        </a>
                    </div>
                    
                    <div className="col-lg-4 col-md-4 col-xs-4 thumb">
                        <a className="thumbnail" href="#">
                        <button type="button" class="btn btn-warning">Buy It Now!</button>
                        <br/><br/>
                        <img className="img-responsive" src={shoes} height={300} width={300} alt=""/>
                        
                       
                        
                        </a>
                    </div>
                </div>
                <br/>
                
                <h2 className="text-center">Shopping Cart</h2>
                
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addOrder}>Order Item</button>
                    <br/>

                </div>
                <br/>
                <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Item ID</th>
                                    <th> Item Name</th>
                                    <th> Description</th>
                                    <th> Price</th>
                                    <th> No:of available items</th>
                                    <th> Seller ID</th>
                                    <th>Action</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.items.map(
                                        item => 
                                        <tr key = {item.id}>
                                            <td>{item.id}</td>
                                             <td> {item.name} </td>   
                                             <td> {item.description}</td>
                                             <td> {item.price}</td>
                                             <td> {item.availability}</td>
                                             <td> {item.seller_ID}</td>
                                             <td>
                                             <button style={{marginLeft: "10px"}}  className="btn btn-warning" onClick={ () => this.buyItem(item.id)}>Buy It Now</button>
                                             <button style={{marginLeft: "10px"}}  className="btn btn-warning" onClick={ () => this.buyItem(item.id)}>Add To Cart</button>
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

export default ViewItemsBuyer;
import React, { Component } from 'react';
import banner from '../images/benner2.jpg';
import orderImage from '../images/Order.jpg';
import sale from '../images/sale.jpg';
import order from '../images/order1.jpg';
import shop from '../images/cart.jpg';
import images from '../images/user2.jpg';
import ShoppingCartServices from '../services/ShoppingCartServices';
import logo from '../images/logo.png';
class BuyerDashboard extends Component {
    constructor(props){
        super(props)
           this.state = {
                /*name:'',
                description: '',
                price: '',
                availability: '',
                seller_ID: ''*/

           }
           this.changeitemNameHandler = this.changeitemNameHandler.bind(this);
           this.itemPage = this.itemPage.bind(this);

    }
    changeitemNameHandler= (event) =>{
        this.setState({name: event.target.value});
    }
    //GET SERACH ITEM NAME AND SERCH ACCORDING TO THEIR NAME
    itemPage = (e) =>{
        e.preventDefault();
        this.componentDidMount();
        let item = {name: this.state.name};
        console.log('item => ' + JSON.stringify(item));
    }
    //GET ITEM IT ACCORDING TO SPRCIFIC ITEM
    componentDidMount(){
        ShoppingCartServices.getItemByItemName(this.state.name).then((res)=>{
            let item =res.data;
            this.setState({id: item.id});
            this.sendid(this.state.id);
        });
    }
    //SEND ITEM ID TO SPECIFIC PAGE
    sendid(id){
        
            this.props.history.push('/OrderDetails2/' + id);
        
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
               <nav className="navbar navbar-light bg-light justify-content-between">
                    <a className="navbar-brand">Buyer Dashboard</a>
                <form className="form-inline">
                    <input placeholder="Search Item " name="itemName" className="form-control" 
                                                value={this.state.name} onChange={this.changeitemNameHandler}/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit"onClick={this.itemPage}>Search</button>
                </form>
                </nav>
                <br/>
                
                <img src={banner} alt="cur" className="img-responsive" height={350} width={1050}/>
                <br/><br/>
                <h5 className="text-left">Explore Popular Categories</h5>
               
                <div className="row">
                
                <div className="col-lg-4 col-md-4 col-xs-4 thumb">
                            <a className="thumbnail" href="/ItemDetails">
                            <button type="button" class="btn btn-danger">Order Now!</button>
                            <br/><br/>
                                <img className="img-responsive" src={shop} height={300} width={300} alt=""/>
                                
                                
                             </a>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xs-4 thumb">
                        <a className="thumbnail" href="/OrderDetails">
                        <button type="button" class="btn btn-warning">View Ongoing Orders!</button>
                        <br/><br/>
                            <img className="img-responsive" src={orderImage} height={300} width={300} alt=""/>
                            
                            
                        </a>
                    </div>
                    
                    <div className="col-lg-4 col-md-4 col-xs-4 thumb">
                        <a className="thumbnail" href="#">
                        <button type="button" class="btn btn-primary">View Profile!</button>
                        <br/><br/>
                        <img className="img-responsive" src={images} height={300} width={300} alt=""/>
                        
                       <br/> <br/>
                        
                        </a>
                    </div>
                </div>
            
            </div>
            
           
        );
    }
}

export default BuyerDashboard;
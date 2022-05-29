import React, { Component } from 'react';
import ShoppingCartServices from '../services/ShoppingCartServices';
import edit from '../images/edit.svg'
import logo from '../images/logo.png'

class updateitemcomponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            sellerid: this.props.match.params.sellerid,
            id: this.props.match.params.id,
            itemname: '',
            decription: '',
            price: '',
            availability: ''
        }

        this.changeItemNameHandler = this.changeItemNameHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeAvailableHandler =this.changeAvailableHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.updateitem = this.updateitem.bind(this);
        
        this.cancle = this.cancle.bind(this);
    }
    //GET ALL THE DATE FROM DATABASE ACCCORDING TO ITEM ID
    componentDidMount(){
        ShoppingCartServices.getItemByID(this.state.id).then((res)=>{
            let item =res.data;
            this.setState({itemname: item.name,
                decription: item.description,
                price: item.price,
                availability: item.availability
            });
        })
    }
    //UPADATE ITEM DETAILS
    updateitem = (e) =>{
        e.preventDefault();
        let item = {name: this.state.itemname,description: this.state.decription,price: this.state.price,availability: this.state.availability};
        console.log('item => ' + JSON.stringify(item));

        ShoppingCartServices.updateitem(item, this.state.id).then(res => {
            this.props.history.push('/seller/' + this.state.sellerid);
       })
       
    }
    //GO BACK TO SELLER DASHBOARD
    cancle(){
        this.props.history.push('/seller/' + this.state.sellerid);
    }
    changeItemNameHandler = (event) =>{
        this.setState({itemname: event.target.value});
    }
    changeDescriptionHandler = (event) =>{
        this.setState({decription: event.target.value});
    }
    changeAvailableHandler = (event) =>{
        this.setState({availability: event.target.value});
    }
    changePriceHandler = (event) =>{
        this.setState({price: event.target.value});
    }
    
    render() {
        return (

            <body>
                <div className="container-fluid">
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
                                            <a className="nav-link active" href="/">HOME</a>
                                        </li>
                            
                                        <li className="nav-item">
                                            <a className="nav-link" href="/login">LOG IN</a>
                                        </li>
                            
                                        </ul>
                                    </div>
                                    </nav>
                        </div>
                    </div>
                </div>
                    <div className="container mt-5">
                            <div className="row">
                                
                                <div className="col-xl-7">
                                    <h1 className="text-center mt-4 font-weight-bold font-italic text-primary">UPDATE ITEM</h1>
                                    <div className="justify-contend-center mt-5">
                                        <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8">
                                        <form className="form-container">
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <div className="form-group">
                                                                <label>Item name</label>
                                                                <input placeholder="Item name" name="itemname" className="form-control"
                                                                value={this.state.itemname} onChange={this.changeItemNameHandler}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <div className="form-group">
                                                                    <label>Description</label>
                                                                    <input placeholder="Description" name="decription" className="form-control"
                                                                    value={this.state.decription} onChange={this.changeDescriptionHandler}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <div className="form-group">
                                                                    <label>Available Qty.</label>
                                                                    <input placeholder="qty" name="availability" className="form-control"
                                                                    value={this.state.availability} onChange={this.changeAvailableHandler}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <div className="form-group">
                                                                    <label>Price Rs.</label>
                                                                    <input placeholder="Price" name="price" className="form-control"
                                                                    value={this.state.price} onChange={this.changePriceHandler}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row justify-content-center">
                                                            
                                                            <div className="col-md-6 mt-3">
                                                                <button className="btn btn-success btn-block" onClick={this.updateitem}>Update Item</button>
                                                            </div>
                                                            
                                                            <div className="col-md-6 mt-3">
                                                            <button className="btn btn-danger btn-block" onClick={this.cancle}>cancle</button> 
                                                            </div>
                                                            
                                                        </div>
                                                    </form>
                                            </div>
                                            <div className="col-md-3"></div>
                                            </div>
                                        </div> 
                                </div>
                                <div className="col-xl-5 mt-5 pho2">
                                    <img src={edit} className="photoedit mt-5" alt=""/>
                                </div>                        
                            </div>
               </div>

               
                
            </body>
        );
    }
}

export default updateitemcomponent;
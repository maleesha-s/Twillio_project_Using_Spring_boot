import React, { Component } from 'react';
import ShoppingCartServices from '../services/ShoppingCartServices';
import logo from '../images/logo.png'

class SellerDashComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            sellerid:this.props.match.params.id,
            items: []
        }
        this.additem = this.additem.bind(this);
        this.edititem = this.edititem.bind(this);
    }
    //GET ALL THE DETAILS ACCORDING TO THEIR SELLER ID
    componentDidMount(){
        ShoppingCartServices.getitemsbyseller(this.state.sellerid).then((res)=>{
            this.setState({ items:res.data });
        });
    }
    //DIRECT TO ADD ITEM PAGE WITH SELLER ID
    additem(){
        this.props.history.push('/addItem/' + this.state.sellerid);
    }
    //DIRECT TO EDIT ITEM PAGE WITH SELLER ID AND ITEM ID
    edititem(id){
        this.props.history.push('/updateItem/'+ id + '/' + this.state.sellerid);
    }
    //DELETE SPECIFIC ITEM USING THEIR ID
    delete(id){
        ShoppingCartServices.deleteitem(id).then(res=>{
           this.setState({items : this.state.items.filter(item => item.id !==id)});
        });
        
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
                                            <div className="nav-link mr-5 addbutton text-center" type="button" onClick={this.additem} >ADD ITEM</div>
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
                    <div className="container mt-5 mb-5">
                        <div className="row">
                            <div className="col-md-9"></div>
                            <div className="col-md-3">
                                
                            </div>
                        </div>
                    </div>
                    </div>
                    
                    <div className="container">
                            <div className="row">
                                        {
                                        this.state.items.map(
                                            items =>
                                            <div className="col-md-4">
                                                    <div className="card mt-3 sellercard">
                                                        <div className="product text-center mt-3">
                                                                <h5>{items.name}</h5>
                                                                <div className="mt-3 info">
                                                                    <span class="text1 d-block mb-3">{items.description}</span>
                                                                    <span class="text1 ">Qty.{items.availability} </span>
                                                                </div>
                                                                <div className="cost mt-3 text-dark">
                                                                    <span>Rs.{items.price}</span>
                                                                </div>
                                                        </div>
                                                        <div className="row mt-2">
                                                            <div className="col-md-6">
                                                                <div className="p-3 text-center text-white mt-2 cursor">
                                                                <button className="btn btn-success btn-block" onClick={ () => this.edititem(items.id)}>Edit Item</button> <br/>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="p-3 text-center text-white mt-2 cursor">
                                                                <button className="btn btn-danger" onClick={ () => this.delete(items.id)} >Delete Item</button> <br/>
                                                                </div>
                                                            </div>
                                                        </div>
                                            
                                                </div>
                                            </div>
                                        
                                                )
                                            }
                            </div>
                    </div>

                    
            </body>
        );
    }
}

export default SellerDashComponent;
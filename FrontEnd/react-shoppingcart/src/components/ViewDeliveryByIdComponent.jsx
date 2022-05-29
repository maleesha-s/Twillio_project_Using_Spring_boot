import React, { Component } from 'react';
import ShoppingCartServices from '../services/ShoppingCartServices';
import logo from '../images/logo.png';

class ViewDeliveryByIdComponent extends Component {

    constructor(props){
        super(props)
    
        this.state = {
            id: this.props.match.params.id,
            delivery: {}
        }
    }
    //VIEW ALL THE DELIVERY DATA ACCORDING ID
    componentDidMount(){
        ShoppingCartServices.viewDeliveryById(this.state.id).then(res=> {
            this.setState({ delivery: res.data });
        })
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
                <div className="card col-md-6 offset-md-3 mt-5">
                    <h3 className="text-center">Confirmation</h3>
                        <div className="card-body">
                            <div className="row">
                                <label>The deliver has been confirmed!</label>                        
                            </div>                
                        </div>
                    
                </div>
                <a href="/ListDelivery" className="btn btn-primary"> Back to Delivery list</a>
            </div>
        );
    }
}



export default ViewDeliveryByIdComponent;
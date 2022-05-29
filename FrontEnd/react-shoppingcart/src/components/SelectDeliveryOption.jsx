import React, { Component } from 'react';
import delivery from '../images/delivery.gif';
import logo from '../images/logo.png';

class SelectDeliveryOption extends Component {
    constructor(props){
        super(props)

        this.state = {
           
        }
    }
    //DIRECT TO ADD DELIVERY DETAILS PAGE
    delivery(){
        this.props.history.push('/AddDelivery');
    }
    cancel(){
        this.props.history.push('/buyerdashboard');
    }
    render() {
        return (
            <div>
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
               <br/><br/><br/><br/><br/>

                    <div className="container">
                   
    <br/>
    <div className="row justify-content-center">
    <img className="img-responsive" src={delivery} height={400} width={1100} alt=""/>
    <br/>
        <div className="col-xs-12 col-md-4 col-md-offset-4">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <div className="row">
                               
                                <button className="btn btn-warning btn-lg btn-block mt-5" onClick={this.delivery.bind(this)}>Do you want to deliver?  </button> 
                                
                                <button className="btn btn-danger btn-lg btn-block mt-3" onClick={this.cancel.bind(this)}>Cancel </button> 
                                
                                
                   </div>
                   
                   </div>
                  
                   </div>         
               </div>
               </div>
               
               </div>
              
               
            </body>
            <br/><br/><br/><br/><br/>
            </div>
        );
    }
}

export default SelectDeliveryOption;
import React, { Component } from 'react';
import logo from '../images/logo.png';

class Otpcomponent extends Component {
    constructor(props){
        super(props)
            this.state = {
                otp: '',
                paymentid: ''
                
            }
            this.changeotpHandler = this.changeotpHandler.bind(this);
            this.changepaymentidHandler =this.changepaymentidHandler.bind(this);
            this.submit =this.submit.bind(this);
    }
    changeotpHandler = (event) =>{
        this.setState({otp: event.target.value});
    }
    changepaymentidHandler = (event) =>{
        this.setState({paymentid: event.target.value});
    }
    
    submit(){
        this.props.history.push('./buyerdashboard');
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

                    <h2 className="text-center mt-5">Confirm Transtraction</h2>

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
                                                        <div className="form-group text-center">
                                                        <label>Payment ID</label>
                                                        <input placeholder="Item name" placeholder="Payment ID" name="paymentid" className="form-control"
                                                        value={this.state.paymentid} onChange={this.changepaymentidHandler} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="form-group text-center">
                                                        <label>OTP</label>
                                                        <input placeholder="Item name" placeholder="OTP code" name="OTP" className="form-control"
                                                        value={this.state.otp} onChange={this.changeotpHandler} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                    </div>
                                    <div className="col-md-3"></div>
                                    </div>
                                </div> 
                                <div className="row mt-4">
                                                    <div className="col-md-3"></div>
                                                    <div className="col-md-6">
                                                        <button className="btn btn-success btn-block" onClick={this.submit}>Submit</button>
                                                    </div>
                                                    <div className="col-md-3"></div>
                                            </div>
                        </div>                     
                    </div>
                    
       </div>
       </body>
        );
    }
}

export default Otpcomponent;
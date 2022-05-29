import React, { Component } from 'react';
import mobile from '../images/mobile.jpg'
import ShoppingCartServices from '../services/ShoppingCartServices';
import logo from '../images/logo.png';

class MobilePayment extends Component {
    constructor(props){
        super(props)
           this.state = {
            mobileNumber: '',
            amount: ''

           }
           this.changenumberhander = this.changenumberhander.bind(this);
           this.changeamounthander = this.changeamounthander.bind(this);

    }
    //ADD NEW MOBILE PAYMENT
    saveMobilePayment = (e) =>{
        e.preventDefault();
        let mobilePayment = {mobileNumber: this.state.mobileNumber, amount: this.state.amount};
        console.log('mobilePayment => ' + JSON.stringify(mobilePayment));
        ShoppingCartServices.addMobilePayment(mobilePayment);
            this.sendPage();
    }
    //DIRECT TO ANOTHER PAGE 
    sendPage(){
        this.props.history.push('/otppage');
    }
    cancel(){
        this.props.history.push('/buyerdashboard');
    }
    changenumberhander = (event) => {
        this.setState({mobileNumber: event.target.value});
    }
    changeamounthander = (event) => {
        this.setState({amount: event.target.value});
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
               <div className="container">
               <div className="row">
                   <div className="row"></div>
                <div className="col-md-4 mt-5 pho">
                    <img src={mobile} className="bg2 mt-5" alt=""/>
                </div>
                <div className="col-md-8">
                <h1 className="text-center mt-4 font-weight-bold font-italic text-primary">Mobile Payment</h1>
                <div className="justify-contend-center mt-5">
                    <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                    <form className="form-container">
                                    
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="font-weight-bold font-italic">Contact No:</label>
                                                <input placeholder="077-*******" name="number" className="form-control"
                                                 value={this.state.mobileNumber} onChange={this.changenumberhander}/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="font-weight-bold font-italic">Amount Rs.</label>
                                                <input placeholder="Amount Rs." type="number" name="amount" className="form-control"
                                                 value={this.state.amount} onChange={this.changeamounthander}/>
                                            </div>
                                        </div>
                                    
                        
                                    <div className="row justify-content-center">
                                        
                                        <div className="col-md-4 mt-3">
                                            <button className="btn btn-success btn-block" onClick={this.saveMobilePayment}>Pay Now</button>
                                        </div>
                                        
                                        <div className="col-md-4 mt-3">
                                        <button className="btn btn-danger btn-block" onClick={this.cancel}>CANCEL</button> 
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

               
                
            </body>
    
        );
    }
}

export default MobilePayment;
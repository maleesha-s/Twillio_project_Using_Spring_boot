import React, { Component } from 'react';
import ShoppingCartServices from '../services/ShoppingCartServices';
import logo from '../images/logo.png';


class PaymentComponent extends Component {
    constructor(props){
        super(props)
           this.state = {
            cardNumber: '',
            cardHolderName: '',
            expireDate: '',
            cvc: '', 
            amount: '', 
            email: '', 
            mobile: ''
           }
           this.changeCardNumberHandler = this.changeCardNumberHandler.bind(this);
            this.changeExpirationDateHandler = this.changeExpirationDateHandler.bind(this);
            this.changeCVCodeeHandler = this.changeCVCodeeHandler.bind(this);
            this.changeCardownerHandler = this.changeCardownerHandler.bind(this);
            this.changeEmailHandler = this.changeEmailHandler.bind(this);
            this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);
            this.changeAmountHandler = this.changeAmountHandler.bind(this);
            //this.changePaidDateHandler = this.changePaidDateHandler.bind(this);
            this.savePayment = this.savePayment.bind(this);
    }
    /*componentDidMount(){
        
        ShoppingCartServices.addPayment(this.state.id).then((res)=>{
            let payment =res.data;
            /*this.setState({: payment.id
            
            });
        })
    }*/
    //SAVE PAYEMENT DETAILS TO DATA BASE
    savePayment = (e) =>{
        e.preventDefault();
        let payment = {cardHolderName:this.state.cardHolderName, cardNumber: this.state.cardNumber, expireDate: this.state.expireDate, cvc: this.state.cvc, amount: this.state.amount, email: this.state.email, mobile: this.state.mobile};
        console.log('payment => ' + JSON.stringify(payment));
        ShoppingCartServices.addPayment(payment);
            this.sendPage();
    }
    sendPage(){
        this.props.history.push('/Option');
    }
    changeCardNumberHandler = (event) => {
        this.setState({cardNumber: event.target.value});
    }
    changeExpirationDateHandler = (event) => {
        this.setState({expireDate: event.target.value});
    }
    changeCVCodeeHandler = (event) => {
        this.setState({cvc: event.target.value});
    }
    changeCardownerHandler = (event) => {
        this.setState({cardHolderName: event.target.value});
    }
    changeEmailHandler = (event) => {
        this.setState({email: event.target.value});
    }
    changePhoneNumberHandler = (event) => {
        this.setState({mobile: event.target.value});
    }
    changeAmountHandler = (event) => {
        this.setState({amount: event.target.value});
    }
    /*changePaidDateHandler = (event) => {
        this.setState({paidDate: event.target.value});
    }*/

    addOtherItem(){
        this.props.history.push('/ItemDetails');
    }
    mobilePayment(){
        this.props.history.push('/Mobile');
    }
    render() {
        return (
            
            
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
                   
                <button className="btn btn-warning mt-5" onClick={this.addOtherItem.bind(this)}>Buy Another Item</button>
              <div className="page-header text-center">
              
                  <br/>
        <h1>Credit Card Payment Gateway</h1>
    </div>
    <br/><br/>
    <div className="container">
    
        <div className="row justify-content-center">
            <div className="col-xs-12 col-md-4 col-md-offset-4">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <div className="row">
                        
                            <br/>
                            <h3 className="text-center">Payment Details</h3>
                            <div className="inlineimage"> <img className="img-responsive images" src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Mastercard-Curved.png"/> <img className="img-responsive images" src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Discover-Curved.png"/> <img className="img-responsive images" src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Paypal-Curved.png"/> <img className="img-responsive images" src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/American-Express-Curved.png"/> </div>
                        </div>
                    </div>
                    <div className="panel-body">
                        <form role="form">
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="form-group"> <label>CARD NUMBER</label>
                                        <div className="input-group"> <input type="tel" name="cardNumber" className="form-control" placeholder="Valid Card Number" 
                                        value={this.state.cardNumber} onChange={this.changeCardNumberHandler} /> <span className="input-group-addon"><span className="fa fa-credit-card"></span></span> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="form-group"> 
                                        <label><span className="hidden-xs">EXPIRATION</span>
                                        <span className="visible-xs-inline">EXP</span> DATE</label> 
                                        <input type="tel" name="expireDate" className="form-control" placeholder="MM / YY" value={this.state.expireDate} onChange={this.changeExpirationDateHandler} /> </div>
                                </div>
                                <div className="col-xs-5 col-md-5 pull-right">
                                    <div className="form-group"> 
                                        <label>CV CODE</label>
                                        <input type="tel" name="cvc" className="form-control" placeholder="CVC"  value={this.state.cvc} onChange={this.changeCVCodeeHandler}/> 
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="form-group"> 
                                        <label>CARD OWNER</label> 
                                        <input type="text" name="cardHolderName" className="form-control" placeholder="Card Holder Name"  value={this.state.cardHolderName} onChange={this.changeCardownerHandler}/> 
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="form-group"> 
                                        <label>Email</label> 
                                        <input type="text" name="email" className="form-control" placeholder="Email" value={this.state.email} onChange={this.changeEmailHandler}/> 
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="form-group"> 
                                            <label>Phone Number</label>
                                            <input type="text" name="mobile" className="form-control" placeholder="Phone Number" value={this.state.mobile} onChange={this.changePhoneNumberHandler} /> 
                                        </div>
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="form-group"> 
                                        	<label>Amount(Rs.)</label> 
                                            <input type="text" name="amount" className="form-control" placeholder="Amount Rs." value={this.state.amount} onChange={this.changeAmountHandler}/> 
                                    </div>
                                </div>

                            </div>
                            
                        </form>
                    </div>
                    <br/>
                    <div className="panel-footer">
                        <div className="row justify-content-center">
                            <div className="col-xs-12"> <button className="btn btn-success btn-lg btn-block" onClick={this.savePayment}>Credit Card Payment</button>
                            <button className="btn btn-danger btn-lg btn-block" onClick={this.mobilePayment.bind(this)}>Mobile Payment  </button> 
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
        
    </div>  
    <br/> <br/>  <br/> <br/>   
            </div>
           
            
        );
    }
}

export default PaymentComponent;
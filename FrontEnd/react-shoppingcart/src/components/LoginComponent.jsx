import React, { Component } from 'react';
import ShoppingCartServices from '../services/ShoppingCartServices';
import background from '../images/signup.svg'
import logo from '../images/logo.png'


class LoginComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            email: '',
            password: '',
            id:'',
            type: ''
        }
        this.changeemailhander = this.changeemailhander.bind(this);
        this.changepasswordhander = this.changepasswordhander.bind(this);
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
    }
    changeemailhander= (event) =>{
        this.setState({email: event.target.value});
    }
    changepasswordhander = (event) =>{
        this.setState({password: event.target.value});
    }
    //LOGING METHOED
    login = (e) =>{
        e.preventDefault();
        this.componentDidMount();
        let user = {email: this.state.email};
        console.log('user => ' + JSON.stringify(user));
    }
    //GET USER DETAILS FROM DATABASE ACCORDING TO EMAIL AND PASSWORD
    componentDidMount(){
        ShoppingCartServices.loginuser(this.state.email,this.state.password).then((res)=>{
            let user =res.data;
            this.setState({id: user.id,type: user.type});
            this.sendid(this.state.id);
        });
    }
    //THEN DIRECT USER DASHBOARD ACCORDING TO THEIR USER TYPR
    sendid(id){
        if(id > 0 ){
            if(this.state.type === 'seller'){
                this.props.history.push('/seller/' + id);
            }else{
                this.props.history.push('/buyerdashboard');
            }
        }
    }

    signup(){
        this.props.history.push('/signup');
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
                                            <a className="nav-link" href="/login">LOG OUT</a>
                                        </li>
                            
                                        </ul>
                                    </div>
                                    </nav>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-7">
                                <h1 className="text-center mt-5 font-weight-bold font-italic text-primary">LOG IN</h1>
                                    <form className="form-container  mt-5">
                                            <div className="form-group">
                                                <label className="font-weight-bold font-italic">Email</label>
                                                <input placeholder="Email" name="email" className="form-control"
                                                value={this.state.email} onChange={this.changeemailhander}/>
                                            </div>
                                            <div className="form-group">
                                                <label className="font-weight-bold font-italic">Password</label>
                                                <input type="password" placeholder="Password"  name="password" className="form-control"
                                                value={this.state.password} onChange={this.changepasswordhander}/>
                                            </div>
                                            
                                            <div className="row mt-4">
                                                    <div className="col-md-3"></div>
                                                    <div className="col-md-6">
                                                        <button className="btn btn-success btn-block" onClick={this.login}>LOG IN</button>
                                                    </div>
                                                    <div className="col-md-3"></div>
                                            </div>
                                            <div className="row mt-4">
                                                    <div className="col-md-3"></div>
                                                    <div className="col-md-6">
                                                    <button className="btn btn-danger btn-block" onClick={this.signup}>SIGN UP</button> 
                                                    </div>
                                                    <div className="col-md-3"></div>
                                            </div>
                                    </form>
                                    
                        </div>
                        <div className="col-xl-5 text-center mt-5 pho1">
                        <img src={background} className="bg mt-5" alt=""/>
                        </div>
                        
                    </div>
                </div>
                
                
                
        </body>
        
        );
    }
}

 export default LoginComponent;
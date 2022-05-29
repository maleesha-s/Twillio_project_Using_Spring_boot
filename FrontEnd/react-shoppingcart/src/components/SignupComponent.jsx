import React, { Component } from 'react';
import signupimage from '../images/he.svg'
import ShoppingCartServices from '../services/ShoppingCartServices';
import logo from '../images/logo.png'

class signup extends Component {
   constructor(props){
       super(props)

       this.state= {
            firstname: '',
            lasttname: '',
            email: '',
            password: '',
            type: '',
            number: ''
       }

       this.changeFirstnamehander = this.changeFirstnamehander.bind(this);
       this.changelastnamehander = this.changelastnamehander.bind(this);
       this.changeemailhander = this.changeemailhander.bind(this);
       this.changepasswordhander = this.changepasswordhander.bind(this);
       this.changetypehander = this.changetypehander.bind(this);
       this.changenumberhander = this.changenumberhander.bind(this);
       this.adduser = this.adduser.bind(this);
       this.cancle = this.cancle.bind(this);
   }
   //ADD NEW USER ACCORDING TO INPUT DETAILS
   adduser = (e) => {
    e.preventDefault();
    let user = {firstname: this.state.firstname,lastname: this.state.lasttname,email: this.state.email,password: this.state.password,type: this.state.type,contactNo: this.state.number};
    console.log('user => ' + JSON.stringify(user));

    ShoppingCartServices.createuser(user).then(res=>{
        this.props.history.push('/login')
    })
    
        
   }
   cancle(){
        this.props.history.push('/login');
   }

   changeFirstnamehander = (event) =>{
    this.setState({firstname: event.target.value});
    }
    changelastnamehander = (event) =>{
        this.setState({lasttname: event.target.value});
    }
    changeemailhander= (event) =>{
        this.setState({email: event.target.value});
    }
    changepasswordhander = (event) =>{
        this.setState({password: event.target.value});
    }
    changetypehander = (event) =>{
        this.setState({type: event.target.value});
    }
    changenumberhander = (event) =>{
        this.setState({number: event.target.value});
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
                                            <a className="nav-link" href="/login">LOG IN</a>
                                        </li>
                            
                                        </ul>
                                    </div>
                                    </nav>
                        </div>
                    </div>
               <div className="row">
                   <div className="row"></div>
                <div className="col-md-4 mt-5 pho">
                    <img src={signupimage} className="bg2 mt-5" alt=""/>
                </div>
                <div className="col-md-8">
                <h1 className="text-center mt-4 font-weight-bold font-italic text-primary">SIGN UP</h1>
                <div className="justify-contend-center mt-5">
                    <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                    <form className="form-container">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="font-weight-bold font-italic">First Name</label>
                                                <input placeholder="First name" name="Firstname" className="form-control"
                                                 value={this.state.firstname} onChange={this.changeFirstnamehander} required/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="font-weight-bold font-italic">Last Name</label>
                                                <input placeholder="Last name" name="Lastname" className="form-control"
                                                 value={this.state.lasttname} onChange={this.changelastnamehander}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label className="font-weight-bold font-italic">Email</label>
                                                <input placeholder="Email" name="email" className="form-control"
                                                 value={this.state.email} onChange={this.changeemailhander}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label className="font-weight-bold font-italic">Password</label>
                                                <input type="password"  placeholder="Password" name="password" className="form-control"
                                                 value={this.state.password} onChange={this.changepasswordhander}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="font-weight-bold font-italic">type</label>
                                                <input placeholder="Seller/buyer" name="type" className="form-control"
                                                 value={this.state.type} onChange={this.changetypehander}/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="font-weight-bold font-italic">Contact No:</label>
                                                <input placeholder="077-*******" name="number" className="form-control"
                                                 value={this.state.number} onChange={this.changenumberhander}/>
                                            </div>
                                        </div>
                                    </div>
                        
                                    <div className="row justify-content-center">
                                        
                                        <div className="col-md-4 mt-3">
                                            <button className="btn btn-success btn-block" onClick={this.adduser}>SIGN UP</button>
                                        </div>
                                        
                                        <div className="col-md-4 mt-3">
                                        <button className="btn btn-danger btn-block" onClick={this.cancle}>CANCLE</button> 
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

export default signup;

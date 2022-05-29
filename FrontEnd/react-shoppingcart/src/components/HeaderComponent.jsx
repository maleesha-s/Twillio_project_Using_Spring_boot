import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props){
        super(props)
           this.state = {

           }
            
    }
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="/buyerdashboard" className="navbar-brand">Shopping Application</a></div>
                    <div><a href="/ItemDetails" className="navbar-brand">Shop Now</a></div>
                    <div><a href="/OrderDetails" className="navbar-brand">Orders</a></div>
                    <div><a href="" className="navbar-brand">Profile</a></div>
                    </nav>
                </header>
                
            </div>
        );
    }
}

export default HeaderComponent;
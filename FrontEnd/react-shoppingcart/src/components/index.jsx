import React, { Component } from 'react';
import ShoppingCartServices from '../services/ShoppingCartServices';
import img1 from '../images/buying.jpg'
import img2 from '../images/buysell.jpg'
import img3 from '../images/dilivery.jpg'
import logo from '../images/logo.png'

class AllItems extends Component {
    constructor(props){
        super(props)

        this.state = {
            items: []
        }
    }
    //GET ALL ITEM DATA FROM THE ITEM TABLE
    componentDidMount(){
        ShoppingCartServices.getItems().then((res)=>{
            this.setState({ items:res.data });
        });
    }
   

    render() {
        return (
            <body>
            
                    
                
            
            <div className="container-fluid ">

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
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col-md-9"></div>
                            <div className="col-md-3">
                                
                            </div>
                        </div>
                    </div>

            <div id="carouselExampleIndicators" class="carousel slide mt-2" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img class="d-block w-100" src={img1} alt="First slide"></img>
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>ONLINE BUYING</h5>
                                    <p>Buy Anything You Want</p>
                                </div>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src={img2} alt="Second slide"></img>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>ONLINE SELLING</h5>
                                <p>Sell Anything You Have</p>
                            </div>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src={img3} alt="Third slide"></img>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>ONLINE DELIVERY</h5>
                                <p>Get Your Item To Your DoorStep</p>
                            </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            </div>

            <div className="container indexcon mt-5">
                <div className="row text-center">
                    <div className="col-md-4 mt-5 mb-5 font-weight-bold font-italic text-dark">
                       
                                    <h5>ONLINE SELLING</h5>
                                    <p>Sell Anything You Have</p>
                        
                    </div>
                    <div className="col-md-4  mt-5 mb-5 font-weight-bold font-italic text-dark">
                        
                                <h5>ONLINE SELLING</h5>
                                <p>Sell Anything You Have</p>
                                               
                    </div>
                    <div className="col-md-4  mt-5 mb-5 font-weight-bold font-italic text-dark">
                         
                                <h5>ONLINE DELIVERY</h5>
                                <p>Get Your Item To Your DoorStep</p>
                         
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-5">
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
                                                            <div className="col-12">
                                                                <div className="p-3 text-center text-white mt-2 cursor">
                                                                <button className="btn btn-success btn-block" onClick={this.login}>BUY NOW</button> <br/>
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

export default AllItems;
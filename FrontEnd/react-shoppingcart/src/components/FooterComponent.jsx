import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(props){
        super(props)
            this.state = {
                
            }
    }
    render() {
        return (
            <div>
                
                <footer class="page-footer bg-primary mt-5">       
                    <div class="footer-copyright text-center py-3">
                        <p>&copy; Copyright</p>
                        <p>Designed by The Providers</p>
                    </div>
                    </footer>
            </div>
        );
    }
}

export default FooterComponent;
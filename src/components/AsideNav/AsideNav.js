import React, { Component } from 'react';
import { MDBNav, MDBNavItem } from "mdbreact";

class AsideNav extends Component {
    render() {
        return (
            <div className="col-md-4 col-lg-3 d-none d-sm-block navbar-container">
                <nav className="navbar navbar-expand-md">
                    <div className="collapse navbar-collapse" id="navbar">
                        <MDBNav className="flex-column">
                            <MDBNavItem>
                                <a href="#aboutMe">About me!</a>
                            </MDBNavItem>
                            <MDBNavItem>
                                <a href="#projects">Projects</a>
                            </MDBNavItem>
                            <MDBNavItem>
                                <a href="#docs">Docs</a>
                            </MDBNavItem>
                        </MDBNav>
                    </div>
                </nav>
            </div>
        );
    }
}

export default AsideNav;
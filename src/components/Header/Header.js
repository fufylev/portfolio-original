import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Header.module.css';

import { MDBCollapse, MDBIcon, MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBNavItem, MDBNavLink } from 'mdbreact';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onClick = () => {
        setIsOpen(!isOpen);
    };
    let location = useLocation();

    const bgPink = { backgroundColor: '#434343' };

    return (
        <div className={styles.wrapper} style={bgPink}>
            <header>
                <MDBNavbar style={bgPink} dark expand="md" scrolling fixed="top" className="container">
                    <MDBNavLink to="/">
                        <strong className={`text-white ${styles.brand}`}>
                            <MDBIcon fab icon="connectdevelop" className={styles.icons} />
                        </strong>
                    </MDBNavLink>
                    <MDBNavbarToggler onClick={onClick} />
                    <MDBCollapse isOpen={isOpen} navbar>
                        <MDBNavbarNav left>
                            <MDBNavItem className={location.pathname === '/' ? styles.activeLink : styles.link}>
                                <MDBNavLink to="/">Home</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem className={location.pathname === '/contacts' ? styles.activeLink : styles.link}>
                                <MDBNavLink to="/contacts">Contacts</MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                        <MDBNavbarNav right className="d-sm-flex flex-row">
                            <a
                                href="mailto: fufylev@gmail.com"
                                rel="noopener noreferrer"
                                target="_blank"
                                className={`text-white ${styles.icons}`}
                            >
                                <MDBIcon far icon="envelope" />
                            </a>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </header>
        </div>
    );
};
export default Header;

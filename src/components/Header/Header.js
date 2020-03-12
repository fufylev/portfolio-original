import React, { useState, } from "react";
import { useLocation } from "react-router-dom";
import styles from './Header.module.css';

import { MDBCollapse, MDBIcon, MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBNavItem, MDBNavLink } from 'mdbreact';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onClick = () => {
        setIsOpen(!isOpen);
    };
    let location = useLocation();

    const bgPink = {backgroundColor: '#434343'};

    return (
        <div className={styles.wrapper} style={bgPink}>
            <header>
                <MDBNavbar style={bgPink} dark expand="md" scrolling fixed="top" className='container'>
                    <MDBNavLink to='/'><strong className={`text-white ${styles.brand}`}>
                        <MDBIcon fab icon="connectdevelop" className={styles.icons}/>
                    </strong>
                    </MDBNavLink>
                    <MDBNavbarToggler onClick={onClick}/>
                    <MDBCollapse isOpen={isOpen} navbar>
                        <MDBNavbarNav left>
                            <MDBNavItem className={styles.link} active={location.pathname === '/'}>
                                <MDBNavLink to='/'>Home</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem className={styles.link} active={location.pathname === '/contacts'}>
                                <MDBNavLink to='/contacts'>Contacts</MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                        <MDBNavbarNav right className='d-sm-flex flex-row'>
                            {/*<a href='https://github.com/fufylev' target='_blank' rel="noopener noreferrer"
                           className={`text-white ${styles.icons}`}>
                            <MDBIcon fab icon="github-square"/>
                        </a>
                        <a href='https://www.linkedin.com/in/andreifufylev/' rel="noopener noreferrer" target='_blank'
                           className={`text-white ${styles.icons}`}>
                            <MDBIcon fab icon="linkedin"/>
                        </a>
                        <a href='https://www.instagram.com/andrey_fufylev/' rel="noopener noreferrer" target='_blank'
                           className={`text-white ${styles.icons}`}>
                            <MDBIcon fab icon="instagram"/>
                        </a>
                        <a href='mailto: fufylev@gmail.com' rel="noopener noreferrer" target='_blank'
                           className={`text-white ${styles.icons}`}>
                            <MDBIcon icon="at"/>
                        </a>*/}
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </header>
        </div>

    );
};
export default Header;
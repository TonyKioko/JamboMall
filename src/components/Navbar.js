import React, { Component } from 'react';
import {Link } from 'react-router-dom';
// import Logo from '../logo.svg';
import Logo2 from '../product-2.png';

import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark">
      <div className="container">
      <Link to="/" className="navbar-brand" >
      <img src={Logo2} style={{width:'60px',height:'60px'}} alt=""/>
      </Link>
      <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              JAMBOMALL
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
    <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus " />
            </span>
            my cart
    </ButtonContainer>
        
        </Link>
      
      </div>
      
      
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`

    background:var(--mainBlue);
    .nav-link {
        color:var(--mainWhite) !importtant;
        font-size:1.3rem;
        text-transfrom:capitalize;
    }

`;
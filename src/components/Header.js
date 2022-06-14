import React, { Component } from "react";
import styled from "styled-components";

export class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Container className="header-background">
          <div className="brand">
            <h3>{this.props.brand}</h3>
          </div>
          <input type="checkbox" name="" id="check" />
          <label for="check" className="hamburger">
            <i className="fa-solid fa-bars"></i>
          </label>

          <nav>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>About us</li>
              <li>Contact</li>
            </ul>
          </nav>
        </Container>
      </Wrapper>
    );
  }
}

export default Header;

const Wrapper = styled.div`
  background: #325ab8;
  height: 40px;
  display: flex;
  align-items: center;
`;

const Container = styled.header`
  margin: auto;
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

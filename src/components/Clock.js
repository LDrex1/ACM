import React, { Component } from "react";
import styled from "styled-components";

export class Clock extends Component {
  getTime() {
    const presentTime = new Date();
    return {
      hours: ("00" + presentTime.getHours()).slice(-2),
      minutes: ("00" + presentTime.getMinutes()).slice(-2),
      seconds: ("00" + presentTime.getSeconds()).slice(-2),
    };
  }

  constructor(props) {
    super(props);
    this.state = this.getTime();
    console.log(this.state);
  }

  componentDidMount() {
    this.SetMyTime();
  }

  SetMyTime() {
    this.timeout = setTimeout(this.updateTime.bind(this), 1000);
  }

  updateTime() {
    this.setState(this.getTime, this.SetMyTime);
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  render() {
    const { hours, minutes, seconds } = this.state;

    return (
      <Container>
        {hours}:{minutes}:{seconds}
      </Container>
    );
  }
}

export default Clock;

const Container = styled.div`
  font-size: 30px;
`;

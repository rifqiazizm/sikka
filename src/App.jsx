import React, { Component } from 'react';
import AdminLTE, { Sidebar, Content, Row, Col, Box, Button } from 'adminlte-2-react';

import './App.css';
import Home from './Home';
import { Modal } from 'react-bootstrap';


const { Item } = Sidebar;

class HelloWorld extends Component {
  state = {}

  render() {
    return (<Content title="Hello World" subTitle="Getting started with adminlte-2-react" browserTitle="Hello World">
      <Row>
        <Col xs={6}>
          <Box title="My first box" type="primary" closable collapsable footer={<Button type="danger" text="Danger Button" />}>
            Hello World
          </Box>
        </Col>
        <Col xs={6}>
          <Box title="Another box">
            Content goes here
          </Box>
        </Col>
      </Row>
    </Content>);
  }
}

class App extends Component {

  sidebar = [
    <Item key="hello" text="Hello" to="/app" />,
    <Item key="home" text="home" to="/home" />

  ]

  render() {
    return (
      <AdminLTE title={["Hello", "World"]} titleShort={["He", "we"]} theme="blue" sidebar={this.sidebar}>
        <HelloWorld path="/hello-world" />
        <Home path="/" />
      
      </AdminLTE>
    );
  }
}

export default App;
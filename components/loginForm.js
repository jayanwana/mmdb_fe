import React, { Component } from "react";
import Router from "next/router";
import { Form,  Row, Col, Button, Alert} from "react-bootstrap";
import MmDataService from '../utils/axios.service';
import AuthToken from '../utils/auth_token'


export default class LoginForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: ""
      }
      this.handleInputChange = this.handleInputChange.bind(this);
      this.submitForm = this.submitForm.bind(this);
    }
    handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
    [name]: value
    });
    }

    async submitForm(event) {
    // event.preventDefault()
    if (this.state.email && this.state.password) {
    const postData = {
      email: this.state.email,
      password: this.state.password
    }
    const headers = { headers: {
      "Content-type": "application/json"
    }}
    MmDataService.login(JSON.stringify(postData), headers).then(response => {
      this.setState({
        email: "",
        password: "",
        invalid: false,
        error: "",
      })
      AuthToken.storeToken(response.data.access_token);
      Router.push(`${process.env.BACKEND_URL}/admin`);
    }).catch(error => {
      this.setState({
        invalid: true,
        error: "Invalid Login Details."
      });
    })} else {
      this.setState({
        invalid: true,
        error: "Please fill all fields."
      });
    }
    }

    render() {
    return (
    <Form onSubmit={this.submitForm} className="login-form">
      <Form.Group as={Row} controlId="formHorizontalEmail">
        <Form.Label column sm={3}>Email</Form.Label>
        <Col sm={8}>
          <Form.Control
            required
            name="email"
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formHorizontalPassword">
        <Form.Label column sm={3}>Password</Form.Label>
        <Col sm={8}>
          <Form.Control
            required
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col sm={{ span: 10, offset: 3 }}>
          <Button onClick={this.submitForm} variant="dark">Login</Button>
        </Col>
      </Form.Group>
    </Form>
      );
    }
  }

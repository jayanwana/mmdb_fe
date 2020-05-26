import React, { Component } from "react";
import Router from "next/router";
import { Form, Row, Col, Button, Alert} from "react-bootstrap";
import Geocode from "react-geocode";
import MmDataService from "../utils/axios.service";
import AuthToken from "../utils/auth_token"

Geocode.setApiKey(process.env.GMAP_API)
Geocode.setRegion("ng");

export default class MarketForm extends Component {
  constructor(props) {
    super (props);
    this.state = {
        name: this.props.market? this.props.market.name : "",
        description: this.props.market? this.props.market.description : "",
        foodCategory: this.props.market? this.props.market.foodCategory : "",
        location: this.props.market? this.props.market.location : null,
        address: this.props.market? this.props.market.address : "",
        img_1: null,
        img_2: null,
        img_3: null
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFileInput = this.handleFileInput.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentDidMount() {
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value});
  }

  handleFileInput(event){
    const target = event.target;
    const name = target.name;
    this.setState({[name]: event.target.files[0]});
  }

  async submitForm(event) {
    event.preventDefault()
    await Geocode.fromAddress(this.state.address).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        this.setState({
          location: JSON.stringify({coordinates: [lat, lng]})
        })
      },
      error => {
        console.error(error);
      }
    );
    const formData = new FormData();
    for (var key in this.state){
      if (this.state[key]){
        if (this.state[key].name) {
          formData.append(
            key,
            this.state[key],
            this.state[key].name
          )
        } else {
          formData.append(
            key,
            this.state[key],
          )
        }
    }}
    const token = AuthToken.getToken();
    const headers = {  headers: {
        "Content-type": "multipart/form-data",
        "Authorization": `Bearer ${token}`
      }}

    if(!this.props.update){
      MmDataService.createMarket(formData, headers).then(response => {
      alert("Market Successfully Added")
      Router.push(`${process.env.BACKEND_URL}/admin`);
    }).catch(error =>{
      if(error.response.status===401){
        AuthToken.deleteToken()
        alert("Please Login Again")
        Router.push(`${process.env.BACKEND_URL}/login`);
      }
      console.log(error)}
      )} else {
        MmDataService.updateMarket(this.props.market.id, formData, headers).then(response => {
        alert("Market Successfully Updated")
        Router.push(`${process.env.BACKEND_URL}/admin`);
      }).catch(error => {
        if(error.response.status===401){
          AuthToken.deleteToken()
          alert("Please Login Again")
          Router.push(`${process.env.BACKEND_URL}/login`);
        }
        console.log(error)
        })
      }
  }

  render() {
    return (
      <div className="form-wrap">
        <button className="close-form" onClick={() => this.props.close(true)}>Close</button>
        <Form onSubmit={this.submitForm} className="marketForm">
          <Form.Group as={Row} controlId="formHorizontalName">
            <Form.Label column sm={3}>Market Name</Form.Label>
            <Col sm={8}>
              <Form.Control
                required
                name="name"
                type="text"
                placeholder="Enter Market Name"
                value={this.state.name}
                onChange={this.handleInputChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalDescription">
            <Form.Label column sm={3}>Description</Form.Label>
            <Col sm={8}>
              <Form.Control
                required
                name="description"
                type="text"
                placeholder="Brief Market Description"
                value={this.state.description}
                onChange={this.handleInputChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalFoodCategory">
            <Form.Label column sm={3}>Food Category</Form.Label>
            <Col sm={8}>
              <Form.Control
                required
                name="foodCategory"
                type="text"
                placeholder="Food Category"
                value={this.state.foodCategory}
                onChange={this.handleInputChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalAdress">
            <Form.Label column sm={3}>Address</Form.Label>
            <Col sm={8}>
              <Form.Control
                required
                name="address"
                type="text"
                placeholder="Address"
                value={this.state.address}
                onChange={this.handleInputChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalimg_1">
            <Form.Label column sm={3}>Market Image 1</Form.Label>
            <Col sm={4}>
              <Form.Control
                name="img_1"
                type="file"
                onChange={this.handleFileInput}
              />
            </Col>
            <Col sm={4}>
              {this.state.img_1? <img style={{width: "60px", height:"60px"}} src={URL.createObjectURL(this.state.img_1)}/>: ""}
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalimg_2">
            <Form.Label column sm={3}>Market Image 2</Form.Label>
            <Col sm={4}>
              <Form.Control
                name="img_2"
                type="file"
                onChange={this.handleFileInput}
              />
            </Col>
            <Col sm={4}>
              {this.state.img_2? <img style={{width: "60px", height:"60px"}} src={URL.createObjectURL(this.state.img_2)}/>: ""}
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalimg_3">
            <Form.Label column sm={3}>Market Image 3</Form.Label>
            <Col sm={4}>
              <Form.Control
                name="img_3"
                type="file"
                onChange={this.handleFileInput}
              />
            </Col>
            <Col sm={4}>
              {this.state.img_3? <img style={{width: "60px", height:"60px"}} src={URL.createObjectURL(this.state.img_3)}/>: ""}
            </Col>
          </Form.Group>

          {this.state.invalid ? <Alert variant='warning'>{this.state.error}</Alert> : ''}
          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 3 }}>
              <Button type="submit" variant="dark">Submit</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    )
  }
}

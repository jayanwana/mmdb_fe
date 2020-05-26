import React, { Component } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

export default class LocationSearch extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className="location-search">
        <Form>
          <Form.Group as={Row} controlId="locationSearch">
            <Form.Label column sm={4}>Search by Proximity</Form.Label>

            <Button onClick={this.props.handler} variant="dark">Search</Button>

          </Form.Group>
        </Form>
      </div>
    )
  }
}

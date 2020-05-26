import React, { Component } from "react";
import { Form, FormGroup, FormControl, InputGroup, Button, Row, Col, } from "react-bootstrap";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      method: 'name',
      placeholder: "Enter Market Name"
    };
    this.handleRadio = this.handleRadio.bind(this);
    this.invalid = this.invalid.bind(this);
  };

  componentDidMount() {
  }
  handleRadio(event) {
    const placeholders = ["Enter Market Name", "Enter Food Category"]
    const method = ["name", "foodCategory"]
    this.setState({
      method: method[event.target.value],
      placeholder: placeholders[event.target.value]
    })
    console.log(event.target.value)
  }
  invalid(){
    console.log('invalid');
  }

  render() {
    return (
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder={this.state.placeholder}
              onChange={event => this.setState({
                query: event.target.value
              })}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.props.handler(this.state.query, this.state.method);
                }
              }}
            />
            <InputGroup.Append>
              <Button onClick={this.state.query ? () => this.props.handler(this.state.query, this.state.method) : this.invalid} variant="dark">Search</Button>
            </InputGroup.Append>
          </InputGroup>
          <fieldset onChange={this.handleRadio}>
            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={4}>
                Search Markets By
              </Form.Label>

              <Form.Check
                defaultChecked
                inline
                type="radio"
                label="Market Name"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
                value={0}
              />
              <Form.Check
                inline
                type="radio"
                label="Food Category"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
                value={1}
              />

            </Form.Group>
          </fieldset>
        </FormGroup>
    );
  }
};

import React, { Component } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

class Cbc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: 0,
      password: "",
      address: ""
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };
  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };
  handlePhoneChange = (e) => {
    this.setState({ phone: e.target.value });
  };
  handleAddressChange = (e) => {
    this.setState({ address: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.name && this.email && this.password && this.address && this.phone){
      alert(JSON.stringify(this.state));
      //call the api
    }
    else{
      alert("Fields are empty")
    }
   
  };
  render() {
    return (
      <>
        <Container className="mt-5">
          <Row className="m-auto">
            <Col md={6}>
              <h5>FROM CLASS BASED COMPONENT</h5>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                    placeholder="Enter Name"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email </Form.Label>
                  <Form.Control
                    required
                    type="email"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    placeholder="Enter Email"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Password </Form.Label>
                  <Form.Control
                   required
                    type="password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                    placeholder="Enter Password"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Phone </Form.Label>
                  <Form.Control
                   required
                    type="number"
                    value={this.state.phone}
                    onChange={this.handlePhoneChange}
                    placeholder="Enter Phone"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    value={this.state.address}
                    onChange={this.handleAddressChange}
                    placeholder="Enter Address"
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Cbc;

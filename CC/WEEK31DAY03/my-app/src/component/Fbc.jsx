import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const Fbc = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState(0);
  const [address, setAddress] = useState("");

  const formHandler = (e) => {
    e.preventDefault();
    if(name && email && phone && password && address){
      alert(JSON.stringify({ name, email, password, phone, address }));
    }
    else{
      alert("Fields are empty")
    }
   
  };

  return (
    <>
      <Container className="mt-5">
        <Row className="m-auto">
          <Col md={6}>
            <h5>FROM FUNCTIONAL BASED COMPONENT</h5>
            <Form onSubmit ={formHandler}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Password </Form.Label>
                <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phone </Form.Label>
                <Form.Control type="number" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Enter Phone" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text"  value={address} onChange={(e)=>setAddress(e.target.value)} placeholder="Enter Address" />
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
};

export default Fbc;

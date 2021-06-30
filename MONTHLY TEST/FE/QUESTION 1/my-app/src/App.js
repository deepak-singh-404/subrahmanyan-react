import React, { useState, useEffect } from 'react'
import { Form,Button, Container, Row, Col } from 'react-bootstrap'

const App = () => {
  const [formdata, setFormdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    about: "",
    tnc: ""
  })
  const [errors, setErrors] = useState({
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    genderError:"",
    aboutError: "",
    tncError: ""
  })

  const formHandler = (e) => {
    e.preventDefault()
    let tempError = {}
    if (formdata.firstName.length <= 3){
      tempError["firstNameError"] = "First Name should be of more than 3 character"
    }
    if(formdata.lastName.length <= 3){
      tempError["lastNameError"] = "Last Name should be of more than 3 character"
    }
    if(formdata.email.length === 0){
      tempError["emailError"] = "Email is required"
    }
    if(formdata.gender.length === 0){
      tempError["genderError"] = "Gender is required"
    }
    if(formdata.about.length <= 10){
      tempError["aboutError"] = "About should be of more than 3 character"
    }
    if (! formdata.tnc){
      tempError["tncError"] = "Terms and condition is required"
    }

    if(Object.keys(tempError).length > 0){
      setErrors({...tempError})
      return
    }
    else{
      setErrors({...errors})
      alert(JSON.stringify(formdata))
      
    }
  }

  return (
    <>
    <Container>
      <Row>
        <Col md={4}>
        </Col>
        <Col md={4} className="mt-5">
        <Form onSubmit={formHandler}>
      <Form.Group className="mb-3" >
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" value={formdata.firstName} onChange={(e) => setFormdata({ ...formdata, firstName: e.target.value })} placeholder="Enter First Name" />
        { errors.firstNameError && <Form.Text className="text-muted">
          {errors.firstNameError}
        </Form.Text>}
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" value={formdata.lastName} onChange={(e) => setFormdata({ ...formdata, lastName: e.target.value })} placeholder="Enter Last Name" />
        { errors.lastNameError && <Form.Text className="text-muted">
          {errors.lastNameError}
        </Form.Text>}
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={formdata.email} onChange={(e) => setFormdata({ ...formdata, email: e.target.value })} placeholder="Enter email" />
        { errors.emailError && <Form.Text className="text-muted">
          {errors.emailError}
        </Form.Text>}
      </Form.Group>
      <Form.Group >
        <Form.Label>Gender</Form.Label>
        <Form.Control onChange={(e) => setFormdata({ ...formdata, gender: e.target.value })} as="select">
          <option>Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </Form.Control>
        { errors.genderError && <Form.Text className="text-muted">
          {errors.genderError}
        </Form.Text>}
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>About</Form.Label>
        <Form.Control
          value={formdata.about} onChange={(e) => setFormdata({ ...formdata, about: e.target.value })}
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
         { errors.aboutError && <Form.Text className="text-muted">
          {errors.aboutError}
        </Form.Text>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label>Terms and Condition</Form.Label>
        <Form.Check onChange={(e) => setFormdata({ ...formdata, tnc: e.target.checked })} type="checkbox" label="Check me out" />
        { errors.tncError && <Form.Text className="text-muted">
          {errors.tncError}
        </Form.Text>}
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
  </Button>
    </Form>
        </Col>
        <Col md={4}>
        </Col>
      </Row>
    </Container>
    
  </>)
}

export default App

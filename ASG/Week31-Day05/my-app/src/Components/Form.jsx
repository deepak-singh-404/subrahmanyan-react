import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Loader from "./Loader";

const FormComponent = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
  });
  const [loader, setLoader] = useState(false);

  const formHandler = (e) => {
    e.preventDefault();

    //Check the name
    if(form.name === ""){
       return setError({...error, nameError:"Name is required"})
    }
    if(form.name.length <= 3){
        return setError({...error, nameError:"Name should be of more than 3 character"})
     }
    
     //Check the email
     if(form.email=== ""){
        return setError({...error, emailError:"Email is required"})
     } 

     if(form.password === ""){
        return setError({...error, passwordError:"Password is required"})
     }
     if(form.password.length <= 5){
         return setError({...error, passwordError:"Password should be of more than 5 character"})
      }
    

    //Send this data to an api
    //before http request
    // turn loader on
    
    setLoader(true)
    
    setTimeout(()=>{
        alert(JSON.stringify(form));
        setLoader(false)
    },2000)
    
    //once we will get response from backend, like it got update, success true
   
  };

  return (
    <>
      <Form onSubmit={formHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Enter Name"
          />
          {error.nameError &&  <Form.Text className="text-muted">
            {error.nameError}
          </Form.Text> }
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Enter email"
          />
           {error.emailError &&  <Form.Text className="text-muted">
            {error.emailError}
          </Form.Text> }
         
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            placeholder="Password"
          />
           {error.passwordError &&  <Form.Text className="text-muted">
            {error.passwordError}
          </Form.Text> }
        </Form.Group>
        {loader ? 
          <Loader />
         : 
          <Button variant="primary" type="submit">
            Submit
          </Button>
        }
      </Form>
    </>
  );
};

export default FormComponent;

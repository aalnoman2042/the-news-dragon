import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <Container className="w-25 mx-auto">
        <h3>please register</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter your name" required />
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" name="Photo" placeholder="photo url" required />
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" name="accept" label="accept terms and condition" />
        </Form.Group>
      
        <Button variant="primary" type="submit">
      login
        </Button>
        <br />
        <Form.Text className="text-secondary">
           already have a account <Link to='/login'>login</Link>
        </Form.Text>

        <Form.Text className="text-success">
           
          </Form.Text>
        <Form.Text className="text-danger">
            
                      </Form.Text>
      </Form>
    </Container>
    );
};

export default Register;
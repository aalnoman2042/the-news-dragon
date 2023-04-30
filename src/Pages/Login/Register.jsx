import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {

  const {createUser} = useContext(AuthContext)
  const [accecpted, setAccepted] = useState(false)

    const handleRegister = event =>{
      event.preventDefault()
      const form = event.target
      const email = form.email.value
      const name = form.name.value
      const password= form.password.value
      const photo = form.photo.value

      console.log(email, photo, name, password);
// created user 
      createUser(email, password)
      .then(result =>{
        const createdUser = result.user;
         console.log(createdUser);
      })
      .catch( error =>{
        console.log(error);

    })
  }
  const handleAccepted = event =>{
    setAccepted(event.target.checked);
  }
    return (
        <Container className="w-25 mx-auto">
        <h3>please register</h3>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter your name" required />
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhotoUrl">
          <Form.Label>photo url</Form.Label>
          <Form.Control type="text" name="photo" placeholder="photo url" required />
          
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
          <Form.Check 
          onClick={handleAccepted}
          type="checkbox" 
          name="accept" 
          label={<>accept <Link to='/terms'>terms and condition</Link></>} />
        </Form.Group>
      
        <Button variant="primary" disabled={!accecpted} type="submit">
      Register
        </Button>
        <br />
        <Form.Text className="text-secondary">
           already have a account <Link to='/login'>Login</Link>
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
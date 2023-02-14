import React from 'react'
import { Form, Button }from 'react-bootstrap';

const SignIn: React.FC = () => {
  return (
    <>
      <Form>
        <Form.Text style={{ fontSize: '2rem'}}>Sign In</Form.Text>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign In
        </Button>
      </Form>
    </>
  )
}

export default SignIn
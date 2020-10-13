import React, {useState} from 'react';
// import {useForm} from 'react-hook-form';
import { useSelector, useDispatch } from "react-redux";
import { registerAction } from "../redux/action/action.member";
import { useHistory } from "react-router-dom";
import { Form, Button, Container } from 'react-bootstrap'

const Register = () =>{
    const dispatch = useDispatch();
    const history = useHistory();

    const[register, setRegister]= useState({
        name:"",
        email:"",
        password:"",
        gender:"",
        alamat:"",
        skill:""
    });

    const isLogged = useSelector((state)=> state.member);
    console.log("check login",isLogged);

    const handleChange = (event) =>{
        setRegister({
            ...register,
            [event.target.name]: event.target.value,
        });
    };

    return (
      <div>
        <h1 style={{textAlign:"center"}}>Register Page</h1>
        <Container>
        <Form
          onSubmit={(event) => {
            dispatch(registerAction(register, event, history));
          }}
        >
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              name="name"
              value={register.name}
              onChange={(event) => handleChange(event)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={register.email}
              onChange={(event) => handleChange(event)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={register.password}
              onChange={(event) => handleChange(event)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Gender</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Gender"
            name="gender"
            value={register.gender}
            onChange={(event) => handleChange(event)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Address"
              name="alamat"
              value={register.alamat}
              onChange={(event) => handleChange(event)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Skill</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="skill"
            name="skill"
            value={register.skill}
            onChange={(event) => handleChange(event)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </Container>
      </div>
    );
};

export default Register;
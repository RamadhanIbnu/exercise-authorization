import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../redux/action/action.member";
import { useHistory } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

const Login = () =>{
    const [validated, setValidated] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const [login, setLogin] = useState({
      email: "",
      password: "",
    });
    const isLogged = useSelector((state)=> state.member.isLogged);
    console.log("check login",isLogged);

    const dataResponseDefault = useSelector(state => state)
    console.log("data",dataResponseDefault)

    //handle change form
    const handleChange = (event) => {
      setLogin({
        ...login,
        [event.target.name]: event.target.value,
      });
    };
    // handle submit form
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setValidated(true);
        dispatch(loginAction(login, event, history));
        if(isLogged){
                    alert(isLogged.member.data.data)
                } else{
                    alert(dataResponseDefault.member.data.data)
                }
      };
    
    return(
        <div>
      <h1 style={{textAlign:"center"}}>Login Page</h1>
      <Container>
        <Form
         noValidate validated={validated} onSubmit={handleSubmit}
          
        >
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
            required
              type="email"
              placeholder="email"
              name="email"
              value={login.email}
              onChange={(event) => handleChange(event)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
            required
              type="password"
              placeholder="password"
              name="password"
              value={login.password}
              onChange={(event) => handleChange(event)}
            />
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </Container>
    </div>
    )
};

export default Login;
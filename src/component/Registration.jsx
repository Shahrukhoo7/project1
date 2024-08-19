import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const Registration = () => {
    let api= "http://localhost:1000/user"

    let [state, setState] = useState({uname:"",email:"",pass:""})

    let changeHandle=(event)=>{
        // console.log(event);
        let {name,value}=event.target;
        setState({...state,[name]:value})
        // console.log(state);
    }


    let Subhandle=(event)=>{
        event.preventDefault();

        axios.post(api,state)
        .then(res=>alert("JOMA HOLO"))
        .catch(err=>alert("nah,valo kore chk kor"))


    }
  return (
    <Form onSubmit={Subhandle}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter User Id" name='uname' onChange={changeHandle}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' onChange={changeHandle}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='pass' onChange={changeHandle}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default Registration
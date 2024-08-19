import React, { useEffect, useState } from 'react'
import api from "./Registration"
import { Form } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import axios from 'axios'

const Login = () => {
    let gapi=api
    console.log(gapi);

    let [state, setState] = useState({uname:"", pass:""})
    let [oldstate, setOldstate]=useState([])

    useEffect(()=>{
        axios.get(gapi)
        .then(res=>{
            console.log(res)
            setOldstate(res.data)
        })
        .catch(err=>console.log(err))
    })

    let changeHandle=(event)=>{
        event.perist()
        let {name,value}=event.target
        setState({...state,[name]:value})
        console.log(event);
    }

    let Subhandle=(event)=>{
        console.log(event);
    }
  return (
    <Form onSubmit={Subhandle}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter User Id" name='uname' onChange={changeHandle}/>
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

export default Login
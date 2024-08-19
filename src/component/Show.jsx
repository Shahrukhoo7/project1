import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button,Card } from 'react-bootstrap';

const Show = () => {

    let api="https://dummyjson.com/products"
    console.log(api);

    let [state, setState]= useState([])

    let fdata=()=>{
        axios.get(api)
        .then(res=>{
            console.log("Response:", res.data.products)
            setState(res.data.products)
        })
        .catch(err=>console.log(err))
    }

    useEffect(()=>{
        fdata()
    },setState)
  return (
    <div>
      {/* <h1>Welcome, {username}!</h1> */}
      <div className="products-container">
        {state.map(product => (
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={product.thumbnail} alt={product.title} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        ))}
      </div>

      
    </div>
  )
}

export default Show
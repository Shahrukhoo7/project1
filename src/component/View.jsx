import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
// import { Col,Card } from 'react-bootstrap'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const View = () => {
  let api="https://dummyjson.com/products/category-list"
  console.log(api);

//   let navigate=useNavigate()

  let [show, setShow]= useState([])

    let fdata=()=>{
        axios.get(api)
        .then(res=>{
          console.log("res:", res.data);
          setShow(res.data)
        })
        .catch(err=>{
          console.log(err);
        })
        // console.log("state:", show);
    }

    useEffect(()=>{
        fdata();
    },[setShow])
    return (
    <div>
        {show.map(dd=>
            <h2>{dd}</h2>
        )}
        <Link to="/">Home</Link>
    </div>
  )
}

export default View
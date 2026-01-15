import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Navbar, Container, Nav, Card, Button, Form, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="container mt-4">
      <h2 text className='text-center'>Component for Bootstrap</h2>
      <div className='card p-3 mt-3'>
        <input className='form-control' placeholder='Enter your Name'/>
        <input className='form-control' placeholder='Enter your Age'/>
        <button className='btn btn-warning'>Submit</button>
      </div>
    </div>
  )
}

export default App;




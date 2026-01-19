import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { Navbar, Container, Nav, Card, Button, Form, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="container mt-4">
      <h2 className='text-center'>Login Page Overview</h2>
      <div className='card p-3 mt-3'>
        <input className='form-control' placeholder='Enter your Name'/>
        <input className='form-control' placeholder='Enter your Email'/>
        <input className='form-control' placeholder='Enter your Age'/>
        <button className='btn btn-warning'>Submit</button>
      </div>
      <Card style={{ width: '30rem' }} className="mt-3">
        <Card.Img variant="top" src="logo.jpg" height={400}/>
        <Card.Body>
          <Card.Title>Chandigarh University</Card.Title>
          <Card.Text>Click below to go to CU official page Chandigarh University</Card.Text>
          <Button variant="primary" href='https://uims.cuchd.in/uims'>Go to CU site</Button>
        </Card.Body>
      </Card>
      <div className="card mt-3" style={{width: '30rem'}}>
        <div className="card-header">
          Courses
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Bachelor of Engineering</li>
          <li className="list-group-item">Bachelor of Art</li>
          <li className="list-group-item">Bachelor of Science</li>
        </ul>
      </div>
    </div>
  );
}



function TypesExample() {
  return (
    <>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
    </>
  );
}

export default App;
import React from "react";
import { useState } from "react"
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";



const Create = () => {

    const [file, setFile] = useState("");
    const [amount, setAmount] = useState("");
    const [creating, setCreating] = useState(false);

    function createTransaction(){

    }

    return (
        <Container style={{ paddingTop: "6.5rem" }} className="text-left">
            <center><h2><u>Create Transaction</u></h2></center>
            <Row>
            <Col>
            
            <br />

            <Form className="text-left">
            
            <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
              <Form.Label column sm="2">Transaction Id</Form.Label>
              <Col sm="10"> 
              <Form.Control type="email" placeholder="Transaction Id" //value={id} 
              readOnly />
               </Col>
              <Form.Text column sm="2" className="text-muted">
                Uniquely generated transaction id at the time when transaction
                has been created, This id will never change
              </Form.Text>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
              <Form.Label column sm="2">Transaction Hash</Form.Label>
              <Col sm="10"> 
              <Form.Control readOnly type="text" placeholder="Transaction Hash" //value={hash}
              /> </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
              <Form.Label column sm="2">Name of the Item</Form.Label>
              <Col sm="10"> 
              <Form.Control type="text" placeholder="Name of Item purchased" //value={hash}
              /> </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
              <Form.Label column sm="2">Description and Detailed Specification of Item</Form.Label>
              <Col sm="10">
              <Form.Control as="textarea" placeholder="Description of Item" rows={2} //value={specification}
                //onChange={(e) => setAmount(e.target.value)}
              /></Col>
            <br />
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
              <Form.Label column sm="2">Cost of Purchased Items</Form.Label>
              <Col sm="10">
              <Form.Control type="number"  placeholder="e.g 100000"
                //value={amount} onChange={(e) => setAmount(e.target.value)}
              /></Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
              <Form.Label column sm="2">Date of Purchased Items</Form.Label>
              <Col sm = "10">
              <Form.Control type="Date" placeholder="e.g dd/mm/yyyy" //value={amount}
                //onChange={(e) => setAmount(e.target.value)}
              />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
              <Form.Label column sm="2">Current Location of the Item</Form.Label>
              <Col sm = "10">
              <Form.Control type="text" placeholder="Location in Lab." //value={hash}
              />
              </Col>
            </Form.Group>
            <center>
            <Button variant="primary"  type="submit" disabled={creating || amount === "" || file === ""}
              onClick={!creating ? createTransaction : null}
            >
              {!creating ? "Create" : "Loading..."}
            </Button>

            <Button
              style={{ marginLeft: "5rem" }}
              variant="outline-danger"
              type="submit"
            >
              Cancel
            </Button>
            </center>
            </Form>
            </Col>
            </Row>
        </Container>
    );
};

export default Create;
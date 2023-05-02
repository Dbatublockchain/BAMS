import React from "react";
import { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

const WriteOff = () => {

    //onst [file, setFile] = useState("");
    //const [amount, setAmount] = useState("");
    const [writeoff, setWriteoff] = useState(false);

    function writeOff(){

    }

    return (
        <Container style={{ paddingTop: "6.5rem" }} className="text-left">
            <center><u><h2>Write Off Items</h2></u> </center> 
            <Row>
            <Col>
            
            <br />

            <Form className="text-left">

            <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
              <Form.Label column sm="2">Name of the Item</Form.Label>
              <Col sm="10"> 
              <Form.Control type="text" placeholder="Name of Item purchased" //value={hash}
              /> </Col>
            </Form.Group>
            
            <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
              <Form.Label column sm="2">Transaction Id</Form.Label>
              <Col sm="10"> 
              <Form.Control type="email" placeholder="Transaction Id" //value={id} 
              readOnly />
               </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
              <Form.Label column sm="2">Description and Detailed Specification of Item</Form.Label>
              <Col sm="10">
              <Form.Control as="textarea" placeholder="Description of Item" rows={2} readOnly //value={specification}
                //onChange={(e) => setAmount(e.target.value)}
              /></Col>
            <br />
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
              <Form.Label column sm="2">Date of Write-off an Item</Form.Label>
              <Col sm = "10">
              <Form.Control type="Date" placeholder="e.g dd/mm/yyyy" //value={amount}
                //onChange={(e) => setAmount(e.target.value)}
              />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
              <Form.Label column sm="2">Current Location of the Item</Form.Label>
              <Col sm = "10">
              <Form.Control  type="text" placeholder="Location in Lab." //value={hash}
              readOnly />
              </Col>
            </Form.Group>
            <center>
            <Button variant="primary"  type="submit" //disabled={updating || amount === "" || file === ""}
              onClick={!writeoff ? writeOff : null}
            >
              {!writeoff ? "Write Off" : "Loading..."}
            </Button>

            <Button
              style={{ marginLeft: "5rem" }}
              variant="outline-danger"
              type="submit">Cancel
            </Button>
            </center>
            </Form>
            </Col>
            </Row>
        </Container>
    );
};

export default WriteOff;
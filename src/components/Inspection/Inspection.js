import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";

const Update = () => {
  const { hash } = useParams();
  const [tx, setTx] = useState(null);
  const [updating, setUpdating] = useState(false);
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [id, setId] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    if (hash) {
      fetchDetails(hash);
    }
  }, [hash]);

  const fetchDetails = async (hash) => {
    const trans = await factory.methods.transactionMap(hash).call();
    setTx(trans);
    setId(hash);
  };

  const updateLocation = async () => {
    setUpdating(true);
    try {
      const accounts = await web3.eth.getAccounts();

      const transaction = await factory.methods
        .verifyItem(id, location, date)
        .send({
          from: accounts[0],
        });
      const tx = transaction.transactionHash;
      setSuccess(
        "Successfully created transaction by " +
          accounts[0] +
          " with transaction hash " +
          tx
      );
    } catch (err) {
      setError("Error in creating transaction!");
      setSuccess("");
    }
    setUpdating(false);
  };

  return (
    <Container style={{ paddingTop: "6.5rem" }} className="text-left">
      <center>
        <u>
          <h2>Annual Verification of an Item</h2>
        </u>
      </center>
      <Row>
        <Col>
          <br />
          {(success !== "" || error !== "") && (
            <Alert key="1" variant={success !== "" ? "success" : "danger"}>
              {success !== "" ? success : error}
            </Alert>
          )}
          <Form className="text-left">
            <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
              <Form.Label column sm="2">
                Name of the Item
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={tx?.ItemName}
                  placeholder="Name of Item purchased" //value={hash}
                  readOnly
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
              <Form.Label column sm="2">
                Transaction Id
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="email"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  placeholder="Transaction Hash"
                  readOnly={hash}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
              <Form.Label column sm="2">
                Description and Detailed Specification of Item
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  as="textarea"
                  value={tx?.Description}
                  placeholder="Description of Item"
                  rows={2}
                  readOnly
                  //value={specification}
                  //onChange={(e) => setAmount(e.target.value)}
                />
              </Col>
              <br />
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
              <Form.Label column sm="2">
                Date of Verification of an Item
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="Date"
                  placeholder="e.g dd/mm/yyyy"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
              <Form.Label column sm="2">
                Current Location of the Item
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder="Location in Lab."
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </Col>
            </Form.Group>
            <center>
              <Button
                variant="success"
                disabled={
                  updating || location === "" || date === "" || id === ""
                }
                onClick={!updating ? updateLocation : null}
              >
                {!updating ? "Verify" : "Loading..."}
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

export default Update;

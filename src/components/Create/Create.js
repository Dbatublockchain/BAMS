import React from "react";
import { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import web3 from "../../ethereum/web3";
import factory from "../../ethereum/factory";
import sha256 from "sha256";
import { uid } from "uid";

const Create = () => {
  const [file, setFile] = useState("");
  const [amount, setAmount] = useState("");
  const [creating, setCreating] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [id, setId] = useState("");
  const [hash, setHash] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function createTransaction(e) {
    e.preventDefault();
    try {
      setCreating(true);
      let salt = "";
      let id = "";
      const accounts = await web3.eth.getAccounts();
      salt = sha256(desc);
      setHash(salt);
      id = uid(24);
      setId(id);

      const transaction = await factory.methods
        .createTransaction(id, salt, amount, name, desc, location, date)
        .send({
          from: accounts[0],
        });
      const tx = transaction.transactionHash;

      setCreating(false);
      setAmount("");
      setDesc("");
      setName("");
      setSuccess(
        "Successfully created transaction by " +
          accounts[0] +
          " with transaction hash " +
          tx
      );
      setError("");
    } catch (err) {
      setError("Error in creating transaction!");
      setSuccess("");
      setCreating(false);
      console.log(err);
    }
  }

  return (
    <Container style={{ paddingTop: "6.5rem" }} className="text-left">
      <center>
        <h2>
          <u>Create Transaction</u>
        </h2>
      </center>
      <Row>
        <Col>
          {(success !== "" || error !== "") && (
            <Alert key="1" variant={success !== "" ? "success" : "danger"}>
              {success !== "" ? success : error}
            </Alert>
          )}
          <Form className="text-left">
            <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
              <Form.Label column sm="2">
                Transaction Id
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="email"
                  placeholder="Transaction Id"
                  value={id}
                  readOnly
                />
              </Col>
              <Form.Text column sm="2" className="text-muted">
                Uniquely generated transaction id at the time when transaction
                has been created, This id will never change
              </Form.Text>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
              <Form.Label column sm="2">
                Transaction Hash
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  readOnly
                  type="text"
                  placeholder="Transaction Hash"
                  value={hash}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
              <Form.Label column sm="2">
                Name of the Item
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder="Name of Item purchased"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  placeholder="Description of Item"
                  rows={2}
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </Col>
              <br />
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
              <Form.Label column sm="2">
                Cost of Purchased Items
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="number"
                  placeholder="e.g 100000"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
              <Form.Label column sm="2">
                Date of Purchased Items
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
                variant="primary"
                type="submit"
                disabled={creating || amount === ""}
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

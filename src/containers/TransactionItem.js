import React, { useEffect, useState } from "react";
import { Badge, Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import factory from "../ethereum/factory";

const TransactionItem = ({ item }) => {
  useEffect(() => {
    fetchDetails();
    fetchTxDetails(item.TranHash);
  }, []);

  const [createdBy, setCreatedBy] = useState();
  const [updatedBy, setUpdatedBy] = useState();
  const [tx, setTx] = useState();

  const fetchDetails = async () => {
    const creator = await factory.methods.userMap(item.creator).call();
    const updator = await factory.methods.userMap(item.updatedBy).call();

    setUpdatedBy(updator);
    setCreatedBy(creator);
  };

  const fetchTxDetails = async (hash) => {
    const trans = await factory.methods.transactionMap(hash).call();
    setTx(trans);
  };

  return (
    <Card
      style={{ margin: "8px", marginTop: "0" }}
      className="text-left"
      border="warning"
    >
      <Card.Header>ID: {tx && tx.id}</Card.Header>
      <Card.Body>
        <Card.Text>Hash: {tx && tx.TranHash}</Card.Text>
        <Card.Text>Name Of Item: {tx && tx.ItemName}</Card.Text>
        <Card.Text>Description: {tx && tx.Description}</Card.Text>
        <Row>
          <Col>
            <Card.Text>Amount: Rs {tx && tx.Amount}</Card.Text>
          </Col>
          <Col>
            <Card.Text>Location: {tx && tx.Location}</Card.Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card.Text>Date: {tx && tx.Date}</Card.Text>
          </Col>
          <Col>
            <Card.Text>
              Created By: {createdBy && createdBy.Member_Name}
            </Card.Text>
          </Col>
        </Row>
        <Row style={{ marginBottom: "1rem" }}>
          <Col>
            <Card.Text>
              Updated By: {updatedBy && updatedBy.Member_Name}
            </Card.Text>
          </Col>
          <Col>
            <Card.Text>State: {tx && tx.state.toUpperCase()}</Card.Text>
          </Col>
        </Row>
        {tx && tx.state !== "writeoff" && tx && tx.state !== "approved" && (
          <Link to={`/BAMS/Update/${tx && tx.TranHash}`}>
            <Button
              style={{ marginRight: "1rem" }}
              disabled={tx && tx.state === "writeoff"}
              variant="primary"
            >
              Update
            </Button>
          </Link>
        )}
        {tx && tx.state !== "writeoff" && tx && tx.state !== "approved" && (
          <Link to={`/BAMS/WriteOff/${tx && tx.TranHash}`}>
            <Button variant="danger" style={{ marginRight: "1rem" }}>
              Write Off
            </Button>
          </Link>
        )}
        {tx && tx.state !== "writeoff" && tx && tx.state !== "approved" && (
          <Link to={`/BAMS/Inspection/${tx && tx.TranHash}`}>
            <Button variant="success">Verify</Button>
          </Link>
        )}
      </Card.Body>
    </Card>
  );
};

export default TransactionItem;

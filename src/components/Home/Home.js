import React, { useEffect, useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import TransactionItem from "../../containers/TransactionItem";
import factory from "../../ethereum/factory";

const Home = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchList()
  }, []);

  const fetchList = async () => {
    const transactionList = await factory.methods.listTransaction().call();
    setTransactions(transactionList);
  }

  return (
    <div>
      <div style={{ padding: "8px", paddingTop: "6rem", width: "60%", margin: "0 auto" }}>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search transaction by id"
            aria-label="Search transaction by id"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            Search
          </Button>
        </InputGroup>
      </div>
      <div style={{width: "60%", margin: "0 auto"}}>
        {transactions.length !== 0 &&
          transactions.map((item, index) => (
            <TransactionItem item={item} key={index + item.id} />
          ))}
      </div>
    </div>
  );
};

export default Home;

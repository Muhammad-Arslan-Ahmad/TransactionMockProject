import React, { useState, useEffect } from "react";
import { Table, Title, TransactionNull, Error } from "./Transaction";
import axios from "axios";
const App = () => {
  const [transactions, seTransactions] = useState();
  const [apiRespone, setApiResposne] = useState();
  const [error, setError] = useState(false);
  const url = "http://www.mocky.io/v2/5c62e7c33000004a00019b05";

  useEffect(() => {
    Transaction();
  }, []);

  const Transaction = async () => {
    const res = await axios.get(url);
    setApiResposne(res?.data);
    seTransactions(res?.data?.transactions?.sort(smallestExpenses).slice(0, 10));
  };

  const smallestExpenses = (x, y) => {
    return x.amount.value <= y.amount.value ? -1 : 1;
  };

  return apiRespone ? (
    <>
      <Title>Transactions Data</Title>

      <Table data-testid="bud">
        <thead>
          <tr>
            <th>No</th>
            <th>Category Title</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {!transactions ? (
            <tr data-testid="emptyTransaction">
              <TransactionNull colSpan={5}>Transaction Null </TransactionNull>
            </tr>
          ) : (
            transactions &&
            transactions?.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{i}</td>
                  <td>{item.category_title}</td>
                  <td>{item.description}</td>
                  <td>{item.amount.value} &#163;</td>
                  <td>{item.date}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </Table>
    </>
  ) : (
    <Error data-testid="error">No Record Found</Error>
  );
};

export default App;

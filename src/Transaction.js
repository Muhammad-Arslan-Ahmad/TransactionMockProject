import styled from "styled-components";

const Table = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 60%;
  text-align: center;
  margin: auto;

  td,
  th {
    border: 1px solid #ddd;
    padding: 8px;
  }
  th {
    padding-top: 12px;
    padding-bottom: 12px;
    font-size: 16px;
    text-align: left;
    background-color: #04aa6d;
    color: white;
    text-align: center;
  }
`;
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;
const TransactionNull = styled.td`
  font-size: 18px;
  color: gray;
  column-span: all;
`;

const Error = styled.p`
  font-size: 18px;
  color: red;
  column-span: all;
`;

export { Table, Title, TransactionNull, Error };

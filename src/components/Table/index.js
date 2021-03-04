import React from 'react';
import Row from '../Row/index'

function Table(props) {
  return (
    <table className="table table-striped">
      <thead>
        <Row key={"head"} info="head" />
      </thead>
      <tbody>
        {props.employees.map((employee, i) => <Row key={i} info={employee} />)}
      </tbody>
    </table>
  );
}

export default Table;

import React, { useState, useEffect } from 'react';
// import API from '../utils/API';
import Table from '../components/Table/index';
import Btn from '../components/Button/index'
import axios from 'axios';

function Directory() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=10&nat=us,ca')
      .then(res => setEmployees(res.data.results))
  }, []);

  function sortAge() {
    const sorted = employees.sort((a, b) => a.dob.age - b.dob.age);
    setEmployees([...sorted]);
  }

  function filterDOB() {}

  return (
    <div>
      <Table employees={employees}/>
      <Btn
        onClick={() => sortAge()}>
        Sort Age
      </Btn>
    </div>
  )
}

export default Directory;
import React, { useState, useEffect } from 'react';
import Table from './components/Table/index';
import Btn from './components/Button/index';
import Header from './components/Header/index';
import axios from 'axios';

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=10&nat=us,ca')
      .then(res => setEmployees(res.data.results))
  }, []);

  function sortAge() {
    const sorted = employees.sort((a, b) => a.dob.age - b.dob.age);
    setEmployees([...sorted]);
    // maybe clean up
  }

  function filterCountry(country) {
    const filtered = employees.filter(employee => employee.location.country === country)
    setEmployees([...filtered]);
  }

  return (
    <div>
      <Header />
      <Table employees={employees}/>
      <Btn onClick={() => sortAge()}>Sort Age</Btn>
      <Btn onClick={() => filterCountry("United States")}>From US</Btn>
    </div>
  )
}

export default App;

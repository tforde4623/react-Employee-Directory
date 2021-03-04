import React from 'react';
import Col from '../Col/index'

function Row(props) {
  return (
    <tr>
      <Col info={props.info === "head" ? "Name" : `${props.info.name.first} ${props.info.name.last}`} />
      <Col info={props.info === "head" ? "Email" : props.info.email} />
      <Col info={props.info === "head" ? "Phone #" : props.info.phone} />
      <Col info={props.info === "head" ? "Cell #" : props.info.cell} />
      <Col info={props.info === "head" ? "Age" : props.info.dob.age} /> 
      <Col info={props.info === "head" ? "Location" : `${props.info.location.city}, ${props.info.location.state}`} />
    </tr>
  )
}

export default Row;

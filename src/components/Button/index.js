import React from 'react';
import './index.css';

function Btn(props) {
  return (
    <button
      className="btn btn-primary"
      onClick={props.onClick}
    >
      {props.children}</button>
  )
}

export default Btn;
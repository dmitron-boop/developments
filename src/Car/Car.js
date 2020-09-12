import React from 'react'

export default props => (
  <div>
    <h3>Сar name: {props.name}</h3>
    <p>Price: <strong>{props.price}</strong> $</p>
    { props.children }
  </div>
)
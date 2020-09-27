import React from 'react'
import './Car.css'
import Radium from 'radium'

const Car = props => {

   const inputClasses = ['input']

   if (props.price !== '') {
        inputClasses.push('green')
   } else {
        inputClasses.push('red')
   }

   if (props.price.length > 4) {
   inputClasses.push('bold')
   }

    const style = {
        border: '1px solid #ccc',
        boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
        ':hover': {
        border: '1px solid #aaa',
        boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)',
        cursor: 'pointer'
        }
    }

    return (
     <div className='Car' style={style}>
        <h3> Сar name: {props.name} </h3>
        <p> Price: <strong>{props.price}</strong> $</p>
        <input
            type="text"
            onChange={props.onChangePrice}
            value={props.price}
             className={inputClasses.join(' ')}
        />
        <button onClick={props.onDelete}>Delete</button>
    </div>
    )
}

export default Radium(Car)
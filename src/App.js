import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {

    state = {
        cars: [
            {name: 'BMW M3', price: 43000},
            {name: 'Audi Q8', price: 87000},
            {name: 'Mercedes AMG GT', price: 145000}
        ],
        pageTitle: 'React components',
        showCars: false
    }

    onChangePrice(price, index) {
        const car = this.state.cars[index]
        car.price = price
        const cars = [...this.state.cars]
        cars[index] = car
        this.setState({cars})
    }

    deleteHandler(index) {
        const cars = this.state.cars.concat()

        cars.splice(index, 1)
        this.setState({cars})
    }

    toggleCarsHandler = (newTitle) => {
        this.setState({
            showCars: !this.state.showCars
        })
    }

    render() {
        const divStyle = {
            textAlign: 'center'
        }

        let cars = null

        if (this.state.showCars) {
            cars = this.state.cars.map((car, index) => {
                return (
                    <Car
                        key={index}
                        name={car.name}
                        price={car.price}
                        onDelete={this.deleteHandler.bind(this, index)}
                        onChangePrice={event => this.onChangePrice(event.target.value, index)} />
                )
            })
        }

        return (
            <div style={divStyle}>
                <h1>{this.state.pageTitle}</h1>

                <button onClick={this.toggleCarsHandler}>Toggle cars</button>
                <div style={{
                    width: 400,
                    margin: 'auto',
                    paddingTop: '20px',
                }}>
                { cars }
                </div>
            </div>
        );
    }
}

export default App;
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
        pageTitle: 'React components'
    }

    changeTitleHandler = () => {

        const oldTitle = this.state.pageTitle
        const clickCar = this.state.cars[0].price
        const newTitle = oldTitle + ' ' + clickCar

        this.setState({
            pageTitle: newTitle
        })

    }

    changePriceHandler = () => {

        const oldTitle = this.state.pageTitle
        const clickCar = this.state.cars[0].price
        const newTitle = oldTitle + ' ' + clickCar

        this.setState({
            pageTitle: newTitle
        })

    }

    render() {
        console.log('Render')
        const divStyle = {
            textAlign: 'center'
        }

        const cars = this.state.cars

        return (
            <div style={divStyle}>
                <h1>{this.state.pageTitle}</h1>

                <button onClick={this.changeTitleHandler}>Change title</button>

                <Car name={cars[0].name} price={cars[0].price} />
                    <button onClick={this.changePriceHandler}>add price</button>
                <Car name={cars[1].name} price={cars[1].price} />
                    <button onClick={this.changePriceHandler}>add price</button>
                <Car name={cars[2].name} price={cars[2].price} />
                    <button onClick={this.changePriceHandler}>add price</button>
            </div>
        );
    }
}

export default App;

import './App.css';
import React, { Component } from 'react'
import Search from './components/Search';
import CarList from './components/CarList';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       cars : [
         {name:"I20", brand:"Hyundai"},
         {name:"Verna", brand:"Hyundai"},
         {name:"Baleno", brand:"Maruthi"},
         {name:"Swift", brand:"Maruthi"},
         {name:"Innova", brand:"Tyota"},
         {name:"Fartuner", brand:"Tyota"},
         {name:"BMW1", brand:"BMW"},
         {name:"Audi-01", brand:"Audi"}
        ],

        searchCar:''
    }
  }
  
  handleInput = (e) => {
    
    this.setState({ searchCar: e.target.value})

    console.log(e.target.value);
  }
  render() {

// filter function
    let filterCars= this.state.cars.filter((car) => {
      return car.name.toLowerCase().includes(this.state.searchCar.toLowerCase())
    })


    return (
      <div className="App">
        <h2>Car Search</h2>
        <Search handleInput={this.handleInput}/>
        <CarList filterCars={filterCars}/>
      </div>
    )
  }
}

export default App;
import React,{ Component } from 'react';

import { CardList } from './Components/card-list.component';

import { SearchBox } from './Components/search-box.component'

import './App.css';


class App extends Component{
  constructor(){
    super();
    this.state={
      robots:[],
      searchField:''
   }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots:users}))
  }
  
  render(){
    const { robots,searchField }=this.state;
    const Filteredrobots= robots.filter( robot =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return(
      <div className="App">
        <h1> Robot Rolodex </h1>
        <SearchBox 
           placeholder="Search Robots"
           handlechange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList robots={ Filteredrobots }>
        </CardList>
    </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import CardList from '../Components/CardList';
import Search from '../Components/Search'
import Scroll from '../Components/Scroll'
import ErrorBoundaries from '../Components/ErrorBoundaries'
import './App.css'

class App extends Component 
{
   constructor()
   {
    super();
    this.state =
    {
        robots : [],
        SearchFeild : ""
    }
   }

   componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users").then
    (respose => respose.json()).then
    (users => this.setState({robots:users}))
   }

    OnSerachChange = (event) => {
        this.setState({SearchFeild:event.target.value})
    }

    render(){
       const {SearchFeild , robots} = this.state
       const FilteredRobots = robots.filter( robot =>
            {
                return robot.name.toLowerCase().includes(SearchFeild.toLowerCase())
            });
        
   return !robots.length?
   <h1>Loading</h1>:
    (
        <div className='tc'>
            <h1 className='f1'>Robo Friends</h1>
            <Search SearchChange = {this.OnSerachChange}/>
            <Scroll>
                 <ErrorBoundaries>
                    <CardList robots={FilteredRobots}/>
                </ErrorBoundaries>
            </Scroll>
        </div>
 
    );
    }
}

export default App;
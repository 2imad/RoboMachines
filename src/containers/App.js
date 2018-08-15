import React, { Component } from 'react'
import { connect } from 'react-redux'
import CardList from  '../components/CardList' 
import SearchBox from '../components/SearchBox' 
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css'

import { setSearchField } from '../actions'

class App extends Component {

    constructor() {
        super()
        this.state = {
            robots: []
          

        }
    } 


    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then( res  => res.json())
        .then( users => this.setState({robots : users }))
    }    


   

    render() {
        const { robots } = this.state 
        const { searchField , onSearchChange } = this.props
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        if(this.state.robots.length === 0 ){
            return <h1>Loading.....</h1>
        }else{
        return (
            <div className="tc" >
                <h1 className="f2" >RoboMachines</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                  <ErrorBoundry>  
                  <CardList robots={filteredRobots} />
                  </ErrorBoundry>
                </Scroll> 
            </div>
        )
      }
    }
}

const mapStateToProps = state => {
    return {
        searchField : state.searchField
    }
}
const mapDispatchToProps = (dispatch) =>{
  return {
       onSearchChange: (event) => dispatch(setSearchField(event.target.value))
 }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
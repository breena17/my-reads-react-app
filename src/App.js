import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import SearchPage from './components/SearchPage'
import * as BooksAPI from './BooksAPI'

//Maeva and Ryan Waite YouTube tutorials were used as guidance to complete this component
//Maeva - https://www.youtube.com/watch?v=i6L2jLHV9j8
//Ryan - https://www.youtube.com/watch?v=acJHkd6K5kI

class BooksApp extends React.Component {
  state = {
    books: [],
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }
  render() {
    return (
      <div>
        <Route exact path='/' component={ HomePage }/>
        <Route exact path='/search' component={ SearchPage }/>
      </div>
    );
  }
}

export default BooksApp

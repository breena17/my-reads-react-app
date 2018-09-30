import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import SearchPage from './components/SearchPage'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    books: []
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

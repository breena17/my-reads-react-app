import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import SearchPage from './components/SearchPage'

class BooksApp extends React.Component {
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

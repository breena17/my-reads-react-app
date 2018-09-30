import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'
import * as BooksAPI from '../BooksAPI'

class HomePage extends React.Component{
    state = {
        books: []
      }
    componentDidMount() {
        BooksAPI.getAll()
        .then((books) => {
            console.log(books)
            this.setState({ books })
        })
    }
    updateShelf= (book,shelf) => {
        BooksAPI.update(book,shelf)
        .then(()=> {
            BooksAPI.getAll().then((books) => {
                this.setState({books})
            })
        })
        
    }
    render() {
        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf name="Currently Reading" books={this.state.books.filter(books => books.shelf === "currentlyReading")} updateShelf={this.updateShelf}/>
                <Shelf name="Want To Read" books={this.state.books.filter(books => books.shelf === "wantToRead")} updateShelf={this.updateShelf}/>
                <Shelf name="Read" books={this.state.books.filter(books => books.shelf === "read")} updateShelf={this.updateShelf}/>
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a Book</Link>
            </div>
          </div>
        
        );
    }
}
export default HomePage
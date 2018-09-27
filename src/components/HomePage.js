import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'
import * as BooksAPI from '../BooksAPI'

class HomePage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }
    componentDidMount() {
        BooksAPI.getAll()
        .then((books) => {
            console.log(books)
            this.setState({ books })
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
                <Shelf name="Currently Reading" books={this.state.books.filter(b => b.shelf === "currentlyReading")}/>
                <Shelf name="Want To Read" books={this.state.books.filter(b => b.shelf === "wantToRead")}/>
                <Shelf name="Read" books={this.state.books.filter(b => b.shelf === "read")}/>
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
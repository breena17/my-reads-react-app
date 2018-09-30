import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'

class SearchPage extends React.Component{
    state = {
        books: []
      }
    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            console.log(books)
            this.setState({books})
        })
    }
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/" >Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author"/>

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        <li>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.book.imageLinks.thumbnail}")` }}></div>
                                    <div className="book-shelf-changer">
                                        <select value={this.props.book.shelf} /*onChange={}*/>
                                            <option value="move" disabled>Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="book-title">{this.props.book.title}</div>
                                <div className="book-authors">{this.props.book.authors[0]}</div>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        );
    }
}
export default SearchPage
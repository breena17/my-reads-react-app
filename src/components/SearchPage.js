import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'
import escapeRegExp from 'escape-string-regexp'

class SearchPage extends React.Component{
    state = {
        query: '',
        searchBooks: [],
        books: []
    }
    componentDidMount() {
        BooksAPI.getAll()
        .then((books) => {
            console.log(books)
            this.setState({ books })
        })
    }
    updateQuery = (query) => {
        this.setState({query: query})
        this.updateSearchedBooks(query);
    }
    updateSearchedBooks = (query) => {
        if (this.state.query === "" || this.state.query === undefined) {
            this.setState({ searchBooks:[] });
        }
        if(this.state.query) {
            BooksAPI.search(this.state.query)
            .then((searchBooks) => {
                console.log(searchBooks)
                this.setState({searchBooks: searchBooks})
            })
        } else {
            this.setState({ searchBooks: [] });
        }
        
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
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/" >Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" 
                        placeholder="Search by title or author"
                        value={this.state.query}
                        onChange={(event) => (this.updateQuery(event.target.value))}/>

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                    {this.state.searchBooks.map((searchBook) => (<Book book={searchBook} key={searchBook.id} updateShelf={this.updateShelf}/>))}
                    </ol>
                </div>
            </div>
        );
    }
}
export default SearchPage
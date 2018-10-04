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
            this.setState({ books })
        })
    }
    updateQuery = (query) => {
        this.setState({query: query},this.updateSearchedBooks);
    }
    updateSearchedBooks = (query) => {
        if (this.state.query === "" || this.state.query === undefined) {
            return this.setState({ searchBooks:[] });
        }
        BooksAPI.search(this.state.query)
        .then(Response => {
            console.log(Response);
            if(Response.error) {
                return this.setState({searchBooks:[]});
            } else {
                Response.forEach(searchItem => {
                    let match = this.state.books.filter(item => item.id === searchItem.id);
                    if(match[0]) {
                        console.log('match');
                        searchItem.shelf = match[0].shelf;
                    }
                });
                return this.setState({searchBooks: Response});
            }
        }); 
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
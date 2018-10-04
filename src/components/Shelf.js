import React from 'react'
import Book from './Book'

//Maeva and Ryan Waite YouTube tutorials were used as guidance to complete this component
//Maeva - https://www.youtube.com/watch?v=i6L2jLHV9j8
//Ryan - https://www.youtube.com/watch?v=acJHkd6K5kI

class Shelf extends React.Component {
    componentDidMount() {
        console.log(this);
    }
    
    render() {
        return (
            <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.name}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.props.books.map((book, key) => <Book book={book} key={key} updateShelf={this.props.updateShelf}/>)}
                    </ol>
                  </div>
                </div>
                
            </div>
        );
    }
}
export default Shelf
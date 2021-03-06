import React from 'react'

//Maeva and Ryan Waite YouTube tutorials were used as guidance to complete this component
//Maeva - https://www.youtube.com/watch?v=i6L2jLHV9j8
//Ryan - https://www.youtube.com/watch?v=acJHkd6K5kI

class Book extends React.Component {
    render() {
        let hasImage = this.props.book.imageLinks?
        this.props.book.imageLinks.thumbnail :
        "";
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${hasImage}")` }}></div>
                        <div className="book-shelf-changer">
                            <select value={this.props.book.shelf} onChange={(event) => (this.props.updateShelf(this.props.book, event.target.value))}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    <div className="book-authors">{this.props.book.authors}</div>
                </div>
            </li>
        );
    }
}
export default Book
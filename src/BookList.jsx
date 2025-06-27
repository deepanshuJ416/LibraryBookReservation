import Button from '@mui/material/Button';
import './BookList.css';

export default function BookList({books , reservations, onReserve, selectedUserId}) {
    return (
        <div className="book-list-container">
            <h3 className="book-list-title">📚 Available Books</h3>
            <ul className="book-list">
              {
                books.map((book)=> {
                    const isReserved = reservations.some((r)=> r.bookId === book.id);
                    console.log(`Book: ${book.title}, isReserved: ${isReserved}, selectedUserId: ${selectedUserId}`);
                    return (
                        <li key={book.id} className='book-item'>
                            <div className="book-info">
                                <div className="book-title">{book.title}</div>
                                <div className="book-author">by {book.author}</div>
                                <div className="book-isbn">ISBN: {book.isbn}</div>
                            </div>
                            {isReserved ? (
                                <span className="book-status">📖 Reserved</span>
                            ) : selectedUserId ? (
                                <Button
                                    variant="contained"
                                    className='Reservation-Button'
                                    onClick={() => onReserve(book.id)}
                                >
                                    Reserve
                                </Button>
                            ) : (
                                <span className="book-status">Please select a user</span>
                            )}
                        </li>
                    )
                })
              }
            </ul>
        </div>
    )
}
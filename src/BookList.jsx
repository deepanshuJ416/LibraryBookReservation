import Button from '@mui/material/Button';
import './BookList.css';
export default function BookList({books , reservations, onReserve, selectedUserId}) {
    return (
        <div>
            <h3>Book List</h3>
            <ul>
              {
                books.map((book)=> {
                    const isReserved = reservations.some((r)=> r.bookId === book.id);
                    return (
                        <li key={book.id} className='list'> {book.title} by {book.author} ISBN: {book.isbn}
                            {isReserved ? (<span> (Reserved)</span>) : selectedUserId ? (<Button variant="outlined" className='Reservation-Button' onClick={() => onReserve(book.id)}>Reserve</Button>) : null}
                        </li>
                    )
                })
              }
            </ul>
        </div>
    )
}
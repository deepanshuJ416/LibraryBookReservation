import Button from '@mui/material/Button';
import './BookList.css';
export default function BookList({books}) {
    return (
        <div>
            <h3>Book List</h3>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>{book.title}
                    <Button variant="outlined" className="resrvation-button">Reserve</Button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
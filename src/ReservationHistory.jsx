import './ReservationHistory.css';

export default function ReservationHistory({ reservations, books, users }){
    function getBookDetails(bookId){
        return books.find((book) => book.id === bookId);
    }
    function getUserDetails(userId){
        return users.find((user) => user.id === userId);
    }

    return(
        <div className="reservation-history-container">
            <h3 className="reservation-history-title">📋 Reservation History</h3>
            {
                reservations.length === 0 ? (
                    <div className="no-reservations">
                        <p>📚 No reservations found.</p>
                        <p>Start by selecting a user and reserving a book!</p>
                    </div>
                ) : (
                    <ul className="reservation-list">
                        {reservations.map((reservation, index)=> {
                            const book = getBookDetails(reservation.bookId);
                            const user = getUserDetails(reservation.userId);
                            return (
                                <li key={index} className="reservation-item">
                                    <div className="reservation-info">
                                        <div className="reservation-book">
                                            📖 {book ? book.title : 'Unknown Book'}
                                        </div>
                                        <div className="reservation-user">
                                            👤 {user ? user.name : 'Unknown User'}
                                        </div>
                                        <div className="reservation-date">
                                            📅 {reservation.date}
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                )
            }
        </div>
    )
}
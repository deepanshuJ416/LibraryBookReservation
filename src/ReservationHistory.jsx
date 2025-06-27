export default function ReservationHistory({ reservations, books, users }){
    function getBookDetails(bookId){
        return books.find((book) => book.id === bookId);
    }
    function getUserDetails(userId){
        return users.find((user) => user.id === userId);
    }

    return(
        <div>
            <h3>Reservation History</h3>
            {
                reservations.length === 0 ? (
                    <p>No reservations found.</p>
                ) : (
                    <ul>
                        {reservations.map((reservation, index)=> {
                            const book = getBookDetails(reservation.bookId);
                            const user = getUserDetails(reservation.userId);
                            return (
                                <li key={index}>
                                    {book ? book.title : ''} - {user ? user.name : ''} - {reservation.date}
                                </li>
                            )
                        })}
                    </ul>
                )
            }
        </div>
    )
}
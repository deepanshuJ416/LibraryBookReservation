import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserSelector from './UserSelector'
import BookList from './BookList'


function App() {
  const[users , setUsers] = useState([
    {id:105 , name:"Deepanshu"},
    {id:205 , name:"Abhishek"},
    {id:309 , name:"Pranav"},
   ]);
   const[selectedUserId , setSelectedUserId] = useState("")

  const[books , setBooks] = useState([
    {id:101 , title:"IT ENDS WITH US" , author:"Colleen Hoover" , isbn:"9781501175467"},
    {id:102 , title:"STOP OVERTHINKING" , author:"Jenn Sincero" , isbn:"9781501175467"},
    {id:103 , title:"THINGS WE NEVER GOT OVER" , author:"Colleen Hoover" , isbn:"9781501175467"},
    ]);
    const[reservations , setReservations] = useState([]);
    const handleReserve = (bookId) => {
      setReservations([...reservations, {bookId}]);
    }
  return (
    <div>
      <h2>Library Book Reservation System</h2>
      <UserSelector users={users} selectedUserId={selectedUserId} onSelectUser={setSelectedUserId} />
      <BookList books={books} reservations={reservations} onReserve={handleReserve} selectedUserId={selectedUserId}/>
    </div>
  )
}

export default App

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

  const[books , setBooks] = useState([
    {id:101 , title:"Book 1"},
    {id:102 , title:"Book 2"},
    {id:103 , title:"Book 3"},
  ]);
  const[selectedUserId , setSelectedUserId] = useState(205)
  return (
    <div>
      <h2>Library Book Reservation System</h2>
      <UserSelector users={users} selectedUserId={selectedUserId} onSelectUser={setSelectedUserId} />
      <BookList books={books} />
    </div>
  )
}

export default App

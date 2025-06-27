import './BookSearch.css'
import { useState } from 'react'

export default function BookSearch({onSearch}) {
    let[searchTerm , setSearchTerm] = useState("")
    function handleChange(event){
        console.log("INPUT CHANGED TO" , event.target.value);
        setSearchTerm(event.target.value);
        onSearch(event.target.value);
    }
    return (
        <div className="book-search-container">
            <h3 className="book-search-title">🔍 Search Books</h3>
            <label htmlFor="search-input" className='search-label'>Search for Books:</label>
            <input
                type="text"
                placeholder="Enter book title, author, or ISBN..."
                className='search-input'
                value={searchTerm}
                onChange={handleChange}
                id='search-input'
            />
        </div>
    )
}
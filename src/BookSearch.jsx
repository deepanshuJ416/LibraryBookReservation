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
        <div>
            <h3>Search Books</h3>
            <label htmlFor="search-input" className='search-label'>Search for Books:</label>
            <input type="text" placeholder="Search books" className='search-input' value={searchTerm} onChange={handleChange} id='search-input'/>
        </div>
    )
}
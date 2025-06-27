import './BookSearch.css'
import { useState } from 'react'
export default function BookSearch({onSearch}) {
    let[searchTerm , setSearchTerm] = useState("")
    function handleChange(event){
        console.log("INPUT CHANGED TO" , event.target.value);
        setSearchTerm(event.target.value);
    }
    function handleSearch(){
        console.log("SEARCH BUTTON CLICKED");
        console.log("SEARCHING FOR" , searchTerm);
        onSearch(searchTerm);
    }
    return (
        <div>
            <h3>Search Books</h3>
            <input type="text" placeholder="Search books" className='search-input' value={searchTerm} onChange={handleChange} />
            <button className='search-button' onClick={handleSearch}>Search</button>
        </div>
    )
}
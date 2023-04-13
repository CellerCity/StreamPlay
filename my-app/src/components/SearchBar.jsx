import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';


const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // stops the default behaviour of the browser

        // validating the search term(s) entered
        const regex = /^[\w\d\s-_]+$/i;  
        //matches any string that contains only alphanumeric characters (letters and numbers), spaces, hyphens & underscores

        if(! regex.test(searchTerm)){
            alert("The search term must contain only alphanumeric characters spaces, hyphens & underscores");
            return;
        }

        if(searchTerm){
            navigate(`/search/${searchTerm}`);
            
            setSearchTerm(""); // clears the string in the search-bar
        }

    };

  return (
    <Paper
        component="form"
        onSubmit={ handleSubmit }
        sx ={{
            borderRadius: 20,
            border: '1px solid #e3e3e3',
            pl:2,
            boxShadow: 'none',
            mr: { sm: 5 }
        }}
    >
    <input
        className='search-bar'
        placeholder='Search...'
        value={searchTerm}
        onChange={ (e) => {setSearchTerm(e.target.value)} }
    />
    <IconButton type="submit"
        sx={{
            p: '10px', color:'red'
        }}
    >
        <Search/>
    </IconButton>
    </Paper>
  )
};

export default SearchBar;
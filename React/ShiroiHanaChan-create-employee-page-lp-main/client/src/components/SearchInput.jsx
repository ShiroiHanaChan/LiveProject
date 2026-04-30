import React from 'react'
import { useSearchParams } from 'react-router-dom';
import '../css/header-search-bar.css'

export default function SearchInput() {

  const [searchParams, setSearchParams] = useSearchParams( {query: ""} );
  const searchTerm = searchParams.get("query");
  
  const handleSearch = (eventObj) => {
    setSearchParams( { query: eventObj.target.value } );
  };
  
  const handleReset = (eventObj) => {
    setSearchParams( { query: '' } );
  };

  return (
      <>
        <form action="" method="get" className="header-search-bar" >
          <label htmlFor="siteSearch">&#x1F50D;</label>
          <input type="search" id="siteSearch" name="query" value={searchTerm} onChange={handleSearch} />
          <input type="reset" id="searchReset" name="reset" onClick={handleReset} value={'X'} />
        </form>
      </>
  )
}

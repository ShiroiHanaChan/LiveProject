import React from 'react'
import { useSearchParams } from 'react-router-dom';
import '../css/header-search-bar.css'

export default function SearchInput() {

  const [searchParams, setSearchParams] = useSearchParams( {q: ""} );
  const searchTerm = searchParams.get("q");
  
  const handleSearch = (eventObj) => {
    setSearchParams( { q: eventObj.target.value } );
  };
  
  const handleReset = (eventObj) => {
    setSearchParams( { q: "" } );
  };

  return (
      <>
        <form action="" method="get" className="header-search-bar" onSubmit={(eventObj) => eventObj.preventDefault()} >
          <label htmlFor="siteSearch">&#x1F50D;</label>
          <input type="search" id="siteSearch" name="q" value={searchTerm} onChange={handleSearch} />
          <input type="reset" id="searchReset" name="reset" onClick={handleReset} value={'X'} />
        </form>
      </>
  )
}

import React from 'react'

const Search = ({filterSearch}) => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={filterSearch}/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search

import React from 'react'
import { useGlobalHook } from '../Hooks/Context'

const Search = () => {
  const { search, setSearch, isError } = useGlobalHook();

  return (
    <div>
      <section className="search-section">
        <h2>Search Your Favourite Movie</h2>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Search here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <div className="card-error">
          <p>{isError.showError && isError.errorMessage}</p>
        </div>
      </section>
    </div>
  )
}

export default Search
import "./style.css"

const SearchBar = () => {
  return (
    <>
      <div className="search-bar__container">
        <div className="search-bar__input-container ">
          <input type="text" className="search-bar__input" />
          <span className="material-symbols-outlined">search</span>
        </div> 
      </div>
    </>
  )
}

export default SearchBar;
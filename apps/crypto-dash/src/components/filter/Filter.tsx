function Filter({ filter, onFilterChange }) {
  return (
    <div className="controls">
      <label htmlFor="search">Search: </label>
      <input
        type="text"
        id="search"
        placeholder="Search for a coin..."
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
      />
    </div>
  );
}

export default Filter;

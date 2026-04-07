function Limit({ limit, onLimitChange }) {
    console.log("Limit component rendered with limit:", limit);
  return (
    <div className="controls">
      <label htmlFor="limit">Limit: </label>
      <select
        id="limit"
        value={limit}
        onChange={(e) => onLimitChange(e.target.value)}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>
  );
}

export default Limit;

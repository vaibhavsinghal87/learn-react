import type { Dispatch, SetStateAction } from "react";
import type { LimitOption } from "../../types/crypto";

interface LimitProps {
  limit: LimitOption;
  onLimitChange: Dispatch<SetStateAction<LimitOption>>;
}

function Limit({ limit, onLimitChange }: LimitProps) {
  return (
    <div className="controls">
      <label htmlFor="limit">Limit: </label>
      <select
        id="limit"
        value={limit}
        onChange={(e) => onLimitChange(e.target.value as LimitOption)}
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

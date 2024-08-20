import React from 'react';

interface FiltersProps {
  nameFilter: string;
  ageFilter: string;
  page: number;
  limit: number;
  onNameChange: (name: string) => void;
  onAgeChange: (age: string) => void;
  onPageChange: (page: number) => void;
  onLimitChange: (limit: number) => void;
}

const Filters: React.FC<FiltersProps> = ({ nameFilter, ageFilter, page, limit, onNameChange, onAgeChange, onPageChange, onLimitChange }) => {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Name"
        value={nameFilter}
        onChange={(e) => onNameChange(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={ageFilter}
        onChange={(e) => onAgeChange(e.target.value)}
      />
      <div className="pagination">
        <span>By page: </span>
        <select onChange={(e) => onLimitChange(Number(e.target.value))} value={limit}>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
          <option value={11}>11</option>
          <option value={12}>12</option>
        </select>
        <button onClick={() => onPageChange(Math.max(page - 1, 1))}>Previous</button>
        <span>page: {page} </span>
        <button onClick={() => onPageChange(page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default Filters;

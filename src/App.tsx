import React, { useState } from 'react';
import UserList from './components/UserList';
import Filters from './components/Filters';

const App: React.FC = () => {
  const [nameFilter, setNameFilter] = useState<string>('');
  const [ageFilter, setAgeFilter] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(4);

  return (
    <div className="app-container">
      <Filters
        nameFilter={nameFilter}
        ageFilter={ageFilter}
        page={page}
        limit={limit}
        onNameChange={setNameFilter}
        onAgeChange={setAgeFilter}
        onPageChange={setPage}
        onLimitChange={setLimit}
      />
      <UserList
        nameFilter={nameFilter}
        ageFilter={ageFilter}
        page={page}
        limit={limit}
      />
    </div>
  );
};

export default App;

import React, { useEffect, useState } from 'react';
import { requestUsers, User, requestUsersWithError } from '../api';

interface UserListProps {
  nameFilter: string;
  ageFilter: string;
  page: number;
  limit: number;
  simulateError?: boolean; 
}

const UserList: React.FC<UserListProps> = ({ nameFilter, ageFilter, page, limit, simulateError = false }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const offset = (page - 1) * limit;
        const result = simulateError
          ? await requestUsersWithError({ name: nameFilter, age: ageFilter, limit, offset })
          : await requestUsers({ name: nameFilter, age: ageFilter, limit, offset });

        if (result.length === 0) {
          setUsers([]);
        } else {
          setUsers(result);
        }
      } catch (err) {
        setError(err as string);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [nameFilter, ageFilter, page, limit, simulateError]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;
  if (users.length === 0 && !loading && !error) return <p>Users not found</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}, {user.age}</li>
      ))}
    </ul>
  );
};

export default UserList;

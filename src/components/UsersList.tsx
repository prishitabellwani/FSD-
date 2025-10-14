import React, { useEffect, useState } from 'react';
import { api } from '../lib/api';

interface User {
  _id: string;
  username: string;
  email: string;
}

const UsersList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
      const data = await api('/api/auth');
        setUsers(data);
      } catch (err) {
        setError('Failed to fetch users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Users List</h2>
      <ul className="list-disc pl-5">
        {users.map(user => (
          <li key={user._id}>
            <strong>{user.username}</strong> ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;

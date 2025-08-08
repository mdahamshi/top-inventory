// pages/BookList.jsx
import api from '../api/urls';
import {useCrud} from '@sarawebs/sb-hooks';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Book from './Book';

export default function BookList() {
  const { data: books, load, remove, loading, error } = useCrud(api.books);
  const navigate = useNavigate();
  const handleUpdate = async (id, updatedBook) => {
    await update(id, updatedBook);
    await load(); 
  };
  useEffect(() => {
    load();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <ul className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      {books.map((book) => (
        <li key={book.id} className="h-full">
          <Book book={book} />
        </li>
      ))}
    </ul>
  );
}

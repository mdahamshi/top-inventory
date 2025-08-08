import { Check, Trash, SquarePen, CheckCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import api from '../api/urls';
import {useCrud} from '@sarawebs/sb-hooks';
import { useState } from 'react';

export default function Book({ book }) {
  const navigate = useNavigate();
  const { remove, update } = useCrud(api.books);
  const [localBook, setLocalBook] = useState(book); // use local copy

  const handleMarkUnread = async () => {
    const updated = { ...localBook, status: 'read' };
    await update(localBook.id, updated);
    setLocalBook(updated); 
  };

  return (
    <div className="border-l-8 border-primary card h-full flex flex-col justify-between">
      <header className="text-2xl font-bold">{localBook.title}</header>
      <p>{localBook.description}</p>
      <p><strong>Category:</strong> {localBook.category_name}</p>
      <p><strong>Status:</strong> {localBook.status}</p>

      <footer>
        <div className="flex gap-4 justify-end">
          <SquarePen
            className="dark:stroke-white clickable"
            onClick={() =>
              navigate(`/books/${localBook.id}/edit`, { state: { book: localBook } })
            }
          />
          <Trash
            className="dark:stroke-white clickable"
            onClick={() => remove(localBook.id)}
          />
          <CheckCheck
            className="dark:stroke-white clickable"
            onClick={handleMarkUnread}
          />
        </div>
      </footer>
    </div>
  );
}

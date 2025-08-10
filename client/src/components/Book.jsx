import React, { useMemo } from 'react';
import {
  Eye,
  Notebook,
  Check,
  Trash,
  SquarePen,
  EyeOff,
  CheckCheck,
} from 'lucide-react';
import { getRandomColor } from '@sarawebs/sb-utils';
import Icon from '@mdi/react';
import { mdiBookAlphabet, mdiBookClock, mdiBookOff } from '@mdi/js';
import { useNavigate } from 'react-router-dom';

const Book = React.memo(function Book({ book, update, remove }) {
  const navigate = useNavigate();
  const statuses = ['unread', 'reading', 'read'];
  console.log('Render Book:', book.id);

  const statusIcons = {
    unread: mdiBookAlphabet,
    reading: mdiBookClock,
    read: mdiBookOff,
  };
  const StatusIcon = statusIcons[book.status] || mdiBookAlphabet;

  const handleToggleStatus = async () => {
    const currentIndex = statuses.indexOf(book.status);
    const nextStatus = statuses[(currentIndex + 1) % statuses.length];
    const updated = {
      ...book,
      status: nextStatus,
      authors: book.authors ? book.authors.map((a) => a.id) : [],
    };
    await update(book.id, updated);
  };

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${book.title}"?`)) {
      remove(book.id);
    }
  };
  const strokeColor = useMemo(() => getRandomColor(), [book.id]);

  return (
    <div className="border-l-8 border-primary card h-full flex flex-col justify-between">
      <header className="text-2xl font-bold flex items-center gap-2">
        {book.title}
      </header>
      <p>{book.description}</p>
      <p>
        <strong>Category:</strong> {book.category?.name}
      </p>
      <h3 className="font-bold">Authors:</h3>
      <ul className="list-disc pl-5">
        {book.authors?.map((author) => (
          <li key={author.id}>{author.name}</li>
        ))}
      </ul>

      <p>
        <strong>Status:</strong> {book.status}
      </p>
      <div>
        <Icon
          color={strokeColor}
          title={`Status: ${book.status}`}
          path={StatusIcon}
        />
      </div>
      <footer>
        <div className="flex gap-4 justify-end">
          <span title="Edit" className="clickable">
            <SquarePen
              className="dark:stroke-white clickable"
              onClick={() => navigate(`/books/${book.id}/edit`)}
            />
          </span>
          <span title="Delete" className="clickable">
            <Trash
              className="dark:stroke-white clickable"
              onClick={handleDelete}
            />
          </span>
          <span title={`Status: ${book.status}`} className="clickable">
            <Icon
              onClick={handleToggleStatus}
              title={`Status: ${book.status}`}
              path={StatusIcon}
              size={1}
            />
          </span>
        </div>
      </footer>
    </div>
  );
});

export default Book;

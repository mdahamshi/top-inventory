// pages/BookList.jsx
import api from '../api/urls';
import { useCrud } from '@sarawebs/sb-hooks';
import { useEffect, useCallback } from 'react';
import Book from './Book';

import ListWrapper from './ListWrapper';

export default function BookList() {
  const {
    data: books,
    load,
    remove,
    update,
    loading,
    error,
  } = useCrud(api.books);

  useEffect(() => {
    load();
  }, []);

  return (
    <ListWrapper
      title="Books"
      items={books}
      loading={loading}
      error={error}
      renderItem={(book) => (
        <Book book={book} update={update} remove={remove} />
      )}
    />
  );
}

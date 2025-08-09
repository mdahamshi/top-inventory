// AuthorsList.jsx
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import EntityList from './EntityList';

export default function AuthorList() {
  const {
    authors,
    authorsLoading,
    authorsError,
    createAuthor,
    updateAuthor,
    deleteAuthor,
  } = useContext(DataContext);

  return (
    <EntityList
      title="Authors"
      items={authors}
      loading={authorsLoading}
      error={authorsError}
      createItem={createAuthor}
      updateItem={updateAuthor}
      deleteItem={deleteAuthor}
      className='card'
    />
  );
}

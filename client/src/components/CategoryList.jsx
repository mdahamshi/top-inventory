// CategoriesList.jsx
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import EntityList from './EntityList';

export default function CategoryList() {
  const {
    categories,
    categoriesLoading,
    categoriesError,
    createCategory,
    updateCategory,
    deleteCategory,
  } = useContext(DataContext);

  return (
    <EntityList
      title="Categories"
      items={categories}
      loading={categoriesLoading}
      error={categoriesError}
      createItem={createCategory}
      updateItem={updateCategory}
      deleteItem={deleteCategory}
      className='card'
    />
  );
}

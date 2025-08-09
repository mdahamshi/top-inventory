import React, { createContext, useEffect } from 'react';
import { useCrud } from '@sarawebs/sb-hooks';
import api from '../api/urls';

export const DataContext = createContext();

export function DataProvider({ children }) {
  const categoriesApi = useCrud(api.categories);
  const authorsApi = useCrud(api.authors);

  useEffect(() => {
    categoriesApi.load();
    authorsApi.load();
  }, []);

  return (
    <DataContext.Provider
      value={{
        categories: categoriesApi.data,
        authors: authorsApi.data,
        categoriesLoading: categoriesApi.loading,
        authorsLoading: authorsApi.loading,
        categoriesError: categoriesApi.error,
        authorsError: authorsApi.error,
        createCategory: categoriesApi.create,
        updateCategory: categoriesApi.update,
        deleteCategory: categoriesApi.remove,
        createAuthor: authorsApi.create,
        updateAuthor: authorsApi.update,
        deleteAuthor: authorsApi.remove,
        searchCategory: categoriesApi.search,
        searchAuthors: authorsApi.search,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

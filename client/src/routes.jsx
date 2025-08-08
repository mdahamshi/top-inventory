import Errorpage from './pages/Errorpage';
import { createRoutesFromElements, Route } from 'react-router-dom';
import React from 'react';
import Root from './pages/Root';
import Home from './pages/Home';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
export const routefromelement = createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route errorElement={<Errorpage />}>
      <Route index element={<Home />} />
      <Route path="/books" element={<BookList />} />
      <Route path="/books/new" element={<BookForm />} />
      <Route path="/books/:id/edit" element={<BookForm />} />
      <Route path="*" element={<Errorpage />} />
    </Route>
  </Route>
);

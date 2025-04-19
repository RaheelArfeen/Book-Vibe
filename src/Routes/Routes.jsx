import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import PagesToRead from '../Pages/PagesToRead/PagesToRead';
import bookDetail from '../Pages/bookDetail/bookDetail';
import ReadList from '../Pages/ReadList/ReadList';

export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {index: true, path: '/', Component: Home, loader:()=>fetch('/booksData.json')},
        {path: '/bookDetail/:id', Component: bookDetail, loader:()=>fetch('/booksData.json')},
        {path: '/readList', Component: ReadList, loader:()=>fetch('/booksData.json')},
        {path: '/pagesToRead', Component: PagesToRead}
      ]
    },
]);
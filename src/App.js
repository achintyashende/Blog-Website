import logo from './logo.svg';
import React from 'react';
import Header from './components/Header.jsx';
import Blogs from "./components/Blogs.jsx";
import Pagination from "./components/Pagination.jsx";
import { useContext, useEffect } from'react';
import { AppContext } from './context/AppContext';

export default function App() {

  const { fetchBlogPosts } = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <div className='w-full bg-slate-50 h-full flex flex-col gap-y-1 justify-center'>
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}

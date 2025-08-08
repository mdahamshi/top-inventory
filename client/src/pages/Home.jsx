import { useState } from 'react';

import { useApp } from '../context/AppContext';
import { MessageCircle } from 'lucide-react';
import NewMessage from '../components/NewMessage';
import BookList from '../components/BookList';
import { Button } from 'flowbite-react';

export default function Home() {
  const { appName } = useApp();
  const [open, setModal] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-4xl font-bold mb-4 text-primary">
        Welcome to the {appName}
      </h1>

      <section >
        <div className="flex mb-20  flex-col  gap-4 mx-auto ">
          <h2>Books</h2>
          <button onClick={() => navigate('/books/new')}>+ Add Book</button>
          <BookList />
        </div>
      </section>
      <section className=" dark:text-white ">
        <h2>
          Visit{' '}
          <a
            aria-label="Git Repo"
            href="https://github.com/mdahamshi/top-basic-msg-full"
          >
            Git Repo
          </a>{' '}
          for more information
        </h2>
      </section>
      <Button
        className="fixed bottom-4 p-0 right-4 z-50 shadow-lg bg-primary text-white hover:bg-primary/70 w-14 h-14 rounded-full flex items-center justify-center"
        onClick={() => {
          if (location.pathname !== '/new') {
            window.history.replaceState(null, '', '/new');
            setModal(true);
          }
        }}
      >
        <MessageCircle size={24} strokeWidth={3}></MessageCircle>
      </Button>
    </div>
  );
}

import { useState } from 'react';

import { useApp } from '../context/AppContext';
import { MessageCircle } from 'lucide-react';
import BookList from '../components/BookList';
import { Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
export default function Home() {
  const { appName } = useApp();
  const [open, setModal] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-4xl font-bold mb-8 text-primary">
        Welcome to the {appName}
      </h1>

      <section>
        <div className="flex mb-20  flex-col  gap-4 mx-auto ">
          <BookList />
        </div>
      </section>
      <section className=" dark:text-white ">
        <h2>
          Visit{' '}
          <a
            aria-label="Git Repo"
            href="https://github.com/mdahamshi/top-inventory"
          >
            Git Repo
          </a>{' '}
          for more information
        </h2>
      </section>

    </div>
  );
}

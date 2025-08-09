import React from 'react';

export default function Footer({ left, right, children }) {
  return (
    <footer className="mt-auto justify-center flex p-2 bg-white dark:text-white dark:bg-primaryDark">
      {left && <div>{left}</div>}
      <div>{children}</div>
      {right && <div>{right}</div>}
    </footer>
  );
}

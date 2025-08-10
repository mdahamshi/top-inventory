// src/components/ListWrapper.jsx
import React from 'react';

export default function ListWrapper({
  title = 'Items',
  items = [],
  loading = false,
  error = null,
  renderItem,
  gridClassName = 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5',
}) {
  if (loading) return <p>Loading {title}...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  if (!items.length) return <p>No {title.toLowerCase()} found.</p>;

  return (
    <ul className={gridClassName}>
      {items.map((item) => (
        <div key={item.id}>{renderItem(item)}</div>
      ))}
    </ul>
  );
}

import { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import api from '../api/urls';
import { useCrud } from '@sarawebs/sb-hooks';
import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { Save } from 'lucide-react';
import CategorySelect from './CategorySelect';
import AuthorSelect from './AuthorSelect';
import EntitySelect from './EntitySelect';

export default function BookForm() {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();

  const { loadOne, create, update, loading, error } = useCrud(api.books);
  const [book, setBook] = useState({
    title: '',
    description: '',
    category_id: null,
    category: null,
  });

  useEffect(() => {
    let isMounted = true;

    if (isEdit) {
      loadOne(id).then((book) => {
        if (isMounted && book) setBook(book);
      });
    }
    return () => {
      isMounted = false;
    };
  }, [isEdit, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!book.category_id) {
      alert('Please select a category.');
      return;
    }
    const payload = {
      title: book.title,
      description: book.description,
      category_id: book.category_id,
      status: book.status,
      authors: book.authors ? book.authors.map((a) => a.id) : [],
    };

    try {
      if (isEdit) {
        await update(id, payload);
      } else {
        await create(payload);
      }
    } catch (err) {
      console.error(err);
    } finally {
      navigate('/');
    }
  };

  if (loading && isEdit) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (isEdit && !book.title) return <p>Loading book data...</p>;
  return (
    <div className="card ">
      <h2 className="text-2xl font-bold mb-4">
        {isEdit ? 'Edit' : 'Add'} Book
      </h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="title" value="Book title" />
          <TextInput
            id="title"
            type="text"
            value={book.title}
            onChange={(e) =>
              setBook((prev) => ({ ...prev, title: e.target.value }))
            }
            required
            placeholder="Enter book title"
          />
        </div>

        <div>
          <Label htmlFor="description" value="Description" />
          <Textarea
            id="description"
            rows={4}
            value={book.description}
            onChange={(e) =>
              setBook((prev) => ({ ...prev, description: e.target.value }))
            }
            required
            placeholder="Enter a short description"
          />
        </div>

        <EntitySelect
          apiUrl={api.categories}
          isMulti={false}
          value={
            book.category
              ? { value: book.category.id, label: book.category.name }
              : null
          }
          onChange={(selected) =>
            setBook((prev) => ({
              ...prev,
              category_id: selected ? selected.value : null,
              category: selected
                ? { id: selected.value, name: selected.label }
                : null,
            }))
          }
          placeholder="Search and select category..."
        />

        <EntitySelect
          apiUrl={api.authors}
          isMulti={true}
          value={
            book.authors?.map((a) => ({
              value: a.id,
              label: a.name,
            })) || []
          }
          onChange={(selected) =>
            setBook((prev) => ({
              ...prev,
              authors: selected.map((s) => ({
                id: s.value,
                name: s.label,
              })),
            }))
          }
          placeholder="Search and select author..."
        />

        <div className="w-full flex justify-end">
          <Button type="submit" className="btn-primary" disabled={loading}>
            {isEdit ? 'Update' : 'Create'} <Save className="ml-2" />
          </Button>
        </div>
      </form>
    </div>
  );
}

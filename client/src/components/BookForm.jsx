import { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import api from '../api/urls';
import {useCrud} from '@sarawebs/sb-hooks';
import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { Save } from 'lucide-react';


export default function BookForm() {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const location = useLocation();
  const navigate = useNavigate();

  const {  loadOne, create, update, loading, error } = useCrud(api.books);
  const [book, setBook] = useState({
    title: '',
    description: '',
  });

  // Hybrid: use location.state first
  useEffect(() => {
    const bookFromState = location.state?.book;
    if (isEdit) {
      if (bookFromState) {
        setBook(bookFromState);
      } else {
        // Fallback to API
        loadOne(id).then((book) => {
          setBook(book);
        });
      }
    }
  }, [isEdit, id, location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = book;

    try {
      if (isEdit) {
        await update(id, payload);
      } else {
        await create(payload);
      }
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  if (loading && isEdit) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

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

        <div className="w-full flex justify-end">
          <Button type="submit" className="btn-primary">
            {isEdit ? 'Update' : 'Create'} <Save className="ml-2" />
          </Button>
        </div>
      </form>
    </div>
  );
}

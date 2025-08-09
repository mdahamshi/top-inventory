import { useState } from 'react';
import { Button, TextInput } from 'flowbite-react';
import ListWrapper from './ListWrapper';

import Icon from '@mdi/react';
import { mdilContentSave } from '@mdi/light-js';

export default function EntityList({
  title,
  items,
  loading,
  error,
  createItem,
  updateItem,
  className = '',
  deleteItem,
  itemLabel = 'name',
}) {
  const [newName, setNewName] = useState('');
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState('');

  const handleAdd = async () => {
    if (!newName.trim()) return;
    await createItem({ [itemLabel]: newName.trim() });
    setNewName('');
  };

  const handleEditStart = (id, name) => {
    setEditId(id);
    setEditName(name);
  };

  const handleUpdate = async () => {
    if (!editName.trim()) return;
    await updateItem(editId, { [itemLabel]: editName.trim() });
    setEditId(null);
    setEditName('');
  };

  const handleCancelEdit = () => {
    setEditId(null);
    setEditName('');
  };

  const handleDelete = async (id) => {
    if (window.confirm(`Are you sure you want to delete this ${title.toLowerCase()}?`)) {
      await deleteItem(id);
      if (editId === id) handleCancelEdit();
    }
  };

  const renderItem = ({ id, [itemLabel]: name }) => (
    <li key={id} className={className + " flex items-center gap-3"}>
      {editId === id ? (
        <>
          <TextInput
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            className="flex-grow"
          />
          
          <Button size="sm" className="btn-primary" onClick={handleUpdate}>

            Save
            <Icon path={mdilContentSave} className="ml-2" size={1} />
          </Button>
          <Button size="sm" className="btn-secondry" onClick={handleCancelEdit}>
            Cancel
          </Button>
        </>
      ) : (
        <>
          <span className="flex-grow">{name}</span>
          <Button size="sm" className="btn-primary" onClick={() => handleEditStart(id, name)}>
            Edit
          </Button>
          <Button size="sm" color="red"  onClick={() => handleDelete(id)}>
            Delete
          </Button>
        </>
      )}
    </li>
  );

  return (
    <div className="p-4 max-w-md mx-auto w-full">
      <h2 className="text-xl font-bold mb-4">{title}</h2>

      <ListWrapper
        title={title}
        items={items}
        loading={loading}
        error={error}
        renderItem={renderItem}
        gridClassName="flex flex-col  space-y-2 list-none p-0"
      />

      <div className="flex justify-center gap-2 mt-10">
        <TextInput
          placeholder={`New ${title.slice(0, -1).toLowerCase()} name`}
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <Button className="btn-primary self-center" onClick={handleAdd}>Add</Button>
      </div>
    </div>
  );
}

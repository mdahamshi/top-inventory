// src/components/AuthorSelect.jsx
import AsyncSelect from 'react-select/async';
import { useCrud } from '@sarawebs/sb-hooks';
import api from '../api/urls';
const customStyles = {
  control: (provided, state) => ({
    ...provided,
    borderColor: 'hsl(var(--primary))',
    '&:hover': {
      borderColor: 'hsl(var(--primary))',
    },
    // Remove blue outline or default focus styles
    outline: 'none',
    boxShadow: state.isFocused ? `0 0 0 1px hsl(var(--primary))` : 'none',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isActive
      ? 'hsl(var(--primary) / 0.4)' // active click with slight opacity
      : state.isFocused
        ? 'hsl(var(--primary) / 0.3)' // lighter background on focus
        : 'white',
    color: 'inherit',
    ':active': {
      backgroundColor: 'hsl(var(--primary) / 0.4)', // override default blue on click-and-hold
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'inherit',
  }),
};

export default function AuthorSelect({
  value = [],
  onChange,
  placeholder = 'Search and select author...',
}) {
  const authorCrud = useCrud(api.authors);

  const loadAuthorOptions = async (inputValue = '') => {
    const result = await authorCrud.search(inputValue);
    return result.map((a) => ({
      value: a.id,
      label: a.name,
    }));
  };

  return (
    <AsyncSelect
      isMulti
      cacheOptions
      styles={customStyles}
      defaultOptions
      loadOptions={loadAuthorOptions}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

// src/components/CategorySelect.jsx
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

export default function CategorySelect({
  value,
  onChange,
  placeholder = 'Search and select category...',
}) {
  const categoryCrud = useCrud(api.categories);

  const loadCategoryOptions = async (inputValue = '') => {
    const result = await categoryCrud.search(inputValue);
    return result.map((cat) => ({
      value: cat.id,
      label: cat.name,
    }));
  };

  return (
    <AsyncSelect
      cacheOptions
      defaultOptions
      loadOptions={loadCategoryOptions}
      value={value}
      onChange={onChange}
      styles={customStyles}
      placeholder={placeholder}
    />
  );
}

// src/components/EntitySelect.jsx
import AsyncSelect from 'react-select/async';
import { useCrud } from '@sarawebs/sb-hooks';

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    borderColor: 'hsl(var(--primary))',
    '&:hover': {
      borderColor: 'hsl(var(--primary))',
    },
    outline: 'none',
    boxShadow: state.isFocused ? `0 0 0 1px hsl(var(--primary))` : 'none',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isActive
      ? 'hsl(var(--primary) / 0.4)'
      : state.isFocused
      ? 'hsl(var(--primary) / 0.3)'
      : 'white',
    color: 'inherit',
    ':active': {
      backgroundColor: 'hsl(var(--primary) / 0.4)',
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'inherit',
  }),
};

export default function EntitySelect({
  apiUrl,
  isMulti = false,
  value,
  onChange,
  placeholder,
}) {
  const crud = useCrud(apiUrl);

  const loadOptions = async (inputValue = '') => {
    const result = await crud.search(inputValue);
    return result.map((item) => ({
      value: item.id,
      label: item.name,
    }));
  };

  return (
    <AsyncSelect
      isMulti={isMulti}
      cacheOptions
      defaultOptions
      loadOptions={loadOptions}
      value={value}
      onChange={onChange}
      styles={customStyles}
      placeholder={placeholder}
    />
  );
}

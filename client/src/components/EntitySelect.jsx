import { useEffect, useState } from 'react';
import AsyncSelect from 'react-select/async';
import { useCrud } from '@sarawebs/sb-hooks';
import { useTheme } from '@sarawebs/sb-hooks';
import { useApp } from '../context/AppContext';

export default function EntitySelect({
  apiUrl,
  isMulti = false,
  value,
  onChange,
  placeholder,
}) {
  const crud = useCrud(apiUrl);
  const [isDark, setIsDark] = useState(false);
  const { theme } = useApp();

  useEffect(() => {
    setIsDark(theme === 'dark');
  }, [theme]);

  const loadOptions = async (inputValue = '') => {
    const result = await crud.search(inputValue);
    return result.map((item) => ({
      value: item.id,
      label: item.name,
    }));
  };

  const customStyles = {
    control: (base) => ({
      ...base,
      backgroundColor: isDark ? '#374151' : 'white', // bg-gray-700 dark / white light
      color: isDark ? 'white' : 'black',
      borderColor: isDark ? '9ca3af' : 'hsl(var(--primary))',
      boxShadow: isDark ? '0 0 0 1px hsl(var(--primary))' : 'none',
      '&:hover': {
        borderColor: 'hsl(var(--primary))',
      },
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: isDark
        ? state.isFocused || state.isSelected
          ? '#4b5563' // slightly lighter gray than #374151
          : '#374151'
        : state.isFocused || state.isSelected
          ? 'hsl(var(--primary) / 0.4)'
          : 'white',
      color: isDark ? 'white' : 'black',
      cursor: 'pointer',
    }),
    singleValue: (base) => ({
      ...base,
      color: isDark ? 'white' : 'black',
    }),
    placeholder: (base) => ({
      ...base,
      color: isDark ? '#9ca3af' : '#6b7280', // gray-400 dark and gray-500 light
    }),
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
      theme={(theme) => ({
        ...theme,
        borderRadius: 6,
        colors: {
          ...theme.colors,
          primary: 'hsl(var(--primary))',
          primary25: 'hsl(var(--primary) / 0.3)',
          primary50: 'hsl(var(--primary) / 0.4)',
        },
      })}
    />
  );
}

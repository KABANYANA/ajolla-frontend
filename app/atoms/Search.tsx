import React from 'react';

interface SearchBarProps {
  searchQuery: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, handleSearchChange, placeholder }) => {
  return (
    <div className='mb-8'>
      <input
        type='text'
        className='px-7 py-3  bg-gray-100 rounded ml-96 w-1/3'
        placeholder={placeholder}
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </div>
  );
};


export default SearchBar;












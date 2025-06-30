import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
  realTime?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({ 
  onSearch, 
  placeholder = "Search articles...",
  className = "",
  realTime = false
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (realTime) {
      // Debounce the search to avoid excessive API calls
      const timeoutId = setTimeout(() => {
        onSearch(query);
      }, 150);

      return () => clearTimeout(timeoutId);
    }
  }, [query, onSearch, realTime]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!realTime) {
      onSearch(query);
    }
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    
    // For real-time search, the useEffect will handle the search
    // For non-real-time, we only search on form submit
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors duration-200"
            aria-label="Clear search"
          >
            <X className="h-4 w-4 text-gray-400" />
          </button>
        )}
      </div>
      {!realTime && (
        <button
          type="submit"
          className="sr-only"
          aria-label="Search"
        >
          Search
        </button>
      )}
    </form>
  );
};

import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
  };
  
  return (
    <div className="w-full max-w-2xl mx-auto mt-6">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-3 pl-5 pr-12 bg-black/30 backdrop-blur-md border border-white/10 rounded-full text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-white/20"
          placeholder="Search the web..."
        />
        <button 
          type="submit" 
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white"
        >
          <Search size={20} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

import React, { useState } from 'react';

const FilterControls = ({ onFilter, autoFilter }) => {
  const [filters, setFilters] = useState({ name: '', industry: '', location: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    if (autoFilter) {
      onFilter(newFilters);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onFilter(filters);
  };


  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-5 relative group hover:shadow-xl transition-all duration-200">
          <label className="absolute -top-2.5 left-3 px-2 py-0.5 rounded-md text-sm font-medium bg-purple-500 text-white shadow-sm" htmlFor="filter-name">
            Company Name
          </label>
          <div className="flex items-center">
            <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              id="filter-name"
              name="name"
              value={filters.name}
              onChange={handleChange}
              placeholder="Search by name..."
              className="w-full bg-transparent border-none focus:outline-none text-gray-800 placeholder-gray-500 font-medium py-1"
            />
          </div>
        </div>

        <div className="glass-card p-5 relative group hover:shadow-xl transition-all duration-200">
          <label className="absolute -top-2.5 left-3 px-2 py-0.5 rounded-md text-sm font-medium bg-blue-500 text-white shadow-sm" htmlFor="filter-industry">
            Industry Type
          </label>
          <div className="flex items-center">
            <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <input
              id="filter-industry"
              name="industry"
              value={filters.industry}
              onChange={handleChange}
              placeholder="Filter by industry..."
              className="w-full bg-transparent border-none focus:outline-none text-gray-800 placeholder-gray-500 font-medium py-1"
            />
          </div>
        </div>

        <div className="glass-card p-5 relative group hover:shadow-xl transition-all duration-200">
          <label className="absolute -top-2.5 left-3 px-2 py-0.5 rounded-md text-sm font-medium bg-indigo-500 text-white shadow-sm" htmlFor="filter-location">
            Location
          </label>
          <div className="flex items-center">
            <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <input
              id="filter-location"
              name="location"
              value={filters.location}
              onChange={handleChange}
              placeholder="Filter by location..."
              className="w-full bg-transparent border-none focus:outline-none text-gray-800 placeholder-gray-500 font-medium py-1"
            />
          </div>
        </div>
      </div>

      {!autoFilter && (
        <div className="mt-6 flex justify-end">
          <button type="submit" className="glass-button">
            Apply Filters
          </button>
        </div>
      )}
    </form>
  );
};

export default FilterControls;

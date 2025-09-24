import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const initialState = {
	name: '',
	industry: '',
	location: '',
	size: '',
	founded: '',
	description: ''
};

const CompanyForm = ({ onSubmit, editingCompany, onCancel, formLoading }) => {
	const [form, setForm] = useState(initialState);

	useEffect(() => {
		if (editingCompany) {
			setForm({ ...editingCompany });
		} else {
			setForm(initialState);
		}
	}, [editingCompany]);

	const handleChange = e => {
		const { name, value } = e.target;
		setForm(prev => ({ ...prev, [name]: value }));
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (!form.name) {
			toast.error('Name is required');
			return;
		}
		const payload = {
			...form,
			size: form.size !== '' ? Number(form.size) : undefined,
			founded: form.founded !== '' ? Number(form.founded) : undefined
		};
		onSubmit(payload);
		setForm(initialState);
	};

		return (
      <form className="glass-card p-8 mb-8" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          {editingCompany ? 'Edit Company' : 'Add New Company'}
        </h2>
        {formLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-purple-500"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Acme Corp"
                  className="w-full bg-white/90 border border-purple-300 shadow rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition text-gray-800 placeholder-gray-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Industry
                </label>
                <input
                  name="industry"
                  value={form.industry}
                  onChange={handleChange}
                  placeholder="e.g. Technology, Finance"
                  className="w-full bg-white/90 border border-purple-300 shadow rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition text-gray-800 placeholder-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="e.g. New York, USA"
                  className="w-full bg-white/90 border border-purple-300 shadow rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition text-gray-800 placeholder-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Number of Employees
                </label>
                <input
                  name="size"
                  value={form.size}
                  onChange={handleChange}
                  placeholder="e.g. 250"
                  type="number"
                  className="w-full bg-white/90 border border-purple-300 shadow rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition text-gray-800 placeholder-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Year Established
                </label>
                <input
                  name="founded"
                  value={form.founded}
                  onChange={handleChange}
                  placeholder="e.g. 2001"
                  type="number"
                  className="w-full bg-white/90 border border-purple-300 shadow rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition text-gray-800 placeholder-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <input
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="e.g. Leading provider of..."
                  className="w-full bg-white/90 border border-purple-300 shadow rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition text-gray-800 placeholder-gray-500"
                />
              </div>
            </div>
            <div className="mt-8 flex gap-3">
              <button type="submit" className="glass-button">
                {editingCompany ? 'Update' : 'Add'} Company
              </button>
              {editingCompany && (
                <button
                  type="button"
                  className="glass-button-secondary"
                  onClick={onCancel}
                >
                  Cancel
                </button>
              )}
            </div>
          </>
        )}
      </form>
	);
};

export default CompanyForm;

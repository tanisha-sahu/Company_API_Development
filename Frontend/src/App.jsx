import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CompanyList from './components/CompanyList';
import CompanyForm from './components/CompanyForm';
import CompanyModal from './components/CompanyModal';
import FilterControls from './components/FilterControls';
import { getCompanies, createCompany, updateCompany, deleteCompany } from './services/companyAPI';

const App = () => {
  const [companies, setCompanies] = useState([]);
  const [editingCompany, setEditingCompany] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [filters, setFilters] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

	const fetchCompanies = async (filters = {}) => {
		setLoading(true);
		try {
			const data = await getCompanies(filters);
			setCompanies(data);
		} catch (err) {
			toast.error('Failed to fetch companies');
		}
		setLoading(false);
	};

	useEffect(() => {
		fetchCompanies(filters);
	}, [filters]);

	const handleAddOrUpdate = async (company) => {
		setFormLoading(true);
		try {
			if (editingCompany) {
				await updateCompany(editingCompany._id, company);
				toast.success('Company updated');
			} else {
				await createCompany(company);
				toast.success('Company added');
			}
			setEditingCompany(null);
			setShowForm(false);
			fetchCompanies(filters);
		} catch (err) {
			toast.error('Failed to save company');
		}
		setFormLoading(false);
	};

	const handleEdit = (company) => {
		setEditingCompany(company);
		setShowForm(true);
	};

	const handleDelete = async (id) => {
		try {
			await deleteCompany(id);
			fetchCompanies(filters);
		} catch (err) {
			toast.error('Failed to delete company');
		}
		setShowConfirm(false);
		setDeleteId(null);
	};

	const handleCancelEdit = () => {
		setEditingCompany(null);
		setShowForm(false);
	};

	const handleFilter = (newFilters) => {
		setFilters(newFilters);
	};

	return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 drop-shadow-lg pb-2">
          Companies Management
        </h1>
        
        {!showForm && (
          <div className="flex justify-center mb-8">
            <button
              className="glass-button"
              onClick={() => {
                setShowForm(true);
                setEditingCompany(null);
              }}
            >
              Add Company
            </button>
          </div>
        )}

        <div
          className={`relative transition-all duration-300 ease-in-out ${
            showForm
              ? 'opacity-100 translate-y-0 mb-8'
              : 'opacity-0 -translate-y-4 mb-0 pointer-events-none'
          }`}
        >
          {showForm && (
            <>
              <CompanyForm
                onSubmit={handleAddOrUpdate}
                editingCompany={editingCompany}
                onCancel={handleCancelEdit}
                formLoading={formLoading}
              />
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
                onClick={handleCancelEdit}
                aria-label="Close form"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </>
          )}
        </div>

        <div className="mb-8">
          <FilterControls onFilter={handleFilter} autoFilter />
        </div>
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-purple-500"></div>
          </div>
        ) : (
          <CompanyList
            companies={companies}
            onEdit={handleEdit}
            onDelete={(id) => {
              setShowConfirm(true);
              setDeleteId(id);
            }}
            onViewDetails={(company) => setSelectedCompany(company)}
          />
        )}

        {showConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300" onClick={() => { setShowConfirm(false); setDeleteId(null); }} />
            <div className="relative bg-white/80 backdrop-blur-lg border border-white/40 rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 flex flex-col items-center animate-fadeIn">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-red-400 to-pink-500 mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">Delete Company?</h3>
              <p className="mb-6 text-gray-600">Are you sure you want to delete this company? This action cannot be undone.</p>
              <div className="flex gap-4 justify-center w-full">
                <button
                  className="glass-button-secondary w-1/2"
                  onClick={() => {
                    setShowConfirm(false);
                    setDeleteId(null);
                  }}
                >
                  Cancel
                </button>
                <button
                  className="glass-button w-1/2 bg-gradient-to-r from-red-500 to-pink-500"
                  onClick={() => handleDelete(deleteId)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}

        {selectedCompany && (
          <CompanyModal
            company={selectedCompany}
            onClose={() => setSelectedCompany(null)}
          />
        )}

        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </div>
	);
};

export default App;

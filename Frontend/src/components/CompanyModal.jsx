import React from 'react';

const CompanyModal = ({ company, onClose }) => {
  if (!company) return null;

  return (
    <div className="glass-modal">
      <div className="glass-modal-overlay" onClick={onClose} />
      <div className="glass-modal-content">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">{company.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
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
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-gray-700">Industry</h3>
            <p className="text-gray-600">{company.industry}</p>
          </div>

          <div className="glass-divider" />

          <div>
            <h3 className="text-lg font-medium text-gray-700">Location</h3>
            <p className="text-gray-600">{company.location}</p>
          </div>

          <div className="glass-divider" />

          <div>
            <h3 className="text-lg font-medium text-gray-700">Company Size</h3>
            <p className="text-gray-600">{company.size} employees</p>
          </div>

          <div className="glass-divider" />

          <div>
            <h3 className="text-lg font-medium text-gray-700">Founded</h3>
            <p className="text-gray-600">{company.founded}</p>
          </div>

          <div className="glass-divider" />

          <div>
            <h3 className="text-lg font-medium text-gray-700">Description</h3>
            <p className="text-gray-600">{company.description}</p>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button onClick={onClose} className="glass-button-secondary">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyModal;
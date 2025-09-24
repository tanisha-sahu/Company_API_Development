import React from 'react';
import { toast } from 'react-toastify';

const CompanyList = ({ companies, onEdit, onDelete, onViewDetails }) => {
  if (!companies.length) {
    return (
      <div className="glass-card p-8 text-center text-gray-500">
        No companies found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {companies.map(company => (
        <div
          key={company._id}
          className="glass-card glass-card-hover p-6 flex flex-col"
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-semibold text-gray-800">
              {company.name}
            </h3>
            <div className="flex gap-2">
              <button
                onClick={() => onEdit(company)}
                className="text-blue-600 hover:text-blue-800"
                title="Edit"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </button>
              <button
                onClick={() => onDelete(company._id)}
                className="text-red-600 hover:text-red-800"
                title="Delete"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="space-y-2 flex-grow">
            <p className="text-gray-600">
              <span className="font-medium">Industry:</span> {company.industry}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Location:</span> {company.location}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Size:</span> {company.size} employees
            </p>
          </div>

          <div className="mt-4">
            <button
              onClick={() => onViewDetails(company)}
              className="glass-button w-full"
            >
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompanyList;

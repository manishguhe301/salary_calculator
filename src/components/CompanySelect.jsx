import { companies } from "./constants";

const CompanySelect = ({ value, onChange }) => (
  <div className='mb-4'>
    <label className='block text-sm font-semibold text-gray-700'>
      🏢 Select Company
    </label>
    <select
      className='mt-1 block w-full border-2 border-purple-300 rounded p-2 focus:outline-none focus:border-purple-500'
      value={value}
      onChange={onChange}
    >
      <option value=''>Select Company</option>
      {companies.map((company, index) => (
        <option key={index} value={company}>
          {company}
        </option>
      ))}
    </select>
  </div>
);

export default CompanySelect;

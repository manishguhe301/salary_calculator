import { designations } from './constants';

const DesignationSelect = ({ value, onChange }) => (
  <div className='mb-4'>
    <label className='block text-sm font-semibold text-gray-700'>
      👩‍💼 Select Designation
    </label>
    <select
      className='mt-1 block w-full border-2 border-purple-300 rounded p-2 focus:outline-none focus:border-purple-500'
      value={value}
      onChange={onChange}
    >
      <option value=''>Select Designation</option>
      {designations.map((designation, index) => (
        <option key={index} value={designation}>
          {designation}
        </option>
      ))}
    </select>
  </div>
);

export default DesignationSelect;

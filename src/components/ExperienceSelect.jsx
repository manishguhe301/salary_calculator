const ExperienceSelect = ({ value, onChange }) => (
  <div className='mb-4'>
    <label className='block text-sm font-semibold text-gray-700'>
      ⏳ Experience
    </label>
    <select
      className='mt-1 block w-full border-2 border-purple-300 rounded p-2 focus:outline-none focus:border-purple-500'
      value={value}
      onChange={onChange}
    >
      <option value=''>Experience</option>
      <option value='fresher'>Fresher</option>
      <option value='1year'>1 Year</option>
      <option value='2years'>2 Years</option>
      <option value='3year'>3 Years</option>
      <option value='4years'>4 Years</option>
    </select>
  </div>
);

export default ExperienceSelect;

// CtcInput Component
const CtcInput = ({ value, onChange }) => (
  <div className='mb-4'>
    <label className='block text-sm font-semibold text-gray-700'>
      💰 Enter Annual CTC
    </label>
    <input
      className='mt-1 block w-full border-2 border-purple-300 rounded p-2 focus:outline-none focus:border-purple-500'
      type='number'
      placeholder='Annual CTC'
      value={value}
      onChange={onChange}
    />
  </div>
);

export default CtcInput;

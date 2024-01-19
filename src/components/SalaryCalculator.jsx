const SalaryCalculator = ({ onSubmit, canCalculate, salary }) => (
  <div>
    <button
      className={`bg-purple-600 text-white p-2 w-full rounded-full ${
        !canCalculate && 'opacity-50 cursor-not-allowed'
      }`}
      onClick={onSubmit}
      disabled={!canCalculate}
    >
      🚀 Calculate Salary
    </button>
    {salary && (
      <p className='mt-4 text-center text-gray-700'>
        💸 Monthly Salary: ₹{Math.round(salary)} INR
      </p>
    )}
  </div>
);

export default SalaryCalculator;

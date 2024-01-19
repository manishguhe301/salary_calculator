import { useState } from 'react';
import CompanySelect from './components/CompanySelect';
import CtcInput from './components/CtcInput';
import DesignationSelect from './components/DesignationSelect';
import ExperienceSelect from './components/ExperienceSelect';
import SalaryCalculator from './components/SalaryCalculator';

const App = () => {
  const [company, setCompany] = useState('');
  const [designation, setDesignation] = useState('');
  const [ctc, setCtc] = useState('');
  const [experience, setExperience] = useState('');
  const [salary, setSalary] = useState('');

  const calculateSalary = () => {
    const monthlySalary = ctc / 12;
    setSalary(monthlySalary.toFixed(2));
  };

  const canCalculate = company && designation && ctc && experience;

  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-800 to-indigo-600'>
      <div className='bg-white p-8 rounded-lg shadow-lg md:w-96 w-full'>
        <h1 className='text-3xl mb-6 text-center font-extrabold text-purple-800'>
          💼 Salary Calculator
        </h1>

        <CompanySelect
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <DesignationSelect
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
        />
        <CtcInput value={ctc} onChange={(e) => setCtc(e.target.value)} />
        <ExperienceSelect
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />

        <SalaryCalculator
          onSubmit={calculateSalary}
          canCalculate={canCalculate}
          salary={salary}
        />
      </div>
    </div>
  );
};

export default App;

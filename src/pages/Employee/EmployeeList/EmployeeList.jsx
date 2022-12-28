import './EmployeeList.scss';

import { useSelector } from 'react-redux';

import DefaultTitle from '../../../components/Default/DefaultTitle/DefaultTitle';
import DefaultTable from '../../../components/Default/DefaultTable/DefaultTable';

const EmployeeList = () => {
  const { employees } = useSelector((state) => state.employeeReducers);

  return (
    <section>
      <div className="employee-list">
        <div className="employee-list__title">
          <DefaultTitle title="Current Employees" />
        </div>
        <div className="employee-list__table">
          <DefaultTable employees={employees} />
        </div>
      </div>
    </section>
  );
};

export default EmployeeList;

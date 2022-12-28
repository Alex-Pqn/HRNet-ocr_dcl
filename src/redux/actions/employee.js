import { STATUS } from '../config/status.js';

const addEmployee = (newEmployee) => {
  return (dispatch) => {
    dispatch({
      type: STATUS.EMPLOYEE_REQUEST,
      payload: {
        newEmployee,
      },
    });
  };
};

export const employeeActions = { addEmployee };

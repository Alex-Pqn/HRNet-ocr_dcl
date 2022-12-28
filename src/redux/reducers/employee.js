import { STATUS } from '../config/status.js';

export const initialState = {
  error: '',
  employees: [],
};

const employeeReducers = (state = initialState, action) => {
  switch (action.type) {
    case STATUS.EMPLOYEE_REQUEST:
      return {
        ...state,
        employees: [...state.employees, { ...action.payload.newEmployee }],
      };
    default:
      return state;
  }
};

export default employeeReducers;

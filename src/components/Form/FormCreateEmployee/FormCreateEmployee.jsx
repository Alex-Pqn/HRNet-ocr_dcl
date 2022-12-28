import './FormCreateEmployee.scss';

import { Modal } from '@alex-pqn/react-modal';

import { useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import DatePicker from 'react-date-picker';
import DefaultSelectOption from '../../Default/DefaultSelectOption/DefaultSelectOption';

import { DEPARTMENTS_MOCKS } from '../../../assets/mocks/departments';
import { STATES_MOCKS } from '../../../assets/mocks/states';
import { employeeActions } from '../../../redux/actions/employee.js';

import EmployeeModel from '../../../_models/employee/employee.model.js';

const FormCreateEmployee = () => {
  const dispatch = useDispatch();

  const [isModalShown, setIsModalShown] = useState(false);
  const [state, setState] = useState({
    startDate: new Date(),
    dateOfBirth: new Date(),
  });

  const setValue = (args) => {
    const name = args.target ? args.target.name : args.name;
    const value = args.target ? args.target.value : args.value;
    state[name] = value;
    setState(state);
  };

  const displayModal = () => setIsModalShown(true);
  const createEmployee = () =>
    dispatch(
      employeeActions.addEmployee(
        new EmployeeModel({
          firstName: state.firstName,
          lastName: state.lastName,
          startDate: state.startDate.toLocaleDateString('en-US'),
          department: state.department.label,
          dateOfBirth: state.dateOfBirth.toLocaleDateString('en-US'),
          street: state.street,
          city: state.city,
          state: state.state.label,
          zipCode: state.zipCode,
        })
      )
    );

  const saveEmployee = (e) => {
    e.preventDefault();
    createEmployee();
    displayModal();
  };

  const handleKeypress = (e) => {
    if (e.key === 'Enter') {
      saveEmployee();
    }
  };

  return (
    <form action="#" method="GET" id="create-employee">
      <fieldset className="informations left-part">
        <legend>Informations</legend>
        <div className="inputs">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            onChange={setValue}
            name="firstName"
            required
          />

          <label htmlFor="last-name">Last Name</label>
          <input
            onChange={setValue}
            type="text"
            id="last-name"
            name="lastName"
            required
          />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <DatePicker
            onChange={(date) => {
              setState({ ...state, dateOfBirth: date });
            }}
            value={state.dateOfBirth}
            format={'MM/dd/y'}
            className="datepicker"
            id="date-of-birth"
            name="dateOfBirth"
            clearIcon={null}
            calendarAriaLabel="date of birth calendar icon"
            clearAriaLabel="date of birth clear icon"
          />

          <label htmlFor="start-date">Start Date</label>
          <DatePicker
            onChange={(date) => {
              setState({ ...state, startDate: date });
            }}
            value={state.startDate}
            format={'MM/dd/y'}
            className="datepicker"
            id="start-date"
            name="startDate"
            clearIcon={null}
            calendarAriaLabel="starte date calendar icon"
            clearAriaLabel="starte date clear icon"
          />

          <label htmlFor="department">Department</label>
          <DefaultSelectOption
            options={DEPARTMENTS_MOCKS}
            setValue={(value) => {
              setValue({ name: 'department', value });
            }}
            placeholder={DEPARTMENTS_MOCKS[0].label}
          />
        </div>
      </fieldset>

      <fieldset className="address right-part">
        <legend>Address</legend>
        <div className="inputs">
          <label htmlFor="street">Street</label>
          <input
            id="street"
            type="text"
            onChange={setValue}
            name="street"
            required
          />

          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            onChange={setValue}
            name="city"
            required
          />

          <label htmlFor="stateChoice">State</label>
          <DefaultSelectOption
            options={STATES_MOCKS}
            setValue={(value) => setValue({ name: 'state', value })}
            placeholder={STATES_MOCKS[0].label}
          />

          <label htmlFor="zip-code">Zip Code</label>
          <input
            id="zip-code"
            type="number"
            onChange={setValue}
            name="zipCode"
            required
          />
        </div>

        <button
          className="save-btn"
          type="submit"
          onClick={(e) => saveEmployee(e)}
          onKeyPress={(e) => handleKeypress(e)}
        >
          Save
        </button>
      </fieldset>
      <Modal
        isShown={isModalShown}
        trigger={setIsModalShown}
        title="Employee Created !"
        message={
          <span>
            You have successfully created a new employee. You can{' '}
            <Link to="/list">view the entire list</Link>.
          </span>
        }
      />
    </form>
  );
};

export default FormCreateEmployee;

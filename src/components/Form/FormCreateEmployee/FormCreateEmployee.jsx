import './FormCreateEmployee.scss';

import { Modal } from '@alex-pqn/react-modal';

import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
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

  const saveNewEmployee = (e) => {
    e.preventDefault();

    if (state.firstName.length < 3)
      alert('Please enter a first name (min. 3 characters)');
    else if (state.lastName.length < 3)
      alert('Please enter a last name (min. 3 characters)');
    else if (state.startDate == null)
      alert('Please select a valid start date.');
    else if (state.dateOfBirth == null)
      alert('Please select a valid date of birth.');
    else if (state.department == null)
      alert('Please select a valid department.');
    else if (state.street.length < 5)
      alert('Please enter your street (min. 5 characters)');
    else if (state.city.length < 3)
      alert('Please enter your city (min. 3 characters)');
    else if (state.state == null) alert('Please select a valid state.');
    else if (state.zipCode.length <= 0) alert('Please enter a valid zip code.');
    else {
      createEmployee();
      displayModal();
    }
  };

  return (
    <div className="create-employee-form">
      <form
        action="#"
        onSubmit={(e) => saveNewEmployee(e)}
        id="create-employee"
      >
        <fieldset className="create-employee-form__informations left-part">
          {/* Informations part */}
          <legend>Informations</legend>
          <div className="inputs">
            {/* First Name */}
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              onChange={setValue}
              name="firstName"
              minLength={3}
              required
            />

            {/* Last Name */}
            <label htmlFor="lastname">Last Name</label>
            <input
              onChange={setValue}
              type="text"
              id="lastname"
              name="lastName"
              minLength={3}
              required
            />

            {/* Date of birth */}
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
              required
            />

            {/* Start Date */}
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
              required
            />

            {/* Departement */}
            <label htmlFor="department">Department</label>
            <DefaultSelectOption
              options={DEPARTMENTS_MOCKS}
              setValue={(value) => {
                setValue({ name: 'department', value });
              }}
              placeholder={DEPARTMENTS_MOCKS[0].label}
              required
            />
          </div>
        </fieldset>

        {/* Adress part */}
        <fieldset className="create-employee-form__address right-part">
          <legend>Address</legend>
          <div className="inputs">
            {/* Street */}
            <label htmlFor="street">Street</label>
            <input
              id="street"
              type="text"
              onChange={setValue}
              name="street"
              minLength={5}
              required
            />

            {/* City */}
            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              onChange={setValue}
              name="city"
              minLength={3}
              required
            />

            {/* State */}
            <label htmlFor="stateChoice">State</label>
            <DefaultSelectOption
              options={STATES_MOCKS}
              setValue={(value) => setValue({ name: 'state', value })}
              placeholder={STATES_MOCKS[0].label}
              required
            />

            {/* Zip Code */}
            <label htmlFor="zip-code">Zip Code</label>
            <input
              id="zip-code"
              type="number"
              onChange={setValue}
              name="zipCode"
              required
            />
          </div>

          <button className="save-btn" type="submit">
            Save
          </button>
        </fieldset>
      </form>

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
    </div>
  );
};

export default FormCreateEmployee;

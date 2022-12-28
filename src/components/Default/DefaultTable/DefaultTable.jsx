import './DefaultTable.scss';

import PropTypes from 'prop-types';

import DataTable from 'react-data-table-component';

import { COLUMNS_TABLE_MOCKS } from '../../../assets/mocks/columns.table.js';

const DefaultTable = ({ employees }) => {
  return (
    <DataTable columns={COLUMNS_TABLE_MOCKS} data={employees} pagination />
  );
};

DefaultTable.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      dateOfBirth: PropTypes.string.isRequired,
      department: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      zipCode: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DefaultTable;

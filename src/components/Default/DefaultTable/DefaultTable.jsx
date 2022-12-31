import './DefaultTable.scss';

import PropTypes from 'prop-types';

import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';

import 'react-data-table-component-extensions/dist/index.css';

import { COLUMNS_TABLE_MOCKS } from '../../../assets/mocks/columns.table.js';

const DefaultTable = ({ employees }) => {
  const tableData = {
    columns: COLUMNS_TABLE_MOCKS,
    data: employees,
  };

  return (
    <DataTableExtensions {...tableData}>
      <DataTable
        noHeader
        defaultSortField="id"
        defaultSortAsc={false}
        pagination
        highlightOnHover
      />
    </DataTableExtensions>
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

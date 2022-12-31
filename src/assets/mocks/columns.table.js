export const COLUMNS_TABLE_MOCKS = [
  {
    name: 'First Name',
    selector: (row) => row.firstName,
    cellExport: (row) => row.firstName,
    sortable: true,
  },
  {
    name: 'Last Name',
    selector: (row) => row.lastName,
    cellExport: (row) => row.lastName,
    sortable: true,
  },
  {
    name: 'Start Date',
    selector: (row) => row.startDate,
    cellExport: (row) => row.startDate,
    sortable: true,
  },
  {
    name: 'Department',
    selector: (row) => row.department,
    cellExport: (row) => row.department,
    sortable: true,
  },
  {
    name: 'Date of Birth',
    selector: (row) => row.dateOfBirth,
    cellExport: (row) => row.dateOfBirth,
    sortable: true,
  },
  {
    name: 'Street',
    selector: (row) => row.street,
    cellExport: (row) => row.street,
    sortable: true,
  },
  {
    name: 'City',
    selector: (row) => row.city,
    cellExport: (row) => row.city,
    sortable: true,
  },
  {
    name: 'State',
    selector: (row) => row.state,
    cellExport: (row) => row.state,
    sortable: true,
  },
  {
    name: 'Zip Code',
    selector: (row) => row.zipCode,
    cellExport: (row) => row.zipCode,
    sortable: true,
  },
];

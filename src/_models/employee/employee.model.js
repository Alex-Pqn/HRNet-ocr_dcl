class EmployeeModel {
  constructor(data) {
    this.city = data.city;
    this.dateOfBirth = data.dateOfBirth;
    this.department = data.department;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.startDate = data.startDate;
    this.state = data.state;
    this.street = data.street;
    this.zipCode = data.zipCode;
  }
}

export default EmployeeModel;

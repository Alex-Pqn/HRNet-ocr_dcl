import './DefaultSelectOption.scss';

import { PropTypes } from 'prop-types';

import Select from 'react-select';

const DefaultSelectOption = ({ setValue, options, placeholder }) => {
  return (
    <div>
      <Select
        onChange={(e) => setValue(e)}
        options={options}
        placeholder={placeholder}
      />
    </div>
  );
};

DefaultSelectOption.propTypes = {
  setValue: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default DefaultSelectOption;

import './DefaultTitle.scss';

import { PropTypes } from 'prop-types';

const DefaultTitle = ({ title }) => {
  return (
    <div className="title">
      <h2>{title}</h2>
    </div>
  );
};

DefaultTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default DefaultTitle;

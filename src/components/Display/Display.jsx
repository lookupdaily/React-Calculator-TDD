import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ displayValue }) => <div className="display-container" />;

Display.propTypes = { displayValue: PropTypes.string.isRequired };

export default Display;
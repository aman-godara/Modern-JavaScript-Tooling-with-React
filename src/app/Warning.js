import React from 'react';
import propTypes from 'prop-types';

import './warning.css';

const Warning = ({ info }) => {
    return <div className="warning">This is warning - {info}</div>;
};

Warning.propTypes = {
    info: propTypes.string,
};

export default Warning;

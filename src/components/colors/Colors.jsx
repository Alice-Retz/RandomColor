import React from 'react';
import PropTypes from 'prop-types';

const ColorRender = ({ backgroundColor }) => {
  return (
    <div
      style={{
        backgroundColor,
        width: '200px',
        height: '200px',
      }}
    ></div>
  );
};

ColorRender.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
};

export default ColorRender;

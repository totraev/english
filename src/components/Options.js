import React, { PropTypes } from 'react';
import OptionEl from './Option.js';
import { ButtonToolbar } from 'react-bootstrap';

const Options = (props) => {
  const { items, toggleFilter, appliedFilters } = props;

  return (
    <ButtonToolbar>
      {items.map((option, idx) => (
        <OptionEl key={idx} item={option} appliedFilters={appliedFilters} toggleFilter={toggleFilter}/>
      ))}
    </ButtonToolbar>
  );
};

Options.PropTypes = {
  items: PropTypes.array.isRequired
};

export default Options;

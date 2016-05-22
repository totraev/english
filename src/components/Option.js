import React, { PropTypes } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

const OptionEl = (props) => {
  const { item, appliedFilters, toggleFilter } = props;

  const isActive = (menuItem) => {
    const { attribute, value } = menuItem;
    return appliedFilters[attribute] && (appliedFilters[attribute].indexOf(value) > -1);
  };

  return (
    <DropdownButton bsStyle="default" title={item.title} id="genre-dropdown">
      {item.values.map((menuItem, idx) => (
        <MenuItem eventKey={idx} active={isActive(menuItem)} key={idx}  onClick={() => toggleFilter(menuItem.attribute, menuItem.value)}>{menuItem.value}</MenuItem>
      ))}
    </DropdownButton>
  );
};

OptionEl.PropTypes = {
  item: PropTypes.object.isRequired
};

export default OptionEl;

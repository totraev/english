import React, { PropTypes } from 'react';
import Shows from './Shows';
import FilterPanel from './FilterPanel';

const App = (props) => {
  const { collection } = props;
  return (
    <div>
      <FilterPanel {...props}/>
      <Shows shows={collection} {...props}/>
    </div>
  );
};

App.propTypes = {
  collection: PropTypes.array,
  optionGroups: PropTypes.array
};

export default App;

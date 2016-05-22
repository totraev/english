import React, { PropTypes } from 'react';
import Show from './Show';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import '../styles/shows.scss';

const Shows = (props) => {
  const { shows, sortItems, applySort } = props;

  return (
    <section id="shows">
      <div className="container">

        <div className="clearfix">
          <div className="pull-left">
            <h4><b>{shows.length} shows found</b></h4>
          </div>
          <div className="pull-right">
            <DropdownButton bsStyle="link" title="Order by" id="genre-dropdown">
              <MenuItem eventKey="1" onClick={() => applySort(sortItems[0])}>by name</MenuItem>
              <MenuItem eventKey="2" onClick={() => applySort(sortItems[1])}>by year</MenuItem>
            </DropdownButton>
          </div>
        </div>

        <div className="row shows-list">
          {shows.map((show, idx)=>(
            <div key={idx} className="col-xs-2"><Show show={show}/></div>
          ))}
        </div>

      </div>
    </section>
  );
};

Shows.propTypes = {
  shows: PropTypes.array.isRequired,
  applySort: PropTypes.func.isRequired,
  sortItems: PropTypes.array.isRequired
};

export default Shows;

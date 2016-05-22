import React, { PropTypes, Component } from 'react';
import { findDOMNode } from 'react-dom';
import Options from './Options';
import '../styles/filter-panel.scss';
import { FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';

class FilterPanel extends Component {

  search(){
    const { keywordSearch } = this.props;
    const value = findDOMNode(this.refs.searchInput).value;
    keywordSearch(value);
  }

  render(){
    const { optionGroups, toggleFilter, appliedFilters, keyword } = this.props;

    return (
      <section id="filter-panel">
        <div className="container">

          <FormGroup>
            <InputGroup>
              <FormControl type="text" placeholder="Enter text" ref="searchInput" defaultValue={keyword}/>
              <InputGroup.Button>
                <Button bsStyle="info" onClick={this.search.bind(this)}>Search</Button>
              </InputGroup.Button>
            </InputGroup>
          </FormGroup>

          <Options items={optionGroups} toggleFilter={toggleFilter} appliedFilters={appliedFilters} />
        </div>
      </section>
    );
  }
}

FilterPanel.propTypes = {
  optionGroups: PropTypes.array.isRequired
};

export default FilterPanel;

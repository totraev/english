/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import App from './components/App';

import Filter from 'redux-filter';
import {data} from './shows.js';

const config = {
  subjects: data,
  filterableCriteria: [
      {
          title: 'Genres',
          attribute: 'array_genres'
      },
      {
          title: 'Year',
          attribute: 'year'
      },
      {
          title: 'Country',
          attribute: 'array_countries'
      }
  ],
  searchKeys: ['name'],
  sortItems: [  
    {
      title: 'by name',
      fn: (items) => {
          return [...items].sort((a, b) => a.name >= b.name ? 1 : -1);
      }
    },
    {
      title: 'by year',
      fn: (items) => {
          return [...items].sort((a, b) => a.year >= b.year ? 1 : -1);
      }
    }
  ]
};


const store = configureStore();

render(
  <Provider store={store}>
    <Filter {...config}>
      <App />
    </Filter>
  </Provider>, document.getElementById('app')
);

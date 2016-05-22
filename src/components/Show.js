import React, { PropTypes } from 'react';
import '../styles/show.scss';

const Show = (props) => {
  const { show } = props;

  return (
    <div className="show-item">
      <h4><b>{show.name}</b></h4>
      <p>{show.year}</p>

      <p>
        <b>Genres: </b>
        {show.array_genres.map((genre, idx) => idx ? `, ${genre}`: genre)}
      </p>
      <p>
        <b>Country: </b>
        {show.array_countries.map((country, idx) => idx ? `, ${country}`: country)}
      </p>
    </div>
  );
};

Show.PropTypes = {
  show: PropTypes.object.isRequired
};

export default Show;

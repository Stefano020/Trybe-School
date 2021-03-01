import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    return (
      <div className="movie-list">
        <p>
          { this.props.movies.map((movie) =>
            <MovieCard key={movie.title} movie={movie} />)}
        </p>
      </div>
    );
  }
}


MovieList.propTypes = { movies: PropTypes.arrayOf.isRequired };

export default MovieList;

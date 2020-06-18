import React, { Component } from 'react';
import { formatNumber } from '../../utils/formatData';
import css from './styles.module.css';

export default class Header extends Component {
  handleInputChange = (event) => {
    console.log(event.target.value);
    this.props.onChangeFilter(event.target.value);
  };

  render() {
    const { countCountries, filter, population } = this.props;
    return (
      <div className={css.flexRow}>
        <input
          placeholder="Filtrar Países"
          className={css.inputHeader}
          style={{ minWidth: '100px' }}
          type="text"
          value={filter}
          onChange={this.handleInputChange}
        />{' '}
        <span className={css.countries}>| Países: {countCountries}</span>
        <span className={css.population}>
          | População: {formatNumber(population)}
        </span>
      </div>
    );
  }
}

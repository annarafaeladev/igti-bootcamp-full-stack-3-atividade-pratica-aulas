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
        <input type="text" value={filter} onChange={this.handleInputChange} /> |{' '}
        <span>Países: {countCountries}</span> |{' '}
        <span>População: {formatNumber(population)}</span> |
      </div>
    );
  }
}

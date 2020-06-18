import React, { Component } from 'react';
import css from './styles.module.css';
export default class Country extends Component {
  render() {
    const { country } = this.props;
    return (
      <div className={`${css.border} ${css.country}`}>
        <span className={css.countryName}>{country.name}</span>
        <img className={css.flag} src={country.flag} alt={country.name} />
      </div>
    );
  }
}

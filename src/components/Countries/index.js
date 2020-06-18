import React, { Component } from 'react';
import Country from '../Country';
import css from './styles.module.css';

export default class Countries extends Component {
  render() {
    const { countries } = this.props;
    console.log(this.props.countries.id);
    return (
      <div className={`${css.border} ${css.flexRow}`}>
        {countries &&
          countries.map((country) => {
            return <Country key={country.id} country={country} />;
          })}
      </div>
    );
  }
}

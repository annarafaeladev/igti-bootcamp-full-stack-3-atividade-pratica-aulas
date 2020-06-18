import React, { Component } from 'react';
import Country from '../Country';

export default class Countries extends Component {
  render() {
    const { countries } = this.props;
    console.log(this.props.countries.id);
    return (
      <div>
        {countries && (
          <ul>
            {countries.map((country) => {
              return (
                <li key={country.id}>
                  <Country country={country} />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

import React, { Component } from 'react';
import Header from './components/Header';
import Countries from './components/Countries';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      allCountries: [],
      filteredCountries: '',
      population: 0,
      filter: '',
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const result = await fetch('https://restcountries.eu/rest/v2/all');
    const json = await result.json();

    const allCountries = json.map((item) => {
      return {
        id: item.numericCode,
        name: item.name,
        filterName: item.name.toLowerCase(),
        population: item.population,
        flag: item.flag,
      };
    });

    this.handlePopulation(allCountries);

    this.setState({
      allCountries: allCountries,
      filteredCountries: Object.assign([], allCountries),
    });
  };

  handleChangeFilter = (newText) => {
    this.setState({
      filter: newText,
    });

    const textLowerCase = newText.toLowerCase();

    const filteredCountries = this.state.allCountries.filter((item) => {
      return item.filterName.includes(textLowerCase);
    });
    this.handlePopulation(filteredCountries);

    this.setState({
      filteredCountries: filteredCountries,
    });
  };

  handlePopulation = (list) => {
    const getPopulation = list.reduce((accumulator, current) => {
      return accumulator + current.population;
    }, 0);

    this.setState({
      population: getPopulation,
    });
  };

  render() {
    const { filteredCountries, population, filter } = this.state;
    return (
      <div className="container">
        <h1 style={styles.centerTitle}>React Countries</h1>
        <Header
          filter={filter}
          countCountries={filteredCountries.length}
          onChangeFilter={this.handleChangeFilter}
          population={population}
        />
        <Countries countries={filteredCountries} />
      </div>
    );
  }
}

const styles = {
  centerTitle: {
    textAlign: 'center',
  },
};

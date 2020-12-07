import React from "react";

export default class Fetcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryNames: [],
      error: null,
      loading: false,
    };
    this.status = this.status.bind(this);
  }
  status(response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  }
  componentWillMount() {
    this.setState({ loading: true });
    fetch("https://restcountries.eu///all")
      .then((response) => response.json())

      .then((json) => json.map((country) => country.name))
      .then((countryNames) => this.setState({ countryNames, loading: false }))
      .catch((error) => this.setState({ error }));
  }
  render() {
    const { countryNames, loading, error } = this.state;
    return (
      <div>
        {error ? (
          <p>Problem with API try againg later.</p>
        ) : loading ? (
          <p>Loading Country Names...</p>
        ) : !countryNames.length ? (
          <p>No country Names</p>
        ) : (
          <ul>
            {countryNames.map((x, i) => (
              <li key={i}>{x}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

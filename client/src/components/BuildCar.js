import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class BuildCar extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      isbn: '',
      author: '',
      description: '',
      published_date: '',
      publisher: ''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      isbn: this.state.isbn,
      author: this.state.author,
      description: this.state.description,
      published_date: this.state.published_date,
      publisher: this.state.publisher
    };

    axios
      .post('/api/books', data)
      .then(res => {
        this.setState({
          title: '',
          isbn: '',
          author: '',
          description: '',
          published_date: '',
          publisher: ''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateBook!");
      })
  };

  render() {
    return (
      <div>

        <div className="row">
          <div className="col m-auto">
            <h4>Build & Price</h4>
            <h5>Select A Vehicle</h5>
          </div>
          <div className="col m-auto">
            <div className="dropdown float-right">
              <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                SORT BY
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Category</a>
                <a className="dropdown-item" href="#">MSRP</a>
                <a className="dropdown-item" href="#">Seating</a>
              </div>
            </div>
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col m-auto">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a className="nav-link active" href="#">CARS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">SUVS & CROSSOVERS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">MINIVAN & TRUCK</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">ELECTRIC</a>
              </li>
            </ul>
          </div>
        </div>

        <br />

        <div className="row row-cols-1 row-cols-md-3">
          <div className="col mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">2020 Insight</h5>
                <div className="row">
                  <div className="col m-auto">
                    <h4>$22,930</h4>
                    <h5>Starting MSRP*</h5>
                  </div>
                  <div className="col m-auto text-right">
                    <h4>49/55</h4>
                    <h5>Hwy/City*</h5>
                  </div>
                </div>
                {/* <button type="button" class="btn btn-primary" onClick={this.handleClick}>GO</button> */}
                <Link to="/build-and-price-result" className="btn btn-primary">BUILD</Link>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">2020 Civic Sedan</h5>
                <div className="row">
                  <div className="col m-auto">
                    <h4>$22,930</h4>
                    <h5>Starting MSRP*</h5>
                  </div>
                  <div className="col m-auto text-right">
                    <h4>49/55</h4>
                    <h5>Hwy/City*</h5>
                  </div>
                </div>
                {/* <button type="button" class="btn btn-primary" onClick={this.handleClick}>GO</button> */}
                <Link to="/buildcar" className="btn btn-primary">BUILD</Link>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">2020 Accord</h5>
                <div className="row">
                  <div className="col m-auto">
                    <h4>$22,930</h4>
                    <h5>Starting MSRP*</h5>
                  </div>
                  <div className="col m-auto text-right">
                    <h4>49/55</h4>
                    <h5>Hwy/City*</h5>
                  </div>
                </div>
                {/* <button type="button" class="btn btn-primary" onClick={this.handleClick}>GO</button> */}
                <Link to="/buildcar" className="btn btn-primary">BUILD</Link>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">2019 Clarity</h5>
                <div className="row">
                  <div className="col m-auto">
                    <h4>$22,930</h4>
                    <h5>Starting MSRP*</h5>
                  </div>
                  <div className="col m-auto text-right">
                    <h4>49/55</h4>
                    <h5>Hwy/City*</h5>
                  </div>
                </div>
                {/* <button type="button" class="btn btn-primary" onClick={this.handleClick}>GO</button> */}
                <Link to="/buildcar" className="btn btn-primary">BUILD</Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default BuildCar;
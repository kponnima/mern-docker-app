import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class BuildCarPriceResult extends Component {
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
            <a href="_blank">Back</a>
          </div>
        </div>

        <br />

        <form>
          <div className="row text-center">
            <div className="col m-auto">
              <h4>BUILD YOUR VEHICLE</h4>
              <h5>Select a package and drivetrain</h5>
            </div>
          </div>

          <div className="row text-center">
            <div className="col m-auto">
              <span>Drivetrain</span>
            </div>
            <div className="col m-auto">
              <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" />
                <label className="custom-control-label" htmlFor="customRadioInline1">Toggle this custom radio</label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" />
                <label className="custom-control-label" htmlFor="customRadioInline2">Or toggle this other custom radio</label>
              </div>
            </div>
          </div>

          <br />

          <div className="row row-cols-1 row-cols-md-3">
            <div className="col mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-center">2020 Insight</h5>
                  <div className="row text-center">
                    <div className="col m-auto">
                      <h4>BASE Package</h4>
                      <h5>MSRP: $22,930</h5>
                    </div>
                    <div className="col m-auto">
                      <h4>49/55</h4>
                      <h5>Hwy/City*</h5>
                    </div>
                  </div>
                  {/* <button type="button" className="btn btn-primary" onClick={this.handleClick}>GO</button> */}
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
                  {/* <button type="button" className="btn btn-primary" onClick={this.handleClick}>GO</button> */}
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
                  {/* <button type="button" className="btn btn-primary" onClick={this.handleClick}>GO</button> */}
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
                  {/* <button type="button" className="btn btn-primary" onClick={this.handleClick}>GO</button> */}
                  <Link to="/buildcar" className="btn btn-primary">BUILD</Link>
                </div>
              </div>
            </div>
          </div>

          <br />

          <footer className="footer mt-auto py-3">
            <div className="container">
              <span className="text-muted">Place sticky footer content here.</span>
            </div>
          </footer>

        </form>
      </div>
    );
  }
}

export default BuildCarPriceResult;
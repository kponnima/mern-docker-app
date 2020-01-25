import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Home extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            title: '',
            isbn: '',
            author: '',
            description: '',
            published_date: '',
            publisher: ''
        };
    }

    handleClick() {
        console.log('Click happened');
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
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={'/assets/Homepage_1.jpg'} alt="First slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First Slide</h5>
                                <p>Placeholder text for first slide</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={'/assets/Homepage_1.jpg'} alt="Second slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second Slide</h5>
                                <p>Placeholder text for second slide</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={'/assets/Homepage_1.jpg'} alt="Third slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third Slide</h5>
                                <p>Placeholder text for third slide</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

                <br/>

                <div className="row row-cols-1 row-cols-md-4">
                    <div className="col mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Build And Price</h5>
                                <p className="card-text">Customize a vehicle.</p>
                                {/* <button type="button" class="btn btn-primary" onClick={this.handleClick}>GO</button> */}
                                <Link to="/build-and-price" className="btn btn-primary">GO</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Compare</h5>
                                <p className="card-text">Compare vehicles to find the right one.</p>
                                {/* <button type="button" class="btn btn-primary" onClick={this.handleClick}>GO</button> */}
                                <Link to="/buildcar" className="btn btn-primary">GO</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Search Inventory</h5>
                                <p className="card-text">Find a matching vehicle at the nearest dealer.</p>
                                {/* <button type="button" class="btn btn-primary" onClick={this.handleClick}>GO</button> */}
                                <Link to="/buildcar" className="btn btn-primary">GO</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Current Offers</h5>
                                <p className="card-text">Ongoing promotions to help save.</p>
                                {/* <button type="button" class="btn btn-primary" onClick={this.handleClick}>GO</button> */}
                                <Link to="/buildcar" className="btn btn-primary">GO</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            // <div className="CreateBook">
            //     <div className="row">
            //         <div className="col-md-8 m-auto">
            //             <br />
            //             <Link to="/" className="btn btn-outline-warning float-left">
            //                 Show BooK List
            //   </Link>
            //         </div>
            //         <div className="col-md-8 m-auto">
            //             <h1 className="display-4 text-center">Add Book</h1>
            //             <p className="lead text-center">
            //                 Create new book
            //   </p>

            //             <form noValidate onSubmit={this.onSubmit}>
            //                 <div className='form-group'>
            //                     <input
            //                         type='text'
            //                         placeholder='Title of the Book'
            //                         name='title'
            //                         className='form-control'
            //                         value={this.state.title}
            //                         onChange={this.onChange}
            //                     />
            //                 </div>
            //                 <br />

            //                 <div className='form-group'>
            //                     <input
            //                         type='text'
            //                         placeholder='ISBN'
            //                         name='isbn'
            //                         className='form-control'
            //                         value={this.state.isbn}
            //                         onChange={this.onChange}
            //                     />
            //                 </div>

            //                 <div className='form-group'>
            //                     <input
            //                         type='text'
            //                         placeholder='Author'
            //                         name='author'
            //                         className='form-control'
            //                         value={this.state.author}
            //                         onChange={this.onChange}
            //                     />
            //                 </div>

            //                 <div className='form-group'>
            //                     <input
            //                         type='text'
            //                         placeholder='Describe this book'
            //                         name='description'
            //                         className='form-control'
            //                         value={this.state.description}
            //                         onChange={this.onChange}
            //                     />
            //                 </div>

            //                 <div className='form-group'>
            //                     <input
            //                         type='date'
            //                         placeholder='published_date'
            //                         name='published_date'
            //                         className='form-control'
            //                         value={this.state.published_date}
            //                         onChange={this.onChange}
            //                     />
            //                 </div>
            //                 <div className='form-group'>
            //                     <input
            //                         type='text'
            //                         placeholder='Publisher of this Book'
            //                         name='publisher'
            //                         className='form-control'
            //                         value={this.state.publisher}
            //                         onChange={this.onChange}
            //                     />
            //                 </div>

            //                 <input
            //                     type="submit"
            //                     className="btn btn-outline-warning btn-block mt-4"
            //                 />
            //             </form>
            //         </div>
            //     </div>
            // </div>
        );
    }
}

export default Home;
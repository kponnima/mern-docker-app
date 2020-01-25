import React, { Component } from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);
    }
    logout() {
        AppState.logout();
        this.props.history.replace('/login');
    }
    render() {
        return (
            <div>
                <h1>Contact Component</h1>
                <div className="links">
                    <NavLink to={`${props.match.url}/india`}
                        className="link">India Office</NavLink>
                    <NavLink to={`${props.match.url}/us`}
                        className="link">Us Office</NavLink>
                </div>
                <Switch>
                    <Route exact path={props.match.url}
                        render={() => <h4>Please select an office.</h4>} />
                    <Route path={`${props.match.url}/:location`}
                        component={ContactInfo} />

                    <Route render={() => <h2>No office found.</h2>} />
                </Switch>
            </div>
        );
    }
}

export default Contact
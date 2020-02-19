import React, { Component } from 'react';

function StickyFooter(props) {
  const isLoggedIn = props.isLoggedIn;
  return (
    <>
      {isLoggedIn &&
        <footer className="footer mt-auto py-3">
          <div className="container">
            <span className="text-muted">Place sticky footer content here.</span>
          </div>
        </footer>
      }
    </>
  );
}

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <>
        {isLoggedIn &&
          <footer className="footer mt-auto py-3">
            <div className="container">
              <span className="text-muted">Place sticky footer content here.</span>
            </div>
          </footer>
        }
      </>
    )
  }
}

export default Footer
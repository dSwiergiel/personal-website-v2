import React, { Component } from 'react';

import logo from '../../assets/images/react-logo.svg';
import './splash-screen.scss';

function LoadingMessage() {
  return (
    <div className='splash-screen'>
      <img src={logo} className='App-logo' alt='logo' />
      <p className='light-text fixed-bottom text-center h-25'>
        getting things together...
      </p>
    </div>
  );
}

function SplashScreen(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      };
    }

    async componentDidMount() {
      try {
        setTimeout(() => {
          this.setState({
            loading: false,
          });
        }, 1000);
      } catch (err) {
        console.log(err);
        this.setState({
          loading: false,
        });
      }
    }

    render() {
      // while checking user session, show "loading" message
      if (this.state.loading) return LoadingMessage();

      // otherwise, show the desired route
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default SplashScreen;

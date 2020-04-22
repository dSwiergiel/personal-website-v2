import React, { Component } from 'react';
// import auth0Client from '../Auth';
import logo from '../../assets/images/react-logo.svg';
import './splash-screen.scss';

function LoadingMessage() {
  return (
    // <div className='splash-screen'>
    //   <div className='loading-dot'>.
    //   </div>
    // </div>
    <div className='splash-screen'>
      <img src={logo} className='App-logo' alt='logo' />
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
        this.setState({
          loading: true,
        });
        // setTimeout(() => {
        //   this.setState({
        //     loading: false,
        //   });
        // }, 1500);
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
      return <WrappedComponent {...this.props}></WrappedComponent>;
    }
  };
}

export default SplashScreen;

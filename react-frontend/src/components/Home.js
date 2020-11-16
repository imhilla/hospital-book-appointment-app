/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
/* eslint-disable react/button-has-type */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  Route,
} from 'react-router-dom';
import axios from 'axios';
import NavBar from './Navbar';
import './home.css';
import Logo from './Logo';
import Footer from './Footer';
import Items from './Items';
// import Login from './auth/Login';
// import Logout from './auth/Logout';
// import Registration from './auth/Registration';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push('/dashboard');
  }

  handleLogoutClick() {
    axios.delete('http://localhost:3001/logout', { withCredentials: true })
      .then(error => {
        console.log('logout errors', error);
      });
    this.props.handleLogout();
  }

  render() {
    const url = 'https://www.who.int/home';
    return (
      <div className="home">
        <div className="homeContainer">
          <Logo />
          <NavBar className="mynav" />
          <Footer />
        </div>
        <div className="descriptionContainer">
          <a href={url}>Quick links on COVID19</a>
          <h1>Welcome to Safe Heaven hospital, your health our treasure</h1>
          <p>
            We have built a long standing relationship based on trust.
            Safe heaven Hospital stands out as one of the nation’s top Hospital,
            attracting talented faculty, staff , superb clinical affiliates and global outlook.
          </p>
          <Items />
          <div>
            <h1>
              MODERN MEDICAL FACILITIES
            </h1>
            <p>
              Personalized patient care is what sets Safe Heaven Hospital apart.
              Expert physician specialists and caring  staff provide you with an
              exceptional health care experience.
            </p>
          </div>
        </div>
        {/* <h1>Status: {this.props.loggedInStatus}</h1> */}
        {/* <Logout /> */}
        {/* <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} /> */}
        {/* <Login handleSuccessfulAuth={this.handleSuccessfulAuth} /> */}
        <div />
      </div>
    );
  }
}
export default Home;

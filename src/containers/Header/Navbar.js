import React, { Component } from 'react';
import './Navbar.css';
<<<<<<< Updated upstream
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


=======
>>>>>>> Stashed changes


class Navbar extends Component {

  constructor(props) {
    super(props);
    this.self = this;
    this.state = {
      username: '',
      password: '',
      session_username: '',
    };
    this.checkSession();
    this.submit = this.submit.bind(this);
    this.changeEvent = this.changeEvent.bind(this);
  }

  checkSession() {
    const axios = require('axios');
    axios
      .get('http://localhost:8080/session/read', { withCredentials: true })
      .then((response) => {
        console.log(response);
        if (response.data[0] !== null && response.data[0] !== undefined) {
          alert("You have a session: " + JSON.stringify(response.data[0]) + " to destroy current session press Logout link in header");
          document.getElementsByClassName("theform")[0].style.display = "none";
          document.getElementsByClassName("logout")[0].style.display = "inline";
        }
      })
      .catch((error) => {
        console.log("Exception: " + error);
      })
  }

  destroySession() {
    const axios = require('axios');
    axios
      .get('http://localhost:8080/session/destroy', { withCredentials: true })
      .then((response) => {
        window.location.reload();
      })
      .catch((error) => {
        console.log("Exception: " + error);
      })
  }


  saveSession(object) {
    const axios = require('axios');
    axios
      .post('http://localhost:8080/session/save', object)
      .then((response) => {
      })
      .catch((error) => {
        console.log("Exception: " + error);
      })
  }

  changeEvent(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  submit(event) {
    event.preventDefault();
    const data = {
      username: this.state.username,
      password: this.state.password
    };

    const axios = require('axios');
    axios
      .post('http://localhost:8080/auth', data)
      .then((response) => {
        this.setState({ session_username: response.data[0].username });
        document.getElementsByClassName("theform")[0].style.display = "none";
        document.getElementsByClassName("logout")[0].style.display = "inline";
        alert("Authorized - 200 - Starting session as user: " + response.data[0].username);
      })
      .catch((error) => {
        alert("Not authoritzed - 401")
      })
  }

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-dark bg-dark">
          <form className="form-inline theform" onSubmit={this.submit}>
            <input className="form-control mr-sm-2" aria-label="Search" type="search" name="username" placeholder="Username" checked={this.state.username} onChange={this.changeEvent} />
            <input className="form-control mr-sm-2" aria-label="Search" type="password" name="password" placeholder="Password" checked={this.state.password} onChange={this.changeEvent}/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
            </form>

            <form className="form-inline">
            <Button classname ="btn btn-outline-success my-2 my-sm-0" component={Link} to="/register">
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Register</button>
            </Button>     
           <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
           <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>


            </form>

          <a className="navbar-brand logout" href="/session/destroy" onClick={this.destroySession}>Logout</a>
        </nav>
      </div>
    )
  }
}

export default Navbar; 


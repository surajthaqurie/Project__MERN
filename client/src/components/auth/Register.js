import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './auth.css';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2: '',
      phone: '',
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      phone: this.state.phone,
    }
    const { password, password2 } = this.state;
    if (password !== password2) {
      console.log("Passwords don't match");
    } else {

      axios.post('/api/users/register', newUser)
        .then(res => console.log(res.data))
        .catch(err => console.log(err.response.data));
    }

  }

  render() {
    return (
      <div className="form-style-8">
        <label>
          <h2>Create your accout</h2>
        </label>
        <form onSubmit={this.onSubmit}>
          <div>
            <input className="input-fields"
              type="text"
              name="firstName"
              placeholder="First Name"
              value={this.state.firstName}
              onChange={this.onChange}
              autoFocus
            />
          </div>

          <div>
            <input className="input-fields"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={this.state.lastName}
              onChange={this.onChange}
              autoFocus
            />
          </div>

          <div>
            <input className="input-fields"
              type="email"
              name="email"
              placeholder="Email Address"
              value={this.state.email}
              onChange={this.onChange}
              autoFocus
            />
          </div>

          <div>
            <input className="input-fields"
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.onChange}
              autoFocus
            />
          </div>

          <div>
            <input className="input-fields"
              type="password"
              name="password2"
              placeholder="Confirm Password"
              value={this.state.password2}
              onChange={this.onChange}
              autoFocus
            />
          </div>

          <div>
            <input className="input-fields"
              type="text"
              name="phone"
              placeholder="Contact Number"
              value={this.state.phone}
              onChange={this.onChange}
              autoFocus
            />
          </div>

          <div>
            <button className="btn" type="submit" name="register">
              Signup
            </button>
          </div>

          <div>
            <label className="lab">
              Already Have Account
              <Link to="/Login"> Login !!!</Link>
            </label>
          </div>
        </form>
      </div>
    );
  }
}
export default Register;

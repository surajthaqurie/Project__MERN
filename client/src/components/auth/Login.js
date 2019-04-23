import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './auth.css';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
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

    const user = {
      email: this.state.email,
      password: this.state.password,
    }
    console.log(user);
  }

  render() {
    return (
      <div className="form-style-8">
        <label><h2>Login to your account</h2></label>
        <form onSubmit={this.onSubmit}>
          <div>
            <input className="input-fields"
              type="email"
              name="email"
              placeholder="Email Address"
              value={this.state.email}
              onChange={this.onChange}
              required
              autoFocus
            />
          </div>
          <div>
            <input className="input-fields"
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.onChange}
              required
              autoFocus
            />
          </div>

          <div>
            <input type="checkbox" />
            <label className="lab" >Remmeber me </label>
          </div>

          <div>
            <button className="btn" type="submit" name="login">
              Login
            </button>
          </div>

          <div>
            <label className="lab">
              Create new Account
              <Link to="/Register"> Register Now !!!</Link>
            </label>
          </div>
          <div>
            <button className="btn" type="submit" name="facebook_login">
              Login with Facebook
            </button>
          </div>

          <div>
            <button className="btn" type="submit" name="google_login">
              Login With Google
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Login;

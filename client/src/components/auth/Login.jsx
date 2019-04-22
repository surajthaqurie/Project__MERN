import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './auth.css';

class Login extends Component {
  render() {
    return (
      <div className="main">
        <label>Sign In</label>
        <form>
          <div>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              required
              autoFocus
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              placeholder="password"
              required
              autoFocus
            />
          </div>

          <div>
            <input type="checkbox" />
            <label> Remmeber me </label>
          </div>

          <div>
            <button type="submit" id="login">
              Login
            </button>
          </div>

          <div>
            <label>
              Create new Account
              <Link to="/Register"> Register Now !!!</Link>
            </label>
          </div>
          <div>
            <button type="submit" id="facebook_login">
              Login with Facebook
            </button>
          </div>

          <div>
            <button type="submit" id="google_login">
              Login With Google
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Login;

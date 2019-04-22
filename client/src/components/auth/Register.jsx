import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
  render() {
    return (
      <div className="main">
        <label>
          <h2>Signup</h2>
        </label>
        <form>
          <div>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              required
              autoFocus
            />
          </div>

          <div>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              required
              autoFocus
            />
          </div>

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
              placeholder="Password"
              required
              autoFocus
            />
          </div>

          <div>
            <input
              type="text"
              id="phone"
              placeholder="Contact Number"
              required
              autoFocus
            />
          </div>

          <div>
            <button type="submit" id="register">
              Signup
            </button>
          </div>

          <div>
            <label>
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

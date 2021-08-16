import React, { Component } from "react";
import { connect } from "react-redux";
import {
  registerUserOperation,
  loginUserOperation,
} from "../../redux/auth/authOperations";
import { AuthContainer } from "./AuthStyled";
import sprite from "../../icons/project_sprites.svg";
import { withRouter } from "react-router-dom";
import { getError } from "../../redux/auth/authSelector";

class Auth extends Component {
  state = {
    email: "",
    password: "",
    displayName: "",
  };

  isRegisterPage = () => this.props.location.pathname === "/register";

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.error !== this.props.error) {
      this.isRegisterPage() &&
      this.props.error === "Request failed with status code 400"
        ? alert("User with this name is already registered.")
        : alert("User not found! Input correct login data.");
    }
  }

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.isRegisterPage()
      ? this.props.registerUserOperation(this.state)
      : this.props.loginUserOperation(this.state);
  };

  render() {
    const { pathname } = this.props.location;
    const { email, password, displayName } = this.state;
    return (
      <AuthContainer>
        <form
          onSubmit={this.onHandleSubmit}
          className="user-form"
          autoComplete="off"
          name="userForm"
        >
          {/* {pathname === "/register" ? (
            <p className="user-form-title">Register</p>
          ) : (
            <p className="user-form-title">Login</p>
          )} */}
          {this.isRegisterPage() && (
            <label className="user-form-label">
              Name
              <input
                type="text"
                name="displayName"
                onChange={this.onHandleChange}
                value={displayName}
                className="user-form-input"
                placeholder="Jony English"
                minLength="3"
                autoComplete="on"
                required
              />
              <svg className="icon-user">
                <use href={sprite + "#icon-user"} />
              </svg>
            </label>
          )}
          <label className="user-form-label">
            Email
            <input
              type="text"
              name="email"
              onChange={this.onHandleChange}
              value={email}
              className="user-form-input"
              placeholder="jony@gmail.com"
              minLength="3"
              autoComplete="on"
              required
            />
            <svg className="icon-user">
              <use href={sprite + "#icon-drawer"} />
            </svg>
          </label>
          <label className="user-form-label">
            Password
            <input
              type="text"
              name="password"
              onChange={this.onHandleChange}
              value={password}
              className="user-form-input"
              placeholder="Qwerty123"
              autoComplete="on"
              required
            />
            <svg className="icon-user">
              <use href={sprite + "#icon-user"} />
            </svg>
          </label>
          <button type="submit" className="user-form-button">
            {pathname === "/register" ? "Register" : "Login"}
          </button>
        </form>
      </AuthContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  error: getError(state),
});

export default connect(mapStateToProps, {
  registerUserOperation,
  loginUserOperation,
})(withRouter(Auth));

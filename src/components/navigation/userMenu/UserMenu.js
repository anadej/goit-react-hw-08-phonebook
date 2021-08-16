import React from "react";
import { connect } from "react-redux";
import { signOutUser } from "../../../redux/auth/authAction";
import { getDisplayName } from "../../../redux/auth/authSelector";

const UserMenu = ({ signOutUser, displayName }) => {
  return (
    <>
      <li className="navListItem navLink">Welcome, {displayName}</li>
      <li className="navListItem">
        <a className="navLink" href="/login" onClick={() => signOutUser()}>
          LOGOUT
        </a>
      </li>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    displayName: getDisplayName(state),
  };
};

export default connect(mapStateToProps, { signOutUser })(UserMenu);

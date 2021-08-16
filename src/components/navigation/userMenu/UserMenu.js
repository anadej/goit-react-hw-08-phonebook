import React from "react";
import { connect } from "react-redux";
import { signOutUser } from "../../../redux/auth/authAction";
import { getEmail } from "../../../redux/auth/authSelector";

const UserMenu = ({ signOutUser, isMail }) => {
  return (
    <>
      <li className="navListItem navLink userAuth">({isMail})</li>
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
    isMail: getEmail(state),
  };
};

export default connect(mapStateToProps, { signOutUser })(UserMenu);

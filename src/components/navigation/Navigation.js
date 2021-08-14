import React from "react";
import { connect } from "react-redux";
import { signOutUser } from "../../redux/auth/authAction";
import { getAuth } from "../../redux/auth/authSelector";
import { mainRoutes } from "../../routes/mainRoutes";
import NavigationListItem from "./NavigationListItem";
import { NavigationContainer } from "./navigationStyed";

const Navigation = ({ isAuth, signOutUser }) => {
  return (
    <NavigationContainer>
      <ul className="navList">
        {mainRoutes.map((route) => (
          <NavigationListItem {...route} key={route.path} isAuth={isAuth} />
        ))}
        {isAuth && (
          <li className="navLink" onClick={() => signOutUser()}>
            LOGOUT
          </li>
        )}
      </ul>
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: getAuth(state),
  };
};

export default connect(mapStateToProps, { signOutUser })(Navigation);

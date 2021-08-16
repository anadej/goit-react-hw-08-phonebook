import React from "react";
import { connect } from "react-redux";
import { getAuth } from "../../redux/auth/authSelector";
import { mainRoutes } from "../../routes/mainRoutes";
import NavigationListItem from "./NavigationListItem";
import { NavigationContainer } from "./navigationStyled";
import UserMenu from "./userMenu/UserMenu";

const Navigation = ({ isAuth }) => {
  return (
    <NavigationContainer>
      <ul className="navList">
        {mainRoutes.map((route) => (
          <NavigationListItem {...route} key={route.path} isAuth={isAuth} />
        ))}
        {
          isAuth && <UserMenu />
          // <li className="navLink" onClick={() => signOutUser()}>
          //   LOGOUT
          // </li>
        }
      </ul>
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: getAuth(state),
  };
};

export default connect(mapStateToProps)(Navigation);

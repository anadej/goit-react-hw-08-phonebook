import styled from "styled-components";

export const NavigationContainer = styled.nav`
  .navList {
    display: flex;
  }
  .navListItem:not(:last-child) {
    margin-right: 20px;
  }

  .navLink {
    text-decoration: none;
    font-weight: 700;
    color: darkblue;
  }

  .navLinkActive {
    color: #eb4629;
  }
`;

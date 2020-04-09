import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getIsLoggedIn } from "../../redux/selectors/userSelectors";
import { setLogInStatus } from "../../redux/actions/userActions";
import {
  navigateToHomePage,
  navigateToProfile,
} from "../../redux/actions/navigationActions";
import { TextButton } from "./";
import Colors from "./Colors";
import styled from "styled-components";

const HeaderBox = styled.div`
  display: flex;
  justify-content: flex-end;
  border-top: solid ${Colors.bordo};
  padding: 2vh 18vh;
`;

const NavLinkBox = styled((props) => <TextButton {...props} />)`
  margin: 0vh 0.5vh;
`;

const Header = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();

  return isLoggedIn ? (
    <HeaderBox>
      <NavLinkBox
        text={"Receptai"}
        action={() => {
          dispatch(navigateToHomePage());
        }}
      />
      <NavLinkBox
        text={"Vaiva"}
        action={() => {
          dispatch(navigateToProfile());
        }}
      />
      <NavLinkBox
        text={"Atsijungti"}
        action={() => {
          dispatch(setLogInStatus(false));
        }}
      />
    </HeaderBox>
  ) : (
    <div />
  );
};

export default Header;

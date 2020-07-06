import React from "react";
import Colors from "./Colors";
import { ReactComponent as CookingIcon } from "../common/icons/cooking.svg";
import { useSelector } from "react-redux";
import { getIsLoading } from "../../redux/selectors/userSelectors";

import styled from "styled-components";

const PageOverlay = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: ${Colors.overlay};
  overflow-x: hidden;
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const LoadingText = styled.p`
  margin-top: 2vh;
`;

function Overlay() {
  const isLoading = useSelector(getIsLoading);

  return isLoading ? (
    <PageOverlay>
      <CookingIcon />
      <LoadingText>KRAUNASI...</LoadingText>
    </PageOverlay>
  ) : null;
}

export default Overlay;

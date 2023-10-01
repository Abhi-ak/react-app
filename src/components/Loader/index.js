import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { StyledContainer } from "./style";

const Loader = ({ open }) =>
  open ? (
    <StyledContainer>
      <CircularProgress />
    </StyledContainer>
  ) : null;

export { Loader };

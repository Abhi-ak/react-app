import Button from "@mui/material/Button";
import styled from "styled-components";

export const ButtonWrapper = styled(Button)`
  ${({ theme }) => `
  width: 100%;
  height: 48px;
  background-color: ${theme.colors.button} !important;
  `}
`;

import Checkbox from "@mui/material/Checkbox";
import styled from "styled-components";

export const CheckboxWrapper = styled(Checkbox)`
  ${({ style, theme, mode }) => `
  .MuiSvgIcon-root {
    width: 32px;
    height: 32px;
  }
  `}
`;

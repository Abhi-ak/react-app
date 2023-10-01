import styled from "styled-components";
import TextField from "@mui/material/TextField";

const InputWrapper = styled(TextField)`
  ${({ theme }) => `
  width: 100%;
  height: 100%;
  .MuiOutlinedInput-notchedOutline {
    border-color: ${theme.colors.grey};
    border-radius: 0px;
    border-width: 2px;
  }
  .MuiFormLabel-root {
    color: ${theme.colors.grey};
    font-size: ${theme.fontSizes.large};
    font-weight: ${theme.fontWeight.semiBold};
  }
  `}
`;

const MainWrapper = styled.div`
  ${({ style, theme, mode, width, height }) => `
    width: 100%;
    height: 48px;
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0 30px white inset;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
    }
  `}
`;

const Styled = { InputWrapper, MainWrapper };
export default Styled;

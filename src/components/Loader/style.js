import styled from "styled-components";

const StyledContainer = styled.div`
  ${({ theme }) => `
height: 100%;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
z-index: 500;
position: fixed;
top: 0;
background-color: ${theme.colors.grey};
-webkit-tap-highlight-color: transparent;
`}
`;

export { StyledContainer };

import styled from "styled-components";

export const Container = styled.div`
  ${({ theme }) => `
  display: flex;
  align-items: center;
  width: 70vw;
  margin-left: auto;
  margin-right: auto;
  height: 100vh;
  max-width: 1600px;
  .padding-top-30 {
    padding-top: 30px;
  }
`}
`;

export const Wrapper = styled.div`
  ${({ theme }) => `
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 960px) {
    justify-content:center;
  }
`}
`;

export const Header = styled.div`
  ${({ theme }) => `
  color: ${theme.colors.text.heading};
  font-size: 32px;
  font-style: normal;
  font-weight: ${theme.fontWeight.bold};
  line-height: 42px;
  padding-bottom: 30px;
  .newUser {
    color: ${theme.colors.text.heading};
    font-size: ${theme.fontSizes.large};
    font-style: normal;
    font-weight: ${theme.fontWeight.bold};
    line-height: 26px;
  }

  .createAccount {
      color: ${theme.colors.text.link};
      font-size: ${theme.fontSizes.large};
      font-style: normal;
      font-weight: ${theme.fontWeight.semiBold};
      line-height: normal; 
      padding-left: 5px;
      cursor: pointer;
   }
    @media (max-width: 960px) {
      .signIn {
        text-align: center;
      }
    }
`}
`;

export const FormWrapper = styled.div`
  ${({ theme }) => `
  display: flex;
  flex-direction: column;
  .checkbox {
    .MuiTypography-root {
      font-family: Noto Sans;
      font-size: ${theme.fontSizes.large};
      font-weight: ${theme.fontWeight.semiBold};
      color: ${theme.colors.mediumGrey};
    }
  }
  `}
`;

export const InfoWrapper = styled.div`
  ${({ theme }) => `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  .border-top {
    width: 50px;
    height: 2px;
    background-color: ${theme.colors.background};
  }
  .info {
    color: ${theme.colors.mediumGrey};
    text-align: center;
    font-size: ${theme.fontSizes.semiMedium};
    font-weight: ${theme.fontWeight.bold};
  }
  `}
`;

export const SSOWrapper = styled.div`
  width: 100%;
  .MuiStack-root {
    justify-content: space-between;
  }
`;
export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 20%;
  padding-top: 50px;
`;
export const RightWrapper = styled.div`
  display: flex;
  flex: 0 0 80%;
  justify-content: flex-end;
  @media (max-width: 960px) {
    display: none;
  }
`;

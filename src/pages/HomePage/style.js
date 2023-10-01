import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .countryWrapper {
    display: flex;
    flex-wrap: wrap;
    max-width: 1440px;
    justify-content: center;
    height: calc(100vh - 300px);
    overflow: auto;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const Header = styled.div`
  ${({ theme }) => `
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  padding-top: 50px;
  align-items: center;
  .countries {
    color: ${theme.colors.mediumGrey};
    font-size: ${theme.fontSizes.exLarge};
    font-style: normal;
    font-weight: ${theme.fontWeight.bold};
    width: 568px;
    @media (max-width: 1154px) {
      width: 350px;
    }
    @media (max-width: 720px) {
      width: 270px;
    }
  }
  .options {
    text-align: end;
    width: 528px;
    @media (max-width: 1154px) {
      width: 180px;
    }
    @media (max-width: 720px) {
      width: 50px;
      margin-bottom: -10px;
    }
    color: ${theme.colors.menu};
    font-size: ${theme.fontSizes.large};
    font-style: normal;
    font-weight: ${theme.fontWeight.semiBold};
    line-height: normal;
    span {
        cursor: pointer;
        margin-left: 15px;
        padding: 5px;
    }
    .selected {
      border-bottom: 2px solid ${theme.colors.grey};
    }
    }
`}
`;

import styled from "styled-components";

export const StyledCard = styled.div`
  ${({ style, theme, mode }) => `
  width: 528px;
  @media (max-width: 720px) {
    width: 317px;
  }
  height: 130px;
  @media (max-width: 720px) {
    height: 68px;
  }
  margin: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 2px solid ${theme.colors.grey};
  background: ${theme.colors.white};
  box-shadow: ${theme.boxShadow.card};
  .details {
    padding-left: 20px;
  }
  .region {
    padding-top: 5px;
    color: ${theme.colors.lightGrey};
    font-size: ${theme.fontSizes.large};
    @media (max-width: 720px) {
      font-size: ${theme.fontSizes.semiMedium};
    }
  }
  .imageWrap {
    padding: 10px;
  }
  .country {
    color: ${theme.colors.mediumGrey};;
    font-size: ${theme.fontSizes.exLarge};
    font-weight: ${theme.fontWeight.semiBold};
    @media (max-width: 720px) {
      font-size: ${theme.fontSizes.large};
    }
  }
  `}
`;

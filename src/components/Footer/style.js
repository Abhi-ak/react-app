import styled from "styled-components";

export const Container = styled.div`
  ${({ theme }) => `
  display: flex;
  align-items: center;
  width: 100%;
  padding-top: 20px;
  max-width: 1400px;
  justify-content: center;
  flex-direction: column;
`}
`;

export const SSOWrapper = styled.div`
  width: 250px;
  padding-bottom: 20px;
  .MuiStack-root {
    justify-content: space-between;
  }
`;

export const DetailsWrapper = styled.div`
  ${({ theme }) => `
.contact {
    color: ${theme.colors.mediumGrey};
    text-align: center;
    font-size: ${theme.fontSizes.semiMedium};
    font-weight: ${theme.fontWeight.bold};
    padding-bottom: 10px;
}
.copyright {
    color: ${theme.colors.mediumGrey};
    text-align: center;
    font-size: ${theme.fontSizes.semiMedium};
    font-style: normal;
    font-weight: ${theme.fontWeight.bold};
    letter-spacing: 0.39px;
}
`}
`;

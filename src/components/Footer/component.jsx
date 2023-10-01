import React from "react";
import { SSOWrapper, Container, DetailsWrapper } from "./style";
import SSOMethods from "../../components/UI/SSOMethods";
import ssoList from "../../config/menu/social";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <Container>
      <SSOWrapper className="padding-top-30">
        <SSOMethods data={ssoList} />
      </SSOWrapper>
      <DetailsWrapper>
        <div className="contact">Example@email.com</div>
        <div className="copyright">
          {`Copyright © ${year} Name. All rights reserved.`}
        </div>
      </DetailsWrapper>
    </Container>
  );
};

export default Footer;

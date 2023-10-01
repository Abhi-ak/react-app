import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Wrapper,
  Header,
  FormWrapper,
  InfoWrapper,
  SSOWrapper,
  LeftWrapper,
  RightWrapper,
  Container,
} from "./style";
import Input from "../../components/UI/Input";
import Checkbox from "../../components/UI/Checkbox";
import Button from "../../components/UI/Button";
import SSOMethods from "../../components/UI/SSOMethods";
import ssoList from "../../config/menu/social";
import LoginBg from "../../assets/loginBg.svg";

const Login = () => {
  const navigate = useNavigate();
  const redirectToDashboard = () => {
    navigate("/dashboard");
  };
  return (
    <Container>
      <Wrapper>
        <LeftWrapper>
          <Header>
            <div className="signIn">Sign In</div>
            <div>
              <span className="newUser">New user? </span>
              <span className="createAccount"> Create an account</span>
            </div>
          </Header>
          <FormWrapper>
            <Input
              label="Username or email"
              id="username"
              type="text"
              autoFocus
            />
            <div className="padding-top-30">
              <Input label="Password" id="password" type="password" />
            </div>
            <div className="checkbox padding-top-30">
              <Checkbox label="Keep me signed in" />
            </div>
            <div className="padding-top-30">
              <Button label="Sign in" onClick={() => redirectToDashboard()} />
            </div>
          </FormWrapper>
          <InfoWrapper className="padding-top-30">
            <div className="border-top"></div>
            <div className="info"> Or Sign In With </div>
            <div className="border-top"></div>
          </InfoWrapper>
          <SSOWrapper className="padding-top-30">
            <SSOMethods data={ssoList} />
          </SSOWrapper>
        </LeftWrapper>
        <RightWrapper>
          <img src={LoginBg} alt="loginBg" height={500} width={300} />
        </RightWrapper>
      </Wrapper>
    </Container>
  );
};

export default Login;

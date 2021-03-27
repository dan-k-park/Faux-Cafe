import React from "react";
import { GoogleLoginButton, TwitterLoginButton, FacebookLoginButton } from "react-social-login-buttons";

import {
  Container,
  Form,
  FormH1,
  FormContent,
  FormWrap,
  Icon
} from "./SigninElements";

const Signin = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Faux Cafe</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign In</FormH1>
              <GoogleLoginButton onClick={() => alert("Hello")}/>
              <FacebookLoginButton onClick={() => alert("Hello")}/>
              <TwitterLoginButton onClick={() => alert("Hello")}/>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Signin;

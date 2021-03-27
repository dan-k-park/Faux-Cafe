import React from "react";
import { GoogleLoginButton, TwitterLoginButton, FacebookLoginButton } from "react-social-login-buttons";

import {
  Container,
  FormBg,
  ImageBg,
  Form,
  FormH1,
  FormContent,
  FormWrap,
  Icon,
  FormSocialLoginBtn
} from "./SigninElements";

import Image from "../../assets/images/hero-background.jpg";


const Signin = () => {
  return (
    <Container>
      <FormBg>
        <ImageBg src={Image} type="image/jpg" />
      </FormBg>
      <FormWrap>
        <Icon to="/">Faux Cafe</Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Sign In</FormH1>
            <FormSocialLoginBtn>
              <GoogleLoginButton onClick={() => window.location = '/auth/google'} />
            </FormSocialLoginBtn>
            <FormSocialLoginBtn>
              <FacebookLoginButton onClick={() => window.location = '/auth/google'} />
            </FormSocialLoginBtn>
            <FormSocialLoginBtn>
              <TwitterLoginButton onClick={() => window.location = '/auth/google'} />
            </FormSocialLoginBtn>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default Signin;

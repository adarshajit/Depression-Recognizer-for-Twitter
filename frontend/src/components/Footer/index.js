import React from "react";
import * as Fa from "react-icons/fa";
import { Wrapper, P, Source, P1, A } from "./FooterElements";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <P>Final Year Project 2021</P>
        <A href="https://github.com/adarshajit/Depression-Recognizer-for-Twitter">
          <Source>
            <P1>Source code on</P1>

            <Fa.FaGithub />
          </Source>
        </A>
      </Wrapper>
    </>
  );
};

export default Footer;

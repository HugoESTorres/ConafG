import React from "react";
import styled from "styled-components";

const Contain = styled.div`
  margin:0 auto 30px;
  padding: 0 15px;

  @media screen and (max-width: 767px) {
    width: 370px;
    padding: 0 5px;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 760px;
  }

  @media screen and (min-width: 1024px) {
    width: 1020px;
  }
`;

const Container = ({ children }) => {
  return <Contain>{children}</Contain>;
};

export default Container;

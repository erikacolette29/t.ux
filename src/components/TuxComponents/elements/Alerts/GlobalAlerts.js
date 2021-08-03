import React from "react";
import styled, { css } from "styled-components";

import { pop_semiBold, pop_reg, Poppins } from "../../utilities/Type";

export const AlertIcon = styled.img`
  position: absolute;
  left: 20px;
  width: 12px;
`;

export const XMarker = styled.img`
  position: absolute;
  right: 45px;
  width: 12px;
  align-items: center;
  justify-content: center;
`;

export const ExclaimIcon = styled.img`
  position: absolute;
  left: 30px;
  width: 22px;
`;
export const ImgButton = styled.button`
  //display: flex;
  border: none;
  background: none;
  position: absolute;
  top: 14px;
  right: -30px;

  &:hover {
    cursor: pointer;
  }
`;

export const GlobalSuccess = styled.div`
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 500px;
  height: 94px;
  border-left: 4px solid #78c077;
  box-sizing: border-box;
  line-height: 24px;
`;

export const PSuccess = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 70px;
  font: ${pop_semiBold};
  font-size: 16px;
`;

export const SubSuccess = styled.div`
  font: ${pop_reg};
  margin-left: 5px;
  margin-top: -3px;
`;

export const GlobalFailure = styled(GlobalSuccess)`
 
  border-left: 4px solid #e6211e;

`;

import React from "react";
import {GlobalSuccess, GlobalFailure, ExclaimIcon, ImgButton, XMarker, SubSuccess,PSuccess} from './GlobalAlerts.js'


import { withDesign } from "storybook-addon-designs";
export default {
  title: "Global Alerts",
  decorators: [withDesign],
};


export const GlobalConfirm = () => (
  <>
  <GlobalSuccess>
    <ExclaimIcon className='success-icon'  src="/images/GreenExclaimation.svg" />
    <PSuccess>
      <strong>Congratulations! </strong><SubSuccess> - subtitle goes here</SubSuccess> 
    </PSuccess>
    <ImgButton type="">
      <XMarker src="/images/AlertXs.svg" />
    </ImgButton>
  </GlobalSuccess>
  </>
)

export const GlobalDeny = () => (
  <>
    <GlobalFailure>
    <ExclaimIcon src="/images/failure.svg" className='failure-icon' />
<PSuccess>
      <strong>Unfortunately</strong> <SubSuccess>- subtitle goes here</SubSuccess>
      </PSuccess>
    <ImgButton type="">
      <XMarker src="/images/AlertXs.svg" />
    </ImgButton>
    </GlobalFailure>
  </>
);




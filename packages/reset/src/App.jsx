import React from "react";
import { RecoilRoot } from 'recoil';
import "antd/dist/antd.css";

import ResetButton from "./ResetButton";

export default () => (
  <RecoilRoot>
    Hola <ResetButton />
  </RecoilRoot>
);

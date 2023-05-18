import React from "react";
import { States } from "./useStates";
import { UploadState } from "./songUploadContext";

const ContextContainer = ({ children }) => {
  return (
    <States>
      <UploadState>{children}</UploadState>
    </States>
  );
};

export default ContextContainer;

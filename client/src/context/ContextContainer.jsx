import React from "react";
import { States } from "./useStates";
import { UploadState } from "./songUploadContext";
import { AdminStates } from "./useAdminStates";

const ContextContainer = ({ children }) => {
  return (
    <States>
      <UploadState>
        {/* <AdminStates>
          {children}
        </AdminStates> */}
        {children}
      </UploadState>
    </States>
  );
};

export default ContextContainer;

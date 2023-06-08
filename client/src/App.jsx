/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import "./App.css";
import { getUser } from "./Slice/UserSlice";
import { useEffect } from "react";
import { Amplify } from "aws-amplify";
import UserRoutes from "./routes/user.routes";
import AdminRoutes from "./routes/admin.routes";
import { getAdmin } from "./Slice/AdminSlice";
import DefaultRoutes from "./routes/Default.routes";

function App() {
  const admin = useSelector(getAdmin);
  const user = useSelector(getUser);
  useEffect(() => {
    const S3_BUCKET = process.env.REACT_APP_BUCKET;
    const REGION = process.env.REACT_APP_REGION;
    const IDENTITY_POOL_ID = process.env.REACT_APP_IDENTITY_POOL_ID;
    Amplify.configure({
      Auth: {
        identityPoolId: IDENTITY_POOL_ID, //REQUIRED - Amazon Cognito Identity Pool ID
        region: REGION, // REQUIRED - Amazon Cognito Region
      },
      Storage: {
        AWSS3: {
          bucket: S3_BUCKET, //REQUIRED -  Amazon S3 bucket name
          region: REGION,
        },
      },
    });
  }, []);
  return (
    <div className="scrollbar overflow-hidden min-h-screen bg-black">
      {user ? <UserRoutes /> : admin ? <AdminRoutes /> : <DefaultRoutes />}
    </div>
  );
}

export default App;

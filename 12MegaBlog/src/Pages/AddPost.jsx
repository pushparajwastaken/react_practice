import {
  Container as ContainerComponent,
  postForm as PostFormComponent,
} from "../components";
import React from "react";
const Login = () => {
  return (
    <div className="py-8">
      <ContainerComponent>
        <PostFormComponent />
      </ContainerComponent>
    </div>
  );
};
export default Login;

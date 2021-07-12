import React from "react";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux'
import {setProfile} from '../redux/actions/userAction'

const client_id = ""

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const successResponse = (response) => {
    if (response.profileObj){
      dispatch(setProfile(response.profileObj,history))
      // console.log(response.profileObj);
    }
  };
  const failureResponse = (response) => {
    alert(JSON.stringify(response));
  };

  return (
    <div>
      <GoogleLogin
        clientId={client_id}
        buttonText="Login"
        onSuccess={successResponse}
        onFailure={failureResponse}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default Login

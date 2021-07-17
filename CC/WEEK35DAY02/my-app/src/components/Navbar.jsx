import React from "react";
import { Link, useHistory } from "react-router-dom";
import {useSelector} from 'react-redux'

const Navbar = () => {
  const { isAuthenticated } = useSelector((state) => state.userRoot);

  const history = useHistory();

  const clickHandler = () => {
    if (isAuthenticated) {
      history.push("/profile");
    } else {
      alert("login first");
      history.push("/login");

      return
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => history.push("/login")} type="button">
          LOGIN
        </button>
      </div>
      <div>
        <button onClick={clickHandler} type="button">
          PROFILE
        </button>
      </div>
    </div>
  );
};

export default Navbar;
